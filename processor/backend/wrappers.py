import hashlib, hmac, base64, socket
from processor.models import *
#from bridge.backend.local import *
from decimal import Decimal, ROUND_DOWN
import types
from django.contrib.gis.geoip import GeoIP
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.http import HttpResponseForbidden
from django.shortcuts import HttpResponseRedirect, HttpResponse
import simplejson as json
import string

import logging
lgr = logging.getLogger('processor')


class Authorize:
	def secure(self, payload, API_KEY):
                new_payload = {}
                payload = dict(map(lambda (key, value):(string.lower(key),str(value) if isinstance(value, dict) is False else json.dumps(value)), payload.items()))
                for key, value in payload.items():
                        if 'sec_hash' not in key and 'credentials' not in key:
				try:value=json.loads(value, parse_float=Decimal);value=str(value) if isinstance(value,Decimal) else value #(BUG!!) JSON loads converts decimal places
				except:pass
				if isinstance(value, dict) is False: new_payload[key]=value
		p = []
		for n in sorted(new_payload.keys()):
			k = '%s=%s' % (n,new_payload[n])
			p.append(k)
		p1 = '&'.join(p)
		a = hmac.new( base64.b64decode(API_KEY), p1, hashlib.sha256)
		return base64.b64encode(a.digest())

	def check_hash(self, payload, API_KEY):
		lgr.info("Check Hash: %s" % base64.b64decode(API_KEY))
		secret = payload['sec_hash']
		#remove sec_hash and hash_type	
		sec_hash = self.secure(payload,API_KEY) 
		if base64.b64decode(secret) == base64.b64decode(sec_hash):
			payload['response_status'] = '00'
		else:
			lgr.info("Secret: %s Sec Hash: %s" % (str(secret)[:100], str(sec_hash)[:100]))
			payload['response_status'] = '15'

		return payload


	def hash_payload(self, payload, API_KEY):
		try:
			lgr.info("Check Hash: %s" % base64.b64decode(API_KEY))
			sec_hash = self.secure(payload,API_KEY) 
			payload['sec_hash'] =  sec_hash
		except Exception, e:
			lgr.info('Error on hash: %s' % e)
			payload['response_status'] = '96'

		return payload

