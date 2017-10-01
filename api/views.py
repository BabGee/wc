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
from reportlab.pdfgen import canvas

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


from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus import Table
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.pagesizes import A4, inch, landscape, letter

class PDFGenerator:
	def draw_header(self, canvas):
		""" Draws the invoice header """
		canvas.setStrokeColorRGB(0.9, 0.5, 0.2)
		canvas.setFillColorRGB(0.2, 0.2, 0.2)
		canvas.setFont('Helvetica', 16)
		canvas.drawString(18 * cm, -1 * cm, 'Invoice')
		logo = settings.MEDIA_ROOT+"/administration_gateway_logo/nikobizz.png"
		#canvas.drawInlineImage(logo, 1 * cm, -1 * cm, 250, 16)
		#canvas.drawInlineImage(logo, 0.5 * cm, -4 * cm)
		canvas.drawImage(logo, 0, -2 * cm, height=50, mask='auto', preserveAspectRatio = True)

		#canvas.drawInlineImage(logo, 1 * cm, -1 * cm, height=250, preserveAspectRatio = True)

		canvas.setLineWidth(4)
		#canvas.line(0, -1.25 * cm, 21.7 * cm, -1.25 * cm)
		canvas.line(0, -3.5 * cm, 21.7 * cm, -3.5 * cm)


	def draw_address(self,canvas):
		""" Draws the business address """
		business_details = (
			u'COMPANY NAME LTD',
			u'STREET',
			u'TOWN',
			U'COUNTY',
        		U'POSTCODE',
        		U'COUNTRY',
        		u'',
        		u'',
        		u'Phone: +00 (0) 000 000 000',
        		u'Email: example@example.com',
        		u'Website: www.example.com',
        		u'Reg No: 00000000'
    			)
		canvas.setFont('Helvetica', 9)
		#textobject = canvas.beginText(13 * cm, -2.5 * cm)
		textobject = canvas.beginText(13 * cm, -4.5 * cm)

		for line in business_details:
			textobject.textLine(line)
		canvas.drawText(textobject)


	def draw_footer(self, canvas):
		""" Draws the invoice footer """
		note = (
			u'Bank Details: Street address, Town, County, POSTCODE',
			u'Sort Code: 00-00-00 Account No: 00000000 (Quote invoice number).',
			u'Please pay via bank transfer or cheque. All payments should be made in CURRENCY.',
			u'Make cheques payable to Company Name Ltd.',
			)
		textobject = canvas.beginText(1 * cm, -25 * cm)
		for line in note:
			textobject.textLine(line)
		canvas.drawText(textobject)




