import smtplib

class SendMail:
	def email_send(self, payload):
                        try:

                                toaddr = 'samson.arita@interintel.co.ke'
                                cc = ['','']
                                bcc = ['']
                                fromaddr = 'samson.arita@nikobizz.com'
                                message_subject = 'Test This'
                                message_text = open('./send_mail.html').read()

				'''
				import urllib
				sock = urllib.urlopen("https://www.interintel.org/")
				htmlSource = sock.read()
				sock.close()
				message_text = htmlSource 
				print message_text
				'''

                                #DO NOT REMOVE INDENTATION TO THE START OF THE LINE OR EMAIL WILL NOT SEND

                                message = """From: """ + fromaddr + """<noreply@noreply.com>
To: """ + toaddr + """
MIME-Version: 1.0
Content-type: text/html
Subject: """ + message_subject + """

""" + message_text


                                #------------------------------------------------------------------

                                #message = "From: %s\r\n" % fromaddr + "To: %s\r\n" % toaddr + "CC: %s\r\n" % ",".join(cc)\
                                # + "Subject: %s\r\n" % message_subject\
                                # + "\r\n"  + message_text


                                toaddrs = [toaddr] + cc + bcc
                                server = smtplib.SMTP('smtp.gmail.com:587')
                                #server = smtplib.SMTP("smtp.gmail.com", 587)
                                server.ehlo()
                                server.starttls()
                                server.ehlo()
                                server.login("interintel.helpdesk@gmail.com", "User@InterIntel123")
                                #server.sendmail("your_gmail_email_addres", "a_destination_email_address", msg)
                                #server.close()

                                server.set_debuglevel(0)
                                if server.sendmail(fromaddr, toaddrs, message):
                                        print 'Email Sent'
                                        server.quit()

                        except Exception, e:
				print 'Error Sending Email: %s' % e



SendMail().email_send({})
