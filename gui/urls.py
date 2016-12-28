from django.conf.urls import patterns, include, url
#from django.views.generic import RedirectView
from gui.views import *

urlpatterns = patterns('',
        #url(r'^auth/(?P<PROFILE>[\w\ ]{1,45})/(?P<SESSION>[\w\=\ ]{70,100})/$',  UI().auth),
        url(r'^GOTO/(?P<SERVICE>[\w\ ]{1,45})/$',  UI().request_processor),
        url(r'^logout/$', 'django.contrib.auth.views.logout',
                                  {'next_page': '/'}, name='logout'),
	url(r'^cybersource_termurl/$', UI().cybersource_termurl, name='cybersource_termurl'),
	url(r'^(?P<page>\w{1,30})/$', UI().pages),
	#url(r'^$', RedirectView.as_view(url='/index/', permanent=False), name='home_page'),
	url(r'^$', UI().home_page, name='home_page'),

)



