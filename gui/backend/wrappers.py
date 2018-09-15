import json
import logging

from administration.views import *
from api.models import *
from django.contrib.auth import logout
from django.contrib.gis.geoip import GeoIP
from gui.models import *

lgr = logging.getLogger('gui')


class Home:
    def manifest(self, request, page, subdomain):
        payload = request.GET.copy()
        payload.update(request.POST)

	if subdomain:
		payload['subdomain'] = subdomain
		payload['trigger'] = "with_subdomain"

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

	if 'response_status' in payload.keys() and payload['response_status'] == '00' and 'response' in payload.keys() and \
	'get_gateway_details' in payload['response'].keys() and payload['response']['get_gateway_details'] not in ['', None]:
		'''
'get_gateway_details': {'background_image': 'linear-gradient(to bottom, #137DB9 10%, #195ea3 90%)', 'name': 'nikobizz', 'tagline': 'NIKO BIZZ', 'secondary_color': '#ffa803', 'default_color': '#195ea3', 'icon_image': None, 'theme': 'polymer3.0', 'host': 'www.nikobizz.com', 'logo': 'administration_gateway_logo/nikobizz.png', 'accent_color': 'rgba(11,40,64,0.9)', 'primary_color': '#fcfcfc'}}
		'''
		manifest = {
				"name": payload['response']['get_gateway_details']['name'],
				"short_name": payload['response']['get_gateway_details']['name'],
				"description": payload['response']['get_gateway_details']['tagline'],
				"start_url": "/",
				"display": "standalone",
				"theme_color": payload['response']['get_gateway_details']['default_color'],
				"background_color": payload['response']['get_gateway_details']['primary_color'],
				"icons": [
					{
						"src": "images/manifest/icon-192x192.png",
						"sizes": "192x192",
						"type": "image/png"
					},
					{
						"src": "images/manifest/icon-512x512.png",
						"sizes": "512x512",
						"type": "image/png"
					}
					]
				}

		manifest = json.dumps(manifest)
		payload['manifest'] = manifest

	lgr.info('Manifest: %s' % payload)

        return payload

    def default_page(self, request, page, subdomain):
        payload = request.GET.copy()
        payload.update(request.POST)

	if subdomain:
		payload['subdomain'] = subdomain
		payload['trigger'] = "with_subdomain"

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def migs_url(self, request, page, subdomain):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload['ext_inbound_id'] = payload['vpc_TransactionNo']
        payload['reference'] = payload['vpc_OrderInfo']
        payload['payment_method'] = 'CARD'
        payload['ext_product_id'] = payload['vpc_Merchant']
        payload['currency'] = payload['vpc_Currency']
        email = payload['email']

        def get_amount(s):
            s = s.replace(',', '')
            pre = s[:len(s) - 2]
            suf = s[len(s) - 2:]
            return '%s.%s' % (pre, suf)

        payload['amount'] = get_amount(payload['vpc_Amount'])

        return payload

    def email_verification(self, request, page, subdomain):
        payload = request.GET.copy()
        payload.update(request.POST)
        session_id = request.session.get('session_id')
        if session_id is not None:
            lgr.info('Logged Out an Active session')
            logout(request)

	if subdomain:
		payload['subdomain'] = subdomain
		payload['trigger'] = "with_subdomain"


        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def index(self, request, page, subdomain):
        payload = request.POST.copy()

	if subdomain:
		payload['subdomain'] = subdomain
		payload['trigger'] = "with_subdomain"


        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload


class My_Profile:
    def profile(self, request, page, subdomain):
        payload = {}

        return payload