class Interface(Wrapper, PDFGenerator):
	def pdf_gen(self, request, names):
		try:
			from reportlab.graphics.charts.linecharts import HorizontalLineChart, AbstractLineChart, LineChart, HorizontalLineChart, HorizontalLineChart3D, SampleHorizontalLineChart
			from reportlab.lib import colors
			from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph
			from reportlab.lib.styles import getSampleStyleSheet
			from reportlab.lib import colors
			from reportlab.lib.pagesizes import A4, inch, landscape, letter
			from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph
			from reportlab.lib.styles import getSampleStyleSheet

			# Create the HttpResponse object with the appropriate PDF headers.
			response = HttpResponse(content_type='application/pdf')
			#response['Content-Disposition'] = 'attachment; filename="somefilename.pdf"'
			#response['Content-Disposition'] = 'inline; filename="somefilename.pdf"'
			response['Content-Disposition'] = 'filename="somefilename.pdf"'

			'''			
			bf = BytesIO()
			p = canvas.Canvas(bf)
			p.drawString(100, 100, "Hello world.")
			p.showPage()
			p.save()
			pdf = bf.getvalue()
			bf.close()
			response.write(pdf)
			'''
			""" Draws the invoice """
			bf = BytesIO()
			canvas = Canvas(bf, pagesize=A4)
			canvas.translate(0, 29.7 * cm)
			canvas.setFont('Helvetica', 10)

			canvas.saveState()
			self.draw_header(canvas)
			canvas.restoreState()

			canvas.saveState()
			self.draw_footer(canvas)
			canvas.restoreState()

			canvas.saveState()
			self.draw_address(canvas)
			canvas.restoreState()

			# Client address
			textobject = canvas.beginText(1.5 * cm, -4.5 * cm)
			textobject.textLine("Samson Arita")
			textobject.textLine("Nairobi")
			textobject.textLine("Nairobi")
			textobject.textLine("00100")
			textobject.textLine("Kenya")
			canvas.drawText(textobject)

			# Info
			textobject = canvas.beginText(1.5 * cm, -6.75 * cm)
			textobject.textLine(u'Invoice ID: 1234')
			textobject.textLine(u'Invoice Date: 12/12/12')
			textobject.textLine(u'Client: Samson')
			canvas.drawText(textobject)

			# Items
			data = [[u'Quantity', u'Description', u'Amount', u'Total'], ]
			data.append([1, u'Description', 50.50, 100.50])

			data.append([u'', u'', u'Total:', "KES 200.50"])
			table = Table(data, colWidths=[2 * cm, 11 * cm, 3 * cm, 3 * cm])
			table.setStyle([
				('FONT', (0, 0), (-1, -1), 'Helvetica'),
				('FONTSIZE', (0, 0), (-1, -1), 10),
				('TEXTCOLOR', (0, 0), (-1, -1), (0.2, 0.2, 0.2)),
				('GRID', (0, 0), (-1, -2), 1, (0.7, 0.7, 0.7)),
				('GRID', (-2, -1), (-1, -1), 1, (0.7, 0.7, 0.7)),
				('ALIGN', (-2, 0), (-1, -1), 'RIGHT'),
				('BACKGROUND', (0, 0), (-1, 0), (0.8, 0.8, 0.8)),
				])
			tw, th, = table.wrapOn(canvas, 15 * cm, 19 * cm)
			table.drawOn(canvas, 1 * cm, -10 * cm - th)

			canvas.showPage()
			canvas.save()
			pdf = bf.getvalue()
			bf.close()
			response.write(pdf)

	
			'''
			doc = SimpleDocTemplate(response, pagesize=A4, rightMargin=30,leftMargin=30, topMargin=30,bottomMargin=18)
			#doc.pagesize = landscape(A4)
			#doc.pagesize = letter(A4)
			doc.pagesize = A4

			elements = []
 
			data = [
				["Letter", "Number", "Stuff", "Long stuff that should be wrapped"],
				["A", "01", "ABCD", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"],
				["B", "02", "CDEF", "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"],
				["C", "03", "SDFSDF", "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"],
				["D", "04", "SDFSDF", "DDDDDDDDDDDDDDDDDDDDDDDD DDDDDDDDDDDDDDDDDDDDDDDDDDDDDD"],
				["E", "05", "GHJGHJGHJ", "EEEEEEEEEEEEEE EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEEEE"],
				]
 
			#TODO: Get this line right instead of just copying it from the docs
			style = TableStyle([('ALIGN',(1,1),(-2,-2),'RIGHT'),
			                       ('TEXTCOLOR',(1,1),(-2,-2),colors.red),
			                       ('VALIGN',(0,0),(0,-1),'TOP'),
			                       ('TEXTCOLOR',(0,0),(0,-1),colors.blue),
			                       ('ALIGN',(0,-1),(-1,-1),'CENTER'),
			                       ('VALIGN',(0,-1),(-1,-1),'MIDDLE'),
			                       ('TEXTCOLOR',(0,-1),(-1,-1),colors.green),
			                       ('INNERGRID', (0,0), (-1,-1), 0.25, colors.black),
			                       ('BOX', (0,0), (-1,-1), 0.25, colors.black),
			                       ])
 
			#Configure style and word wrap
			s = getSampleStyleSheet()
			s = s["BodyText"]
			s.wordWrap = 'CJK'
			data2 = [[Paragraph(cell, s) for cell in row] for row in data]
			t=Table(data2)
			t.setStyle(style)
 
			#Send the data and build the file
			elements.append(t)
			doc.build(elements)
			'''
			'''
			import time
			from reportlab.lib.enums import TA_JUSTIFY
			from reportlab.lib.pagesizes import letter
			from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image
			from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
			from reportlab.lib.units import inch

			from django.conf import settings
 
			doc = SimpleDocTemplate(response,pagesize=letter,
			                        rightMargin=72,leftMargin=72,
			                        topMargin=72,bottomMargin=18)
			story=[]
			#logo = settings.MEDIA_ROOT+"/upc_institution_logo/logo-heri.png" 
			logo = settings.MEDIA_ROOT+"/administration_gateway_logo/nikobizz.png"

			magName = "Pythonista"
			issueNum = 12
			subPrice = "99.00"
			limitedDate = "03/05/2010"
			freeGift = "tin foil hat"
 
			formatted_time = time.ctime()
			full_name = "Mike Driscoll"
			address_parts = ["411 State St.", "Marshalltown, IA 50158"]
 
			#im = Image(logo, 2*inch, 2*inch)
			im = Image(logo, height=2*inch)

			story.append(im)
 
			styles=getSampleStyleSheet()
			styles.add(ParagraphStyle(name='Justify', alignment=TA_JUSTIFY))
			ptext = '<font size=12>%s</font>' % formatted_time
 
			story.append(Paragraph(ptext, styles["Normal"]))
			story.append(Spacer(1, 12))
 
			# Create return address
			ptext = '<font size=12>%s</font>' % full_name
			story.append(Paragraph(ptext, styles["Normal"]))       
			for part in address_parts:
				ptext = '<font size=12>%s</font>' % part.strip()
				story.append(Paragraph(ptext, styles["Normal"]))   
 
			story.append(Spacer(1, 12))
			ptext = '<font size=12>Dear %s:</font>' % full_name.split()[0].strip()
			story.append(Paragraph(ptext, styles["Normal"]))
			story.append(Spacer(1, 12))
 
			ptext = '<font size=12>We would like to welcome you to our subscriber base for %s Magazine! \
			        You will receive %s issues at the excellent introductory price of $%s. Please respond by\
			        %s to start receiving your subscription and get the following free gift: %s.</font>' % (magName, 
                                                                                                issueNum,
                                                                                                subPrice,
                                                                                                limitedDate,
                                                                                                freeGift)
			story.append(Paragraph(ptext, styles["Justify"]))
			story.append(Spacer(1, 12))
 
 
			ptext = '<font size=12>Thank you very much and we look forward to serving you.</font>'
			story.append(Paragraph(ptext, styles["Justify"]))
			story.append(Spacer(1, 12))
			ptext = '<font size=12>Sincerely,</font>'
			story.append(Paragraph(ptext, styles["Normal"]))
			story.append(Spacer(1, 48))
			ptext = '<font size=12>Ima Sucker</font>'
			story.append(Paragraph(ptext, styles["Normal"]))
			story.append(Spacer(1, 12))
			doc.build(story)
			'''

			return response

		except Exception, e:
			lgr.info("Error on social media request: %s" % e)
			raise Http404


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



