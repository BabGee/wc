from administration.models import *
from django.contrib.gis.db import models
from django.contrib.auth.models import User

class Modules(models.Model):
	display_name = models.CharField(max_length=45)	
	path = models.CharField(max_length=45)	
	description =  models.CharField(max_length=100)	
	display_order = models.IntegerField()
	display = models.NullBooleanField(blank=True)
	date_modified  = models.DateTimeField(auto_now=True)
	date_created = models.DateTimeField(auto_now_add=True)
	def __unicode__(self):
		return u'%s' % (self.display_name)    

class Template(models.Model):
	date_modified  = models.DateTimeField(auto_now=True)
	date_created = models.DateTimeField(auto_now_add=True)
	name = models.CharField(max_length=45, unique=True)
	template_file = models.CharField(max_length=45)	
	description =  models.CharField(max_length=100)		
	def __unicode__(self):
		return u'%s' % (self.name)

class Pages(models.Model):
	module = models.ForeignKey(Modules)	
	path = models.CharField(max_length=45, unique=True)	
	display_name = models.CharField(max_length=45)	
	description =  models.CharField(max_length=100)	
	display_order = models.IntegerField()
	display = models.NullBooleanField(blank=True)
	date_modified  = models.DateTimeField(auto_now=True)
	date_created = models.DateTimeField(auto_now_add=True)
	template = models.ForeignKey(Template)
	service = models.CharField(max_length=200)
	def __unicode__(self):
		return u'%s' % (self.display_name)    

class InitialPageStatus(models.Model):
	name = models.CharField(max_length=45, unique=True)
	description = models.CharField(max_length=100)
	date_modified  = models.DateTimeField(auto_now=True)
	date_created = models.DateTimeField(auto_now_add=True)
	def __unicode__(self):
		return u'%s' % (self.name)

class InitialPage(models.Model):
	date_modified  = models.DateTimeField(auto_now=True)
	date_created = models.DateTimeField(auto_now_add=True)
	name = models.CharField(max_length=45, unique=True)
	page = models.ForeignKey(Pages)
	gateway = models.ManyToManyField(Gateway, blank=True)
	status = models.ForeignKey(InitialPageStatus)
	active_session = models.BooleanField(default=False)
	def __unicode__(self):
		return u'%s' % (self.name)  
	def gateway_list(self):
		return "\n".join([a.name for a in self.gateway.all()])


class PermissionStatus(models.Model):
	name = models.CharField(max_length=45, unique=True)
	description = models.CharField(max_length=100)
	date_modified  = models.DateTimeField(auto_now=True)
	date_created = models.DateTimeField(auto_now_add=True)
	def __unicode__(self):
		return u'%s' % (self.name)

class Permission(models.Model):
	name = models.CharField(max_length=45, unique=True)
	page = models.ForeignKey(Pages)
	gateway = models.ManyToManyField(Gateway, blank=True)
	status = models.ForeignKey(PermissionStatus)
	date_modified  = models.DateTimeField(auto_now=True)
	date_created = models.DateTimeField(auto_now_add=True)
	def __unicode__(self):
		return u'%s' % (self.name)  
	def gateway_list(self):
		return "\n".join([a.name for a in self.gateway.all()])

class RefererHost(models.Model):
	date_modified  = models.DateTimeField(auto_now=True)
	date_created = models.DateTimeField(auto_now_add=True)
	host = models.CharField(max_length=100)
	permissions = models.ForeignKey(Permission)
	status = models.ForeignKey(PermissionStatus)
	description =  models.CharField(max_length=100)		
	def __unicode__(self):
		return u'%s' % (self.host)


