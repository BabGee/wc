from django import template
from collections import OrderedDict
import logging, json
lgr = logging.getLogger('gui')

register = template.Library()

@register.filter(name='dictsort')
def dictsort(value):
        if isinstance(value, dict):
            new_dict = OrderedDict()
	    key_list = value.keys()
            key_list.sort()
            for key in key_list:
                new_dict[key] = value[key]

            return new_dict
        elif isinstance(value, list):
	    try:value=dict(value)
	    except:value=value
	    if isinstance(value, dict):
		    new_val = {}
		    for x in value:
			try:new_val[int(x)] = value[x]
			except:new_val[x] = value[x]
		    value=[]
		    for k, v in new_val.items():
			value.append((k,v))
	    else: 
		new_val = []
		for x in value:
			try: x = int(x);new_val.append(x)
			except: x = x;new_val.append(x)
		value = new_val
            new_list = list(value)
	    new_list.sort()
            return new_list
        else:
            return value
        dictsort.is_safe = True

@register.filter(name='paramify')
def paramify(payload):
	params = {}
	if isinstance(payload, dict):
		for key, value in payload.items():
			if key <> 'response' and key <> 'response_status':
				params[key] = value
					
	return json.dumps(params)


@register.filter(name='istitle')
def istitle(payload):
	title = ''
	if isinstance(payload, dict):
		for key, value in payload.items():
			if isinstance(value, dict):
				for key0, value0 in value.items():
					if key0 <> 'section_var':
						if isinstance(value0, dict):
							for key1, value1 in value0.items():
								if key1 <> 'page_var':
									if isinstance(value1, dict):
										for key2, value2 in value1.items():
											if isinstance(value2, dict):
												for key3, value3 in value2.items():
													title = key3
	return title


@register.filter(name='page_inputs')
def page_inputs(payload):
	page = {}
	if isinstance(payload, dict):
		for key, value in payload.items():
			lgr.info('\n\n1. Key: %s | Value: %s | Type: %s' % (key,value, type(value)))
			if isinstance(value, dict):
				for key0, value0 in value.items():
					if key0 <> 'section_var':
						if isinstance(value0, dict):
							for key1, value1 in value0.items():
								if key1 <> 'page_var':
									if isinstance(value1, dict):
										for key2, value2 in value1.items():
											if isinstance(value2, dict):
												for key3, value3 in value2.items():
													page = value3
	return json.dumps(page)

@register.filter(name='jsonify')
def jsonify(payload):
	return json.dumps(payload)


@register.filter(name='page')
def page(payload):
	if isinstance(payload, dict):
		for key, value in dict(payload).items():
			return json.dumps(dict(value).items())
	else:
		return json.dumps({})

@register.filter(name='typeof')
def typeof(payload):
	return type(payload)
