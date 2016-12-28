from django.contrib import admin
from gui.models import *
from django.forms.widgets import TextInput, Textarea
from django import forms


class ModulesAdmin(admin.ModelAdmin):
	list_display = ('display_name','path','description','display_order','display','date_modified','date_created')    
admin.site.register(Modules, ModulesAdmin)

class TemplateAdmin(admin.ModelAdmin):
	list_display = ('id','name','template_file','description',)
admin.site.register(Template, TemplateAdmin)

class PagesAdmin(admin.ModelAdmin):
	list_display = ('module','path','display_name','description','display_order','display','date_modified','date_created','template','service',)    
admin.site.register(Pages, PagesAdmin)

class PermissionStatusAdmin(admin.ModelAdmin):
	list_display = ('name','description','date_modified','date_created')
admin.site.register(PermissionStatus, PermissionStatusAdmin)

class PermissionAdmin(admin.ModelAdmin):
	list_display = ('name','page','gateway_list','status','date_modified','date_created',)
admin.site.register(Permission, PermissionAdmin)

class RefererHostAdmin(admin.ModelAdmin):
	list_display = ('host', 'permissions','status','description',)
admin.site.register(RefererHost, RefererHostAdmin)

