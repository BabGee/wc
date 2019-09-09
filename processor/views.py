import urllib, json, pycurl
from .models import *
from .backend.wrappers import Wrappers
from django.utils.formats import date_format
from django.utils import timezone
from datetime import datetime
from django.utils.dateformat import DateFormat
from django.utils.formats import get_format
from django.db.models import Q
import pycurl
from io import BytesIO, StringIO

import logging
lgr = logging.getLogger('processor')

class Processor:
	def action_exec(self, request, function, payload):

		try:

			if 'X-GATEWAY_HOST' in request.META.keys():
				gateway_path = GatewayHost.objects.using('read').filter(host=request.META['X-GATEWAY_HOST'], status__name='ENABLED')
			else:
				gateway_path = GatewayHost.objects.using('read').filter(host=request.get_host(), status__name='ENABLED')


			lgr.info('Gateway Path: %s' % gateway_path)
			if gateway_path.exists():

				service = ServiceCommand.objects.using('read').filter(Q(command_function=function),\
							 Q(gateway=None)|Q(gateway=gateway_path[0].gateway))
			else:
				service =ServiceCommand.objects.using('read').none()

			if service.exists() and service[0].status.name == 'ACTIVE':
				#lgr.info('Enables SWITCH Call')
				#lgr.info('Payload: %s' % payload)
				payload = Wrappers().create_payload(request, service[0], payload)

				#lgr.info('Payload: %s' % payload)
				path = '/%s/' % (service[0].command_function)
				service_path = urllib.parse.quote(path)
			
				node = service[0].node_system.URL + service_path
				timeout = service[0].node_system.timeout_time
				jdata = json.dumps(payload)
				lgr.info('Got Node To Call: %s' % node)
				c = pycurl.Curl()
				c.setopt(pycurl.URL, str(node) )
				c.setopt(pycurl.POST, 1)
				header=['Content-Type: application/json; charset=utf-8','Content-Length: '+str(len(jdata))]
				c.setopt(pycurl.HTTPHEADER, header)
				c.setopt(pycurl.POSTFIELDS, str(jdata))
				b = BytesIO()
				c.setopt(pycurl.WRITEFUNCTION, b.write)
				c.perform()
				response = b.getvalue()
				payload = json.loads(response)

				#lgr.info('Payload: %s' % payload)
				#payload = Wrappers().create_payload(request, service[0], payload)

				#lgr.info('Payload: %s' % payload)
			else:
				payload['overall_status'] = 'Service Does not Exist'
				payload['response_status'] = '96'
			if 'response_status' in payload.keys() and payload['response_status']=='00':
				pass 
			if 'response_status' in payload.keys() and payload['response_status']!='00':
				if 'response' in payload.keys() and len(payload['response'])>0:
					pass
				else:   
					status = Wrappers().process_responsestatus(payload['response_status'])
					payload['response'] = {'overall_status':status['response']}
	
		except Exception as e:
			lgr.info('Error Processing node request: %s' % e)
			payload = {}
			payload['response_status'] = '96'

		return payload



