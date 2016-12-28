from django.contrib import admin
from gui.models import *
from django.forms.widgets import TextInput, Textarea
from django import forms

class GatewayAdmin(admin.ModelAdmin):
	list_display = ('name', 'favicon','description', 'date_modified', 'date_created')
admin.site.register(Gateway, GatewayAdmin)

class GatewayHostStatusAdmin(admin.ModelAdmin):
	list_display = ('name', 'description', 'date_modified', 'date_created')
admin.site.register(GatewayHostStatus, GatewayHostStatusAdmin)

class GatewayHostAdmin(admin.ModelAdmin):
	list_display = ('host', 'status', 'gateway','description', 'date_modified', 'date_created')
admin.site.register(GatewayHost, GatewayHostAdmin)