class Wrappers(Authorize):
	def process_responsestatus(self,response_status):
		payload = {}
		try:
			response_status = ResponseStatus.objects.get(response=str(response_status))
			if str(response_status.action) == '1':
				payload['reverse'] = True
			else:
				payload['reverse'] = False
			payload['response'] = response_status.description
		except ResponseStatus.DoesNotExist:
			payload['reverse'] = True			
		return payload

	def process_payment(self, service, payload):
		payment = {'charge': 0, "raise_charge": True}

		try:
			service_charge = ServiceCharge.objects.filter(service=service)

			payment['amount'] = Decimal(0) if 'amount' not in payload.keys() else Decimal(payload['amount'])
			payment['currency'] = 'USD' if 'currency' not in payload.keys() else payload['currency']
			lgr.info("Payment : %s Service Charge: %s" % (payment, service_charge))
			for charge in service_charge:
				lgr.info("Charge: %s" % charge)
				if charge.is_percentage is False and (payment['currency'] <> charge.currency.code):
					payment = {}
					break
				elif payment['amount'] > charge.max_amount or payment['amount']< charge.min_amount:
					payment = {}
					break
				else:
					if charge.is_percentage:
						payment['charge'] = payment['charge'] + ((charge.charge_value/100)*payment['amount'])
					else:
						payment['charge'] = payment['charge'] + charge.charge_value

			lgr.info("Finished Loop")

			payment['amount'], payment['charge'] = payment['amount'].quantize(Decimal('.01'), rounding=ROUND_DOWN), payment['charge'].quantize(Decimal('.01'), rounding=ROUND_DOWN)
			lgr.info("Payment: %s" % payment)
		except Exception, e:
			payment = {}
			lgr.info('Payment Processing Failed: %s' % e)

		return payment

        def create_payload(self, request, service, payload):
                lgr.info('Started Creating Payload')

		#ip_address = request.META.get('REMOTE_ADDR')
		ip_address = request.META.get('CF-Connecting-IP', request.META.get('REMOTE_ADDR'))


		@csrf_protect		
		def on_site(request, service, payload):
	                #payload['SERVICE'] = service.command_function
			payload['CHID'] = '1'
			payload['gateway_host'] = request.get_host()
			
			g = GeoIP()
			city = g.city(ip_address)
			lgr.info('City: %s' % city)
			if city is not None and ('lat' not in payload.keys() and 'lng' not in payload.keys() ):
				lgr.info('Got Params')
				payload['lat'] = city['latitude']
				payload['lng'] = city['longitude']
			elif 'lat' not in payload.keys() and 'lng' not in payload.keys():
				lgr.info('No Params')
				payload['lat'] = '0.0'
				payload['lng'] = '0.0'
			payload['ip_address'] = ip_address 
			session_id = request.session.get('session_id')
			if session_id is not None and 'SESSION_ID' not in payload.keys():payload['SESSION_ID'] = session_id
			user_id = request.session.get('user_id')
			if user_id is not None and 'user_id' not in payload.keys():payload['user_id'] = user_id

			API_KEY = request.session.get('api_key')

			if API_KEY is not None:lgr.info('API KEY EXISTS: %s' % API_KEY)
			else:API_KEY = service.node_system.service_signature

			if 'sec_hash' in payload.keys(): #If Sec Hash Exists, the request has a response payload hence validate/Always comes before hash payload
				payload = self.check_hash(payload, API_KEY)

			payload = self.hash_payload(payload, API_KEY)
			return HttpResponse(payload)  
		try:
			payload_check = on_site(request, service, payload)
			if payload_check.status_code == 403:
				lgr.info('Did Not Pass Onsite Check')
				if 'ip_address' in payload.keys() and payload['ip_address'] <> ip_address:
					lgr.info('IP Did not Match. Injecting IP to cause failure. IP ADDRESS: %s' % ip_address)
					payload['ip_address'] = 'None'
				if 'ip_address' not in payload.keys():
					lgr.info('No IP Defined. Injecting IP to cause failure. IP ADDRESS: %s' % ip_address)
					payload['ip_address'] = 'None'
			elif payload_check.status_code == 200:
				lgr.info('Onsite Check Passed')

				#Payload automaticaly inherits the newly created items by django dict injection
			else:
				pass
		except Exception, e:
			lgr.info('Error on Protect: %s ' % e)

                return payload

	def call_api(self, item, function, payload):

		responseParams = {}
		lgr.info('processorFinal: We are now processing the transaction')

		try:
		        node_info = {'url': item.node_system.URL,
		                       	'timeout': item.node_system.timeout_time,
		                       	'key_file': item.node_system.key_path,
		                       	'cert_file': item.node_system.cert_path,
		                       	'use_ssl': item.node_system.use_ssl,
					'username': item.node_system.username,
					'password': item.node_system.password,
					'api_key': item.node_system.api_key
		                       }
		        lgr.info('processorFinal: node_info %s' % node_info)
		        client = xmlrpc_client()
		        lgr.info('processorFinal: Client %s' % client)
		        server = client.server(node_info)
		        
			lgr.info('processorFinal: server %s' % server)
			
			lgr.info('\n\n\n\n\n\n\n\n\n\n\nFuncions\n(payload: %s)\n(function: %s)\n(node info: %s)' % (payload, function, node_info))

		        responseParams = client.clientcall(server, payload, function, item.node_system.node_handler)
		except Exception, e:
		        lgr.info('processFinal: Error %s' % e);
		return  responseParams

		#(self, server, details, function, sub_node_handler):


	def call_local(self, item, function, payload):

		responseParams = {}
		lgr.info('processorFinal: We are now processing the transaction: %s' % item)
		try:	
		        node_info = {'url': item.node_system.URL,
		                       	'timeout': item.node_system.timeout_time,
		                       	'key_file': item.node_system.key_path,
		                       	'cert_file': item.node_system.cert_path,
		                       	'use_ssl': item.node_system.use_ssl,
					'username': item.node_system.username,
					'password': item.node_system.password,
					'api_key': item.node_system.api_key
		                       }
			lgr.info('\n\n\n\n\n\n\n\n\n\n\nFuncions\n(payload: %s)\n(function: %s)\n(node info: %s)' % (payload, function, node_info))

			node_to_call = str(item.node_system.URL.lower())
			class_name = str(item.service.product.name.title())
			lgr.info("Node To Call: %s Class Name: %s" % (node_to_call, class_name))
			exec 'from '+ node_to_call+'.views import '+class_name+' as c'

			lgr.info("Class: %s" % c)
			fn = c()
			lgr.info("Call Class: %s" % fn)
			func = getattr(fn, function)
			lgr.info("Run Func: %s" % func)
			responseParams = func (payload, node_info)
			lgr.info('Response: %s' % responseParams)

		except Exception, e:
			responseParams['response_status'] = '96'
		        lgr.info('processFinal: Error %s' % e);
		return  responseParams



