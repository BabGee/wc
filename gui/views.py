from django.shortcuts import render_to_response, render, redirect
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import HttpResponseRedirect, HttpResponse
from django.core.urlresolvers import reverse
from django.core.exceptions import PermissionDenied
from django.template import TemplateDoesNotExist
from gui.models import *
from gui.backend.wrappers import *
from django.db.models import Q
from itertools import chain
from django.contrib.auth import authenticate
import types
import csv
from processor.views import *
import simplejson as json
from django.contrib.gis.geoip import GeoIP
from gui.models import *
from api.models import *
from django.http import Http404
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.clickjacking import xframe_options_exempt

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

		except Exception, e:
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

		gateway_path = GatewayHost.objects.filter(host=request.get_host(), status__name='ENABLED')
		if gateway_path.exists():
			active_session = True if session_id is not None else False
			initial_page = InitialPage.objects.filter(Q(page__display=True),\
					 Q(gateway=gateway_path[0].gateway)|Q(gateway=None),\
					 Q(status__name='ACTIVE'),Q(active_session=active_session))
			if initial_page.exists():
				return self.pages(request, initial_page[0].page.path)
			else:
				return default_initial_page(session_id)

		else:
			return default_initial_page(session_id)

        def logout_user(self,request):
                logout(request)

	def request_processor(self, request, SERVICE):
		lgr.info("Request: %s" % str(request)[:100])
		if request.is_ajax and request.method == 'POST':
			try:
				lgr.info('Request Processor: %s' % request.META)
				payload = request.POST.copy()
				payload = WebService().request_processor(request,SERVICE, payload)
				payload = WebService().response_processor(request, SERVICE, payload)
				json_results = json.dumps(payload)		
				return HttpResponse(json_results, content_type='application/json')
			except Exception, e:
				lgr.info("Error Processing Request: %s" % e)
				return HttpResponse('Error: %s' % e)
		else:
			raise PermissionDenied

	def error_page(self, request, error):

	 	return self.pages(request, "error")


	def str_to_class(self, s):
	    if s in globals() and isinstance(globals()[s], types.ClassType):
		    return globals()[s]
	    return None

	def pages(self, request, page, subdomain=None):
		responseParams = {'response_status':'30',}
		try:
			lgr.info('Request Host: %s' % request.get_host())
			lgr.info('Sub-domain %s' % subdomain)
			gateway_path = GatewayHost.objects.filter(host=request.get_host(), status__name='ENABLED')
			if gateway_path.exists():

				permissions = Permission.objects.filter(Q(page__path=page), Q(page__display=True),\
						 Q(gateway=gateway_path[0].gateway)|Q(gateway=None),\
						 Q(status__name='ENABLED')|Q(status__name='ALLOWED'))


				if permissions.exists():
					try:
						class_name = str(permissions[0].page.module.display_name.replace(" ","_").title())
						lgr.info('Class Name: %s' % class_name)
						processing_function = page.lower().replace(" ","_")
						lgr.info('Processing Function: %s' % processing_function)
						c = self.str_to_class(class_name)
						fn = c()
						try:
							func = getattr(fn, processing_function)
							responseParams = func (request, permissions[0].page, subdomain)
						except: 
							func = getattr(fn, "default_page")
							responseParams = func (request, permissions[0].page, subdomain)

						lgr.info('Response Params: %s' % str(responseParams)[:100])

						template_file = "theme-loader.html"
						#template_file = str(permissions[0].page.template.template_file)
						page_service = permissions[0].page.service
						lgr.info('Template File: %s' % template_file)
						if 'data_format' in responseParams.keys() and responseParams['data_format'] == 'csv':
							#Create the HttpResponse object with the appropriate CSV header.
							response = HttpResponse(content_type='text/csv')
							if 'data_name' not in responseParams.keys() or responseParams['data_name'] in ['', None]:
								somefilename = page
							else:
								somefilename = request.POST['data_name'].replace(" ","_").lower()
							response['Content-Disposition'] = 'attachment; filename="' + somefilename +'.csv"'

							writer = csv.writer(response)
							writer.writerow(responseParams['response']['data_source']['data'].keys())

							report_list = responseParams['response']['data_source']['data']
							for listing in report_list:
								writer.writerow(listing)
							return response
						elif 'redirect_to_url' in responseParams.keys() and responseParams['redirect_to_url'] not in ['',None]:
							return HttpResponseRedirect(responseParams['redirect_to_url'])
						else:			
							host = subdomain  if subdomain else request.get_host()
							#host = request.get_host()
							c = {
								'host': host,
								'template_file': str(permissions[0].page.template.template_file),
								'gateway': gateway_path[0].gateway.name, 
								'color': gateway_path[0].gateway.default_color,
								'favicon': gateway_path[0].gateway.favicon,
								'description': gateway_path[0].gateway.description, 
								'params': responseParams,
								'service': page_service,
								'page': page
								}

							lgr.info(c)
							def render_enabled(request, template_file, c):
								response = render(request, template_file, c)
								#Added to support cookies on explorer
								response["P3P"] = 'CP="IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT"'

								return response

							@xframe_options_exempt
							def render_allowed(request, template_file, c):
								response = render(request, template_file, c)
								#Added to support cookies on explorer
								response["P3P"] = 'CP="IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT"'

								return response


							lgr.info('Permission: %s|%s' % (permissions,permissions[0].status.name))
							if permissions[0].status.name == 'ALLOWED':
								return render_allowed(request, template_file, c)
							else:
								try:
									if 'HTTP_REFERER' in request.META.keys():
										referer = request.META['HTTP_REFERER']
										referer_name = referer.split("/")[2]
										lgr.info("Current Site Domain Referer: %s|%s" % (referer, referer_name)) #Referer gives even frame redirecting domains
										referer_host = RefererHost.objects.filter(host=referer_name,permissions=permissions[0],status__name='ALLOWED')
										if referer_host.exists():
											lgr.info('Referer Exists')
											return render_allowed(request, template_file, c)
										else:
											return render_enabled(request, template_file, c)
									else:
										return render_enabled(request, template_file, c)
								except Exception, e:
									lgr.info("Error Getting Domain: %s" % e)
									return render_enabled(request, template_file, c)
					except Exception, e:
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

		except Exception, e:
			lgr.info('Error getting page permissions: %s' % e)
					
			raise Http404

