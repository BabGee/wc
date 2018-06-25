from django.shortcuts import HttpResponseRedirect, HttpResponse
import simplejson as json
from django.core.exceptions import PermissionDenied
from django.contrib.auth import authenticate
from api.views import *
from processor.models import ServiceCommand
from django.contrib.gis.geoip import GeoIP
from django.contrib.auth import logout

import logging
lgr = logging.getLogger('administration')

class WebService:
	def response_processor(self, request, service, payload):
		try:
			lgr.info('Service: %s' % service)
			lgr.info('Payload: %s' % payload)

			if payload['response_status'] == '00':
				lgr.info('Succesful Response Status')
				if 'login' in payload['response'].keys():
					request.session['api_key'] = payload['response']['login']['api_key']
					request.session['status'] = payload['response']['login']['status']
					request.session['access_level'] = payload['response']['login']['access_level']
				if 'session' in payload['response'].keys():
					request.session['session_id'] = payload['response']['session']

			elif payload['response_status'] <> '00':
				lgr.info('Failed Transaction')

			if 'response' in payload.keys():
				if 'logout' in payload['response'].keys() and payload['response']['logout'] == True:
					logout(request)

			#remove secure data
			if 'SESSION_ID' in payload.keys():del payload['SESSION_ID']
			if 'sec_hash' in payload.keys():del payload['sec_hash']
			if 'access_level' in payload.keys():del payload['access_level']
			if 'response' in payload.keys() and 'session' in payload['response'].keys():del payload['response']['session']
			if 'response' in payload.keys() and 'login' in payload['response'].keys():del payload['response']['login']


		except Exception, e:
			lgr.info('Error Processing response: %s' % e)
			payload['response_status'] = '96'

		return payload

	def request_processor(self, request, service, payload):
		try:
			#request.method = 'POST'
			#new_req = request.POST.copy()
			#request.POST.update(json.dumps(payload))
			import copy
			req_copy = copy.copy(request)


			req_copy.method = "POST"
			req_copy.POST = request.POST.copy()
			req_copy.POST.update(payload)

			response = Interface().interface(req_copy, service)
			if response.status_code == 200:
				payload = json.loads(response.content)
			else:
				payload['response_status'] = '96'
			#return HttpResponseRedirect(reverse('polls:results', payload))
		except Exception, e:
			lgr.info('Error Processing request: %s' % e)
			payload['response_status'] = '96'

		return payload


