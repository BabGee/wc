"""
Django settings for wc project.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.7/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
import datetime
import psycopg2
from django.conf.global_settings import TEMPLATE_CONTEXT_PROCESSORS

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
#TEST_RUNNER = 'django.test.runner.DiscoverRunner'


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'rx%g*kcl*1u_m(%5viy8kfl4whtbj5_^l_=gq5rt6gfk18%m6a'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

TEMPLATE_DEBUG = DEBUG
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE=True
SECURE_SSL_REDIRECT=True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SESSION_COOKIE_HTTPONLY = True

ALLOWED_HOSTS = [
		'.mipay.club', '.regix.org','.nikobizz.com','69.64.68.226','.muziqbit.com','.shikangoma.com','.mamtag.com',
		'.gus.gs', '.mipaymobile.com','.bidfatherafrica.com','.bidfather.com','.mchaama.com',
		]

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
    'suit',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.gis',
    'administration',
    'gui',
    'processor',
    'api',

)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

#REQUEST CONTEXT PROCESSOR
TEMPLATE_CONTEXT_PROCESSORS += (
    'django.core.context_processors.request',
)

ROOT_URLCONF = 'wc.urls'

WSGI_APPLICATION = 'wc.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'wc',
	'USER': 'wc',
	'PASSWORD':'wc',
	'HOST': '192.168.137.5',
	'PORT':'',
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

STATIC_URL = '/static/'

VENV_ROOT = '/opt/logs/wc/'

print VENV_ROOT
today = datetime.date.today()
today = str(today)
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
    
        'default_rotating_file':{
            'level' : 'INFO',
            'formatter' : 'verbose', # from the django doc example
            'class' : 'logging.handlers.TimedRotatingFileHandler',
            'filename' : os.path.join(VENV_ROOT, '', LOGFILE), # full path works
            'when' : 'midnight',
            'interval' : 1,
            'backupCount' : 7,
        },  
        'mail_admins': {
            'level': 'ERROR',
            'class': 'django.utils.log.AdminEmailHandler',
            'filters': ['special']
        },
        
        'file_actions': {                # define and name a handler
            'level': 'DEBUG',
            'class': 'logging.FileHandler', # set the logging class to log to a file
            'formatter': 'verbose',         # define the formatter to associate
            'filename': os.path.join(VENV_ROOT, '', LOGFILE) # log file
        },     
        
    },
    'loggers': {
    
         'my_logger': {
            'handlers': ['default_rotating_file'],
            'level': 'INFO',
        },    
         'api': {
            'handlers': ['default_rotating_file'],
            'level': 'INFO',
        },    
      

         'administration': {
            'handlers': ['default_rotating_file'],
            'level': 'INFO',
        },    
      
    
         'gui': {
            'handlers': ['default_rotating_file'],
            'level': 'INFO',
        },    

         'processor': {
            'handlers': ['default_rotating_file'],
            'level': 'INFO',
        },    
         
        'logview.usersaves': {               # define another logger
            'handlers': ['file_actions'],  # associate a different handler
            'level': 'INFO',                 # specify the logging level
            'propagate': True,
        }, 
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': False,
        },

    }
}


