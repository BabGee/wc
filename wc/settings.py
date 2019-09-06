import os
import datetime
import psycopg2
#from django.conf.global_settings import TEMPLATE_CONTEXT_PROCESSORS

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

<<<<<<< HEAD
#import ConfigParser
import configparser
=======
import sys
reload(sys)
sys.setdefaultencoding('utf8')

import ConfigParser
from keyczar import keyczar
>>>>>>> 438317eb825d2e36f6690e3505d6431c2c721476

#cf = ConfigParser.ConfigParser()

cf = configparser.ConfigParser()
cf.read(os.path.join(BASE_DIR, 'wc/conf/wc.properties'))
logroot =  os.getenv("LOG_root", cf.get('LOG','root')).strip()

#print cf._sections

dbengine =  os.getenv("DATABASES_default_dbengine", cf.get('DATABASES','default_dbengine'))
dbname =  os.getenv("DATABASES_default_dbname", cf.get('DATABASES','default_dbname'))
dbuser =  os.getenv("DATABASES_default_dbuser", cf.get('DATABASES','default_dbuser'))
dbpassword =  os.getenv("DATABASES_default_dbpassword", cf.get('DATABASES','default_dbpassword'))
dbhost =  os.getenv("DATABASES_default_dbhost", cf.get('DATABASES','default_dbhost'))
dbport =  os.getenv("DATABASES_default_dbport", cf.get('DATABASES','default_dbport'))
                                   
smtphost =  os.getenv("SMTP_default_host", cf.get('SMTP','default_host'))
smtpport =  os.getenv("SMTP_default_port", cf.get('SMTP','default_port'))
smtptls_default =  os.getenv("SMTP_tls", cf.get('SMTP','tls'))
tls_default = {'True': True, 'False': False}
smtptls = tls_default[smtptls_default]
                                     
conf_hosts =  os.getenv("ALLOWED_HOSTS_hosts", cf.get('ALLOWED_HOSTS','hosts'))
hosts = conf_hosts.split(",")        
 

installed_apps = (
    'administration',
    'gui',
    'processor',
    'api',

)


#TEST_RUNNER = 'django.test.runner.DiscoverRunner'


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'rx%g*kcl*1u_m(%5viy8kfl4whtbj5_^l_=gq5rt6gfk18%m6a'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

TEMPLATE_DEBUG = DEBUG
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE=True
SECURE_SSL_REDIRECT=True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SESSION_COOKIE_HTTPONLY = True

#ALLOWED_HOSTS = [
#		'.mipay.club', '.regix.org','.nikobizz.com','69.64.68.226','.muziqbit.com','.shikangoma.com','.mamtag.com','.heri.shop','.interintel.co',
#		'.gus.gs', '.mipaymobile.com','.bidfatherafrica.com','.bidfather.com','.ichaama.com','.mchaama.com','.gomipay.com','.sortika.com',
#		]

#ALLOWED_HOSTS = ['*']

ALLOWED_HOSTS = hosts



GEOIP_PATH = '/usr/share/GeoIP'
'''
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'interintel.helpdesk@gmail.com'
EMAIL_HOST_PASSWORD = 'User@InterIntel123'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
'''

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = '192.168.137.3'
EMAIL_PORT = 25
EMAIL_HOST_USER = ''
EMAIL_HOST_PASSWORD = ''
EMAIL_USE_TLS = False
DEFAULT_FROM_EMAIL = 'InterIntel <noreply@interintel.co.ke>'


ADMINS = (
     ('Sam Arita', 'samson.arita@gmail.com'),
)

SUIT_CONFIG = {
    'ADMIN_NAME': 'Web Channel Administrator'
}

MANAGERS = ADMINS


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.admindocs',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.gis',
    'django_extensions',
) + installed_apps

MIDDLEWARE_CLASSES = [
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

]

##REQUEST CONTEXT PROCESSOR
#TEMPLATE_CONTEXT_PROCESSORS += (
#    'django.core.context_processors.request',
#)

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


ROOT_URLCONF = 'wc.urls'

WSGI_APPLICATION = 'wc.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases


DATABASES = {
    'default': {
        'ENGINE': dbengine, # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': dbname,                      # Or path to database file if using sqlite3.
        # The following settings are not used with sqlite3:
        'USER': dbuser,
        'PASSWORD': dbpassword,
        'HOST': dbhost,                      # Empty for localhost through domain sockets or '127.0.0.1' for localhost through TCP.
        'PORT': dbport,                      # Set to empty string for default.
        'CONN_MAX_AGE': 600,
    }
}


# Internationalization
# https://docs.djangoproject.com/en/1.7/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.7/howto/static-files/
MEDIA_ROOT = os.path.join(os.path.dirname(__file__), 'media').replace('\\','/')

MEDIA_URL = '/media/'

STATIC_ROOT = os.path.join(os.path.dirname(__file__), 'static').replace('\\','/')

STATIC_URL = '/static/'

LOGFILE='info.log'

LOGGING = {
    'version': 1,
    'disable_existing_loggers': True,
    'formatters': {
        'verbose': {
            'format': '%(asctime)s-%(name)s %(module)s %(process)d %(thread)d-(%(threadName)-2s) %(levelname)s-%(message)s'
        },
        'simple': {
            'format': '%(levelname)s %(message)s'
        },
    },
    'filters': {
        'special': {
            '()': 'django.utils.log.RequireDebugFalse',
        }
    },
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            'class': 'django.utils.log.AdminEmailHandler',
            'filters': ['special']
        },
        
    },

    'loggers': {
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': False,
        },

    }
}

if logroot not in [None,""]:
	LOGGING['handlers']['file_actions'] = {                # define and name a handler
            'level': 'DEBUG',
            'class': 'logging.FileHandler', # set the logging class to log to a file
            #'class': 'logging.handlers.QueueHandler', # set the logging class to log to a file
            'formatter': 'verbose',         # define the formatter to associate
            'filename': os.path.join(logroot, '', LOGFILE) # log file
        }
	LOGGING['loggers']['logview.usersaves']: {               # define another logger
            'handlers': ['file_actions'],  # associate a different handler
            'level': 'INFO',                 # specify the logging level
            'propagate': True,
        } 

	for app in installed_apps:
		LOGGING['handlers'][app] = {
	            'level' : 'INFO',
        	    'formatter' : 'verbose', # from the django doc example
	            'class' : 'logging.handlers.TimedRotatingFileHandler',
	            #'class' : 'logging.handlers.QueueHandler',
        	    'filename' : os.path.join(logroot, '', app+'.log'), # full path works
	            'when' : 'midnight',
	            'interval' : 1,
		    'backupCount': 5,
	        }

		LOGGING['loggers'][app] = {
	            'handlers': [app],
	            'level': 'INFO',
	        }

else:
	LOGGING['file_actions'] = {
            'level':'INFO',
            'class':'logging.StreamHandler',
            'formatter': 'verbose',
        }
	LOGGING['loggers']['logview.usersaves']: {               # define another logger
            'handlers': ['file_actions'],  # associate a different handler
            'level': 'INFO',                 # specify the logging level
            'propagate': True,
        } 

	for app in installed_apps:
		LOGGING['handlers'][app] = {
	            'level':'INFO',
        	    'class':'logging.StreamHandler',
	            'formatter': 'verbose',
	        }

		LOGGING['loggers'][app] = {
	            'handlers': [app],
	            'level': 'INFO',
	        }



