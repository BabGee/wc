from django.conf.urls import *
from django.contrib.auth import views
from gui.views import *

urlpatterns = [
	url(r'^GOTO/(?P<SERVICE>[\w\d\-\ ]{1,50})/$',  UI().request_processor),
	url(r'^logout/$', views.LogoutView.as_view(next_page='/')),
	url(r'^cybersource_termurl/$', UI().cybersource_termurl, name='cybersource_termurl'),
	url(r'^(?P<page>[\-\w\d]{1,30})(?:/(?P<route>[\-\w\d]{1,100}))?(?:/(?P<subdomain>[\.\w\d]{1,100}))?/$', UI().pages ),
	url(r'^$', UI().home_page, name='home_page'),    
]

#
#from django.views.generic import RedirectView
#url(r'^$', RedirectView.as_view(url='/index/', permanent=False), name='home_page'),
#url(r'^(?P<page>\w{1,30})/$', UI().pages ),
#url(r'^auth/(?P<PROFILE>[\w\ ]{1,45})/(?P<SESSION>[\w\=\ ]{70,100})/$',  UI().auth),

