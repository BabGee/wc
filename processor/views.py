import urllib, urllib2, json, pycurl
from processor.models import *
from processor.backend.wrappers import Wrappers
from django.utils.formats import date_format
from django.utils import timezone
from datetime import datetime
from django.utils.dateformat import DateFormat
from django.utils.formats import get_format
from django.db.models import Q
import pycurl

import logging
lgr = logging.getLogger('processor')

class Processor:
	def action_exec(self, request, function, payload):

                try:
			service = ServiceCommand.objects.filter(command_function=function)

			if len(service)>0 and service[0].status.name == 'ACTIVE':
				lgr.info('Enables SWITCH Call')

				payload = Wrappers().create_payload(request, service[0], payload)

				path = '/%s/' % (service[0].command_function)
				service_path = urllib.quote(path)
			
				node = service[0].node_system.URL + service_path
				timeout = service[0].node_system.timeout_time
				jdata = json.dumps(payload)
				lgr.info('Got Node To Call: %s' % node)
				#response = urllib2.urlopen(node, jdata, timeout = timeout)
				#jdata = response.read()
				#payload = json.loads(jdata)

	                        c = pycurl.Curl()
	                        c.setopt(pycurl.URL, str(node) )
        	                c.setopt(pycurl.POST, 1)
                	        header=['Content-Type: application/json; charset=utf-8','Content-Length: '+str(len(jdata))]
	                        c.setopt(pycurl.HTTPHEADER, header)
        	                c.setopt(pycurl.POSTFIELDS, str(jdata))
                	        import StringIO
                        	b = StringIO.StringIO()
	                        c.setopt(pycurl.WRITEFUNCTION, b.write)
        	                c.perform()
                	        response = b.getvalue()
                        	payload = json.loads(response)

				payload = Wrappers().create_payload(request, service[0], payload)

			else:
				payload['overall_status'] = 'Service Does not Exist'
				payload['response_status'] = '96'
                        if 'response_status' in payload.keys() and payload['response_status']=='00':
                                pass 
                        if 'response_status' in payload.keys() and payload['response_status']<>'00':
                                if 'response' in payload.keys() and len(payload['response'])>0:
                                        pass
                                else:   
                                        status = Wrappers().process_responsestatus(payload['response_status'])
                                        payload['response'] = {'overall_status':status['response']}
	
                except Exception, e:
                        lgr.info('Error Processing node request: %s' % e)
                        payload = {}
                        payload['response_status'] = '96'

                return payload



