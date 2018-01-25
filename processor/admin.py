from django.contrib import admin
from processor.models import *
from django.forms.widgets import TextInput, Textarea
from django import forms
	
class ResponseStatusAdmin(admin.ModelAdmin):
                list_display = ('id','response','description','action',\
                 'action_description','date_modified','date_created')

admin.site.register(ResponseStatus, ResponseStatusAdmin)

class CommandStatusAdmin(admin.ModelAdmin):
		list_display = ('name','description','date_modified','date_created')
admin.site.register(CommandStatus, CommandStatusAdmin)

class ServiceCommandAdmin(admin.ModelAdmin):
		list_display = ('id','command_function','node_system', 'status',\
		 'description', 'gateway')
		search_fields = ('command_function',)
		list_filter = ('node_system','gateway',)
admin.site.register(ServiceCommand, ServiceCommandAdmin)


