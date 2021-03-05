from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.core.exceptions import PermissionDenied
from django.template import TemplateDoesNotExist
from gui.models import *
from django.db.models import Q
from itertools import chain
from django.contrib.auth import authenticate
import types, csv, re
from processor.views import *
import simplejson as json
from django.contrib.gis.geoip2 import GeoIP2
from gui.models import *
from api.models import *
from django.http import Http404
from django.views.decorators.csrf import csrf_exempt, csrf_protect, ensure_csrf_cookie, requires_csrf_token
from django.views.decorators.clickjacking import xframe_options_exempt
from django.utils.decorators import method_decorator
from administration.views import *

import logging
lgr = logging.getLogger('gui')


class UI:
	@csrf_exempt
	@xframe_options_exempt
	def cybersource_termurl(self, request):
		try:
			c = {}
			template_file = 'cybersource_termurl.html'
			response = render(request, template_file, c)
			#Added to support cookies on explorer
			response["P3P"] = 'CP="IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT"'

			return response

		except Exception as e:
			lgr.info("Error on cybersource_termurl: %s" % e)
			raise Http404
		
	def home_page(self, request):

		def default_initial_page(session_id):
			if session_id is not None:
				home_page = '/index/'
			else:
				home_page = '/home/'

			return HttpResponseRedirect(home_page)

		session_id = request.session.get('session_id')

		lgr.info('Request Host: %s' % request.get_host())

		host = request.get_host()

		lgr.info('Request META: %s' % request.META)
		if 'X-GATEWAY_HOST' in request.META.keys(): host = request.META['X-GATEWAY_HOST']

		lgr.info('Request Host: %s' % host)

		pattern = r'^(www\.)?((?P<domain>[\w.-]+)(:(?P<port>\d+))?)'

		domain_details =list(re.finditer(pattern, host))[0].groupdict()
		lgr.info(domain_details)
		domain = domain_details.get('domain')

		lgr.info('Domain: %s' % domain)

		gateway_path = GatewayHost.objects.using('read').filter(host=domain, status__name='ENABLED')

		lgr.info('Gateway Path: %s' % gateway_path)
		if gateway_path.exists():
			active_session = True if session_id is not None else False
			initial_page = InitialPage.objects.using('read').filter(page__display=True,gateway=gateway_path[0].gateway,
					 status__name='ACTIVE',active_session=active_session)

			if 'X-SUBDOMAIN' in request.META.keys():
				initial_page = initial_page.filter(subdomain=True)
			else:
				initial_page = initial_page.filter(subdomain=False)
		

			if initial_page.exists():
				lgr.info('Initial Page: %s' % initial_page)
				return self.pages(request, initial_page[0].page.path)
			else:
				return default_initial_page(session_id)

		else:
			return default_initial_page(session_id)

	def logout_user(self,request):
		logout(request)

	def request_processor(self, request, SERVICE):
		#lgr.info("Request: %s" % str(request)[:100])
		if request.is_ajax and request.method == 'POST':
			try:
				#lgr.info('Request Processor: %s' % request.META)
				payload = request.POST.copy()
				#lgr.info('Payload Original: %s' % payload)	
				if 'X-SUBDOMAIN' in request.META.keys():
					subdomain=request.META['X-SUBDOMAIN']

					pattern = r'^(www\.)?((?P<domain>[\w.-]+)(:(?P<port>\d+))?)'
					subdomain_details =list(re.finditer(pattern, subdomain))[0].groupdict()
					lgr.info(subdomain_details)
					subdomain = subdomain_details.get('domain')

					payload['subdomain'] = subdomain
					payload['trigger'] = "with_subdomain"

					#lgr.info('Subdomain in request:%s | %s' % (subdomain, payload))

				payload = WebService().request_processor(request,SERVICE, payload)
				payload = WebService().response_processor(request, SERVICE, payload)
				json_results = json.dumps(payload)		
				return HttpResponse(json_results, content_type='application/json')
			except Exception as e:
				lgr.info("Error Processing Request: %s" % e)
				return HttpResponse('Error: %s' % e)
		else:
			raise PermissionDenied

	def error_page(self, request, error):

	 	return self.pages(request, "error")

	@method_decorator([csrf_exempt, requires_csrf_token])
	def pages(self, request, page, subdomain=None, route=None):
		try:
			lgr.info('Sub-domain %s' % subdomain)
			lgr.info('Request Host: %s' % request.get_host())
			lgr.info('Page %s' % page)

			host = request.get_host()

			lgr.info('Route %s' % route)
			lgr.info('Request META: %s' % request.META)
			if 'X-SUBDOMAIN' in request.META.keys(): subdomain=request.META['X-SUBDOMAIN']
			if 'X-GATEWAY_HOST' in request.META.keys(): host = request.META['X-GATEWAY_HOST']

			lgr.info('Sub-domain %s' % subdomain)
			lgr.info('Request Host: %s' % host)

			pattern = r'^(www\.)?((?P<domain>[\w.-]+)(:(?P<port>\d+))?)'
			if subdomain:
				subdomain_details =list(re.finditer(pattern, subdomain))[0].groupdict()
				lgr.info(subdomain_details)
				subdomain = subdomain_details.get('domain')

			domain_details =list(re.finditer(pattern, host))[0].groupdict()
			lgr.info(domain_details)
			domain = domain_details.get('domain')

			lgr.info('Sub-domain %s' % subdomain)
			lgr.info('Domain: %s' % domain)

			gateway_path = GatewayHost.objects.using('read').filter(host=domain, status__name='ENABLED')

			if gateway_path.exists():

				permissions = Permission.objects.using('read').filter(Q(page__path=page), Q(page__display=True),\
						 Q(gateway=gateway_path[0].gateway)|Q(gateway=None),\
						 Q(status__name='ENABLED'))


				if permissions.exists():
					try:

						csrf_exempted = permissions[0].csrf_exempted
						xframe_exempted = permissions[0].xframe_exempted

						#lgr.info('PERMISSION: %s | CSRF EXEMPT: %s | XFRAME EXEMPT: %s' % (permissions[0], csrf_exempted, xframe_exempted))
						try:
							if request.META.get('HTTP_REFERER'):
								referer = request.META['HTTP_REFERER']
								pattern = r'(.*\://)?(?:www.)?((?P<domain>[\w.-]+)(:(?P<port>\d+))?).*$'

								referer_details =list(re.finditer(pattern, referer))[0].groupdict()
								lgr.info(referer_details)
								referer = referer_details.get('domain')

								lgr.info("Current Site Domain Referer: %s" % (referer)) #Referer gives even frame redirecting domains
								referer_host = RefererHost.objects.using('read').filter(host=referer, permissions=permissions[0],status__name='ENABLED')
								if referer_host.exists():
									csrf_exempted = referer_host[0].csrf_exempted
									xframe_exempted = referer_host[0].xframe_exempted

							#lgr.info('PERMISSION: %s | CSRF EXEMPT: %s | XFRAME EXEMPT: %s' % (permissions[0], csrf_exempted, xframe_exempted))
						except Exception as e: lgr.info("Error Getting Domain: %s" % e)

						request.permissions = permissions[0]
						request.csrf_exempted = csrf_exempted
						request.xframe_exempted = xframe_exempted

						class_name = str(permissions[0].page.module.display_name.replace(" ","_").title())
						#lgr.info('Class Name: %s' % class_name)
						processing_function = page.lower().replace(" ","_")
						#lgr.info('Processing Function: %s' % processing_function)

						import importlib
						node_to_call = str('gui.backend.wrappers')
						class_name = str(class_name)
						module =  importlib.import_module(node_to_call)
						lgr.info('Module: %s' % module)
						my_class = getattr(module, class_name)
						lgr.info('My Class: %s' % my_class)
						fn = my_class()
						lgr.info("Call Class: %s" % fn)

						try:
							func = getattr(fn, processing_function)
							responseParams = func (request, permissions[0].page, subdomain)
						except: 
							func = getattr(fn, "default_page")
							responseParams = func (request, permissions[0].page, subdomain)

						#lgr.info('Response Params - Request: %s' % str(responseParams.request))

						#lgr.info('Response Params - Response: %s' % str(responseParams.response))

						template_file = "theme-loader.html"
						#template_file = str(permissions[0].page.template.template_file)
						page_service = permissions[0].page.service
						#lgr.info('Template File: %s' % template_file)

						if 'response' in responseParams.response.keys() and 'redirect' in responseParams.response['response'] and responseParams.response['response']['redirect'] not in ['',None]:
							return HttpResponseRedirect(responseParams.response['response']['redirect'])
						elif 'manifest' in responseParams.response.keys() and responseParams.response['manifest'] not in ['',None]:
							lgr.info('Manifest Response: %s' % responseParams.response['manifest'])
							return HttpResponse(responseParams.response['manifest'], content_type='application/json')
						else:			
							host = subdomain  if subdomain else domain
							#host = request.get_host()
							c = {
								'route': route,
								'host': host,
								'template_file': str(permissions[0].page.template.template_file),
								'gateway': gateway_path[0].gateway.name, 
								'color': gateway_path[0].gateway.default_color,
								'favicon': gateway_path[0].gateway.favicon,
								'description': gateway_path[0].gateway.description, 
								'params': responseParams.response,
								'request': responseParams.request,
								'service': page_service,
								'page': page
								}

							#lgr.info(c)


							P3P = 'CP="IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT"'

							@csrf_protect
							def render_enabled(request, template_file, c):
								response = render(request, template_file, c)
								#Added to support cookies on explorer
								response["P3P"] = P3P

								return response
							@csrf_exempt
							def render_csrf_exempt(request, template_file, c):
								response = render(request, template_file, c)
								#Added to support cookies on explorer
								response["P3P"] = P3P 

								return response

							@csrf_protect
							@xframe_options_exempt
							def render_xframe_exempt(request, template_file, c):
								response = render(request, template_file, c)
								#Added to support cookies on explorer
								response["P3P"] = P3P 

								return response
							@csrf_exempt
							@xframe_options_exempt
							def render_csrf_xframe_exempt(request, template_file, c):
								response = render(request, template_file, c)
								#Added to support cookies on explorer
								response["P3P"] = P3P 

								return response


							if xframe_exempted and csrf_exempted:
								lgr.info('xframe csrf exempted')

								return render_csrf_xframe_exempt(request, template_file, c)
								#return render_enabled(request, template_file, c)
							elif xframe_exempted:
								lgr.info('xframe exempted')
								return render_xframe_exempt(request, template_file, c)
							elif csrf_exempted:
								lgr.info('csrf exempted')
								return render_csrf_exempt(request, template_file, c)
							else:
								return render_enabled(request, template_file, c)

					except Exception as e:
						lgr.info('Error getting page: %s' % e)
						error = 'Error getting Page'
						return self.error_page(request, error)
						#raise Http404
				else:
					lgr.info('Page not Found')
					raise Http404
			else:
				lgr.info('Host not Found')
				raise Http404

		except Exception as e:
			lgr.info('Error getting page permissions: %s' % e)
					
			raise Http404

