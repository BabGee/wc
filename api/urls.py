from django.conf.urls import *
from django.views.generic import RedirectView
from api.views import *

urlpatterns = [
        url(r'^facebook/(?P<names>[\w\ ]{1,200})/$',  Interface().facebook),
        url(r'^load-video-file/$',  Interface().load_video_file),
        url(r'^upload-temp-file/$',  Interface().upload_temp_file),
        url(r'^get-my-host/$',  Interface().get_my_host),
        url(r'^(?P<SERVICE>[\w\-\ ]{1,50})/$',  Interface().interface)
]



