import json
import logging

from administration.views import *
from api.models import *
from django.contrib.auth import logout
from django.contrib.gis.geoip import GeoIP
from gui.models import *

lgr = logging.getLogger('gui')


class Home:
    def forgot_test(self, request, page):
        payload = request.POST.copy()

        payload = WebService().request_processor(request, page.service, payload)
        lgr.info('Payload: %s' % payload)

        payload = WebService().response_processor(request, page.service, payload)

        lgr.info('Payload: %s' % payload)

        return payload

    def home(self, request, page):
        payload = request.POST.copy()

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def landing_page(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload


    def view_bid_application(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def approve_bid_application(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def deny_bid_application(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def view_bid_applications(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload


    def view_requirement_application(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def requirement_application(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def create_bid_requirement_application(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload


    def edit_bid_application(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def edit_requirement_application(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def edit_bid(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def view_edit_bid(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def view_closed_bid(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def view_delete_bid(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def live_created_bidding(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def live_selected_bidding(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def created_bid_details(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def selected_bid_details(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def open_bid_details(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def bid_application(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def bid_requirement(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def report(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def migs_url(self, request, page):
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

    def email_verification(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)
        session_id = request.session.get('session_id')
        if session_id is not None:
            lgr.info('Logged Out an Active session')
            logout(request)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload

    def institution_page(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)
	lgr.info('Institution Page: %s' % payload)

        return payload

    def forgot_password(self, request, page):
        payload = request.POST.copy()

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload


    def payment(self, request, page):
        payload = request.GET.copy()
        payload.update(request.POST)

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload


    def term_url(self, request, page):
        payload = request.POST.copy()

        return payload

    def home_page(self, request, page):
        payload = request.POST.copy()

        payload = WebService().request_processor(request, page.service, payload)
        payload = WebService().response_processor(request, page.service, payload)

        return payload


class My_Profile:
    def profile(self, request, page):
        payload = {}

        return payload
