import json
import logging

from administration.views import *
from api.models import *
from django.contrib.auth import logout
from django.contrib.gis.geoip import GeoIP
from gui.models import *

lgr = logging.getLogger('gui')


class Home:
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
