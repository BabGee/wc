from django.shortcuts import HttpResponseRedirect, HttpResponse
from django.core.exceptions import PermissionDenied
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.clickjacking import xframe_options_exempt
from django.shortcuts import render
from django.conf import settings
from django.core.validators import URLValidator
from django.core.exceptions import ValidationError
from processor.views import *
import simplejson as json
from django.contrib.gis.geoip import GeoIP
from datetime import datetime
import base64, os, time, random, string
import urllib, urllib2, pycurl
from urlparse import urlparse, parse_qs
from io import BytesIO

from django.http import Http404, StreamingHttpResponse
import logging
lgr = logging.getLogger('api')

class Wrapper:
        def validate_url(self, url):
                val = URLValidator()
                try:
                        val(url)
                        return True
                except ValidationError, e:
                        lgr.info("URL Validation Error: %s" % e)
                        return False

        def post_request(self, data, node):
                if self.validate_url(node):
                        c = pycurl.Curl()
                        c.setopt(pycurl.CONNECTTIMEOUT, 5)
                        c.setopt(pycurl.TIMEOUT, 5)
                        c.setopt(pycurl.NOSIGNAL, 1)
                        c.setopt(pycurl.URL, str(node) )
                        c.setopt(pycurl.POST, 1)
                        header=['Content-Type: application/json; charset=utf-8','Content-Length: '+str(len(data))]
                        c.setopt(pycurl.HTTPHEADER, header)
                        c.setopt(pycurl.POSTFIELDS, str(data))
                        import StringIO
                        b = StringIO.StringIO()
                        c.setopt(pycurl.WRITEFUNCTION, b.write)
                        c.perform()
                        data = b.getvalue()

                return data


