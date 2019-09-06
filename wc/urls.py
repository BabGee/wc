from django.conf.urls import *
from django.contrib import admin
admin.autodiscover()

'''
urlpatterns = [
	url(r'^admin/', admin.site.urls),

	url(r'^api/(?P<service_name>[\w\-\ ]{1,50})/$',  api_views.Interface().interface),
	url(r'^api/',  api_views.default),
	#url(r'^api/', include(api.urls)),
	url(r'^auth/user',     notify_views.user),
	url(r'^auth/vhost',    notify_views.vhost),
	url(r'^auth/resource', notify_views.resource),
	url(r'^iic_editor/', include("secondary.channels.iic.editor.urls"),name='editor'),
	]
'''
urlpatterns = [
	url(r'^admin/', admin.site.urls),
	url(r'^processor/', include('processor.urls')),
	url(r'^api/', include('api.urls')),
	url(r'^', include('gui.urls'))
]
