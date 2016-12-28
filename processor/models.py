from django.db import models
from api.models import *
# Create your models here.


class ResponseStatus(models.Model):
        response = models.CharField(max_length=10)
        description = models.CharField(max_length=100)
        action = models.CharField(max_length=10)
        action_description = models.CharField(max_length=50)
        date_modified  = models.DateTimeField(auto_now=True)
        date_created = models.DateTimeField(auto_now_add=True)
        def __unicode__(self):
                return u'%s' % (self.description)

#This expalains the state of a command. Whether to call API, pass or process locally
class CommandStatus(models.Model):
        name = models.CharField(max_length=45, unique=True)
        description = models.CharField(max_length=100)
        date_modified  = models.DateTimeField(auto_now=True)
        date_created = models.DateTimeField(auto_now_add=True)
        def __unicode__(self):
                return u'%s' % (self.name)

class ServiceCommand(models.Model):
	command_function = models.CharField(max_length=50)
	node_system = models.ForeignKey(NodeSystem)
	status = models.ForeignKey(CommandStatus)
	description = models.CharField(max_length=100)
	date_modified  = models.DateTimeField(auto_now=True)
	date_created = models.DateTimeField(auto_now_add=True)	
	def __unicode__(self):
		return u'%s %s' % (self.command_function, self.status.name)