class Interface(Wrapper, PDFGenerator):
	def facebook(self, request, names):
		try:

			code = request.GET['code']
			client_id = '1961923274033108'
			client_secret = '47f394df0c5f282b7b375f9752c52bbd'
			lgr.info('Facebook Request: %s' % code)


			#Get Access Token
			url = 'https://graph.facebook.com/oauth/access_token'

			data = urllib.urlencode({'code' : code,
				 'client_id': client_id,
				 'client_secret': client_secret,
	                         'redirect_uri'  : 'http://'+request.get_host()+'/api/facebook/'+names+'/'})


			lgr.info('URL: %s| Data: %s' % (url,data))
                        data_string = self.post_request(data, url)
			lgr.info('Data String: %s' % data_string)

			params=parse_qs(str(data_string).strip())

			#Post message
			url = 'https://graph.facebook.com/me/feed' 

			data = urllib.urlencode({'access_token' : params['access_token'][0],
	                         'message'  : names+' Just bought a tool to build Kenya.','link': 'http://buildke.nikobizz.com/'})

			lgr.info('URL: %s| Data: %s' % (url,data))
                        payload = self.post_request(data, url)

			response = HttpResponse('Your Message has been posted to your FaceBook timeline! '+ str(payload))
			#response["Access-Control-Allow-Origin"] = "*"  
			response["Cache-Control"] = "no-cache"  
			return response
		except Exception, e:
			lgr.info("Error on social media request: %s" % e)
			raise Http404

	@csrf_exempt
	def load_video_file(self, request):
		try:
			from_file = 'http://regix.org/media/videogular.mp4'
			response = HttpResponseRedirect(from_file)
			response["Access-Control-Allow-Origin"] = "*"  
			response["Cache-Control"] = "no-cache"  
			return response
		except Exception, e:
			lgr.info("Error Loading Video File: %s" % e)
			raise Http404

	@csrf_exempt
	def upload_temp_file(self, request):
		try:
			payload = {}
			lgr.info('Files: %s' % request.FILES)
			if request.method == 'POST' and len(request.FILES.keys())>0:
				#ip_address = request.META.get('REMOTE_ADDR')
				ip_address = request.META.get('CF-Connecting-IP', request.META.get('REMOTE_ADDR'))

				filename = None 
				#timestamp = datetime.now().isoformat()
				timestamp = int(time.time()*1000)

				for f in request.FILES:
					file_object = request.FILES[f]
					lgr.info('File : %s' % file_object)
       	                                lgr.info('File Size: %s' % file_object.size)
					try: lgr.info('Blob Read'); xs=file_object.read()
					except: lgr.info('No Blob Read');
					lgr.info('Content Type : %s' % str(file_object.content_type))
					extension_chunks = str(file_object).split('.')
					extension = extension_chunks[len(extension_chunks)-1]
					extension = extension if len(extension)<=4 else str(file_object.content_type).split('/')[1]
					lgr.info('Extension: %s' % str(extension))

		                        chars = string.ascii_letters + string.punctuation + string.digits
                		        rnd = random.SystemRandom()
		                        rnd_name = ''.join(rnd.choice(chars) for i in range(4))

					filename = "%s_%s_%s" % (timestamp,rnd_name,extension_chunks[0][:50])
					filename = "%s.%s" % (base64.urlsafe_b64encode(filename), extension)

					obj = str(file_object.content_type).split("/")[0]
					lgr.info('Object is: %s' % obj)
					if  (int(file_object.size) > 500000 and obj in ['image','text']) or \
					(int(file_object.size) > 12000000 and obj in ['audio']) or \
					obj not in ['image','text','audio'] and file_object.content_type \
									not in ['application/vnd.ms-excel','application/pdf']:
						payload['response'] = 'FAIL | Please check the upload type, file size and extension'
						payload['response_status'] = '05'
					else:
						dir_name = 'tmp/uploads/'

						full_path = settings.MEDIA_ROOT +  '/' + dir_name + filename
						lgr.info('There is a full path: %s' % full_path)
						with open(full_path, 'wb+') as destination:
							lgr.info('With')
							count =0
							for chunk in file_object.chunks():
								count+=1
								destination.write(chunk)
								lgr.info('Count: %s' % count)
							destination.close()
						payload['response'] = filename
						payload['response_status'] = '00'							

				lgr.info('File: %s' % (filename))
	
				json_results = json.dumps(payload)		

				response = HttpResponse(json_results, content_type='application/json')  
				response["Access-Control-Allow-Origin"] = "*"  
				return response  
			else:
				raise Http404
		except Exception, e:
			lgr.info("Error Uploading Image: %s" % e)
			raise Http404


	@csrf_exempt
	def get_my_host(self, request):
		try:
			lgr.info('Get My IP')
			payload = {}
			#ip_address = request.META.get('REMOTE_ADDR') 
			ip_address = request.META.get('CF-Connecting-IP', request.META.get('REMOTE_ADDR'))
			g = GeoIP()
			city = g.city(ip_address)
			lgr.info('City: %s' % city)
			if city is not None:
				lgr.info('Got Params')
				payload['lat'] = city['latitude']
				payload['lng'] = city['longitude']
			else:
				lgr.info('No Params')
				payload['lat'] = '0.0'
				payload['lng'] = '0.0'
			payload['ip'] = ip_address 

			json_results = json.dumps(payload)
			if 'callback' in request.GET.keys():
				#DisplayIP({"ip":"197.237.183.92"});
				callback = '%s(%s);' % (request.GET['callback'],json_results)
				response = HttpResponse(callback, content_type='application/json')  
			else:
				response = HttpResponse(json_results, content_type='application/json')  
			response["Access-Control-Allow-Origin"] = "*"  
			return response  
		except Exception, e:
			lgr.info("Error Getting IP: %s" % e)
			return HttpResponse('Error: %s' % e)


	@csrf_exempt
	def interface(self, request, SERVICE):
		lgr.info('API Request: %s' % str(request)[:250] )
		try:
			if request.method == "POST":
				try:view_data = request.read(); payload = json.loads(view_data);
				except:view_data = request.POST.copy();payload = view_data;

				#try:view_data = request.read(); payload.update( json.loads(view_data) )
				#except:view_data = request.POST.copy();payload.update( view_data )
				payload = Processor().action_exec(request, SERVICE, payload)
				json_results = json.dumps(payload)		
				response = HttpResponse(json_results, content_type='application/json')  
				response["Access-Control-Allow-Origin"] = "*"  
				return response  
			else:
				lgr.info('REQUEST is not POST')
				return HttpResponse('Request is not POST')

		except Exception, e:
			lgr.info("Error Processing Request: %s" % e)
			return HttpResponse('Error: %s' % e)



