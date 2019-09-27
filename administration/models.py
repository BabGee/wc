from django.contrib.gis.db import models
from django.contrib.auth.models import User

class Gateway(models.Model):
	name = models.CharField(max_length=45, unique=True)
	favicon = models.CharField(max_length=200, blank=True, null=True)
	default_color = models.CharField(max_length=10, default='#4183E5')
	description =  models.CharField(max_length=100)
	date_modified  = models.DateTimeField(auto_now=True)
	date_created = models.DateTimeField(auto_now_add=True)
	def __str__(self):
		return u'%s' % (self.name)

class GatewayHostStatus(models.Model):
	name = models.CharField(max_length=45, unique=True)
	description = models.CharField(max_length=100)
	date_modified  = models.DateTimeField(auto_now=True)
	date_created = models.DateTimeField(auto_now_add=True)
	def __str__(self):
		return u'%s' % (self.name)

class GatewayHost(models.Model):
	host = models.CharField(max_length=50, unique=True)
	status = models.ForeignKey(GatewayHostStatus, on_delete=models.CASCADE)
	gateway = models.ForeignKey(Gateway, on_delete=models.CASCADE)
	description =  models.CharField(max_length=100)		
	date_modified  = models.DateTimeField(auto_now=True)
	date_created = models.DateTimeField(auto_now_add=True)
	def __str__(self):
		return u'%s' % (self.host)


