# WebChannel
this is a python django application that is the gate through which requests reach the switch,
the webchannel receives user requests performs session authentication and routes them to the appropriate switch based on the predefined configuration. the switch response is also routed back to the client

the webchannel is able to call switch [services](switch services)

The webchannel helps in realization of the following list of functionalities

- service configuration
- switch endpoint configuration
- management of pages and templates
- web frontend install directory
- file uploads

this is realized through it's apps
1. administration
- management of [gateway](gateway docs) and hostnames
- configuration of the accessible hostnames of gateways and the hostname status
such as ENABLED DISABLED 

2. api
configuration of the switch endpoints, allows for multiple switch configurations


3. gui
this is the user interface manager for WEB access point

it allows of configuration of paths,
the path will have a template configured and service it will call for the initial template payload
this is done under Pages

Permissions is used to allow page access from specific gateways

Templates are the entry points on the web, they are responsible of loading the web app and provision of it's initial payload,

there are 4 main templates

    1. service
    2. payments
    3. landing
    4. section

4. processor

this is the service configuration point
the service access can also be configured to be gateway specific,
the node system of calling the service is also configured at this point

all service have to have an entry to be routeable to their node systems