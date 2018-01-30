from django.conf.urls import *
from django.contrib import admin
admin.autodiscover()

urlpatterns = [
    # Examples:
    # url(r'^$', 'wc.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^processor/', include('processor.urls')),
    url(r'^api/', include('api.urls')),
    url(r'^', include('gui.urls')),

]
