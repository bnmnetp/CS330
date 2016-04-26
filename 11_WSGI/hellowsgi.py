from html import escape
from urllib.parse import parse_qs

def hello(environ, start_response):
    # ? subject=CS330
    parameters = parse_qs(environ.get('QUERY_STRING',""))
    if 'subject' in parameters:
        subject = escape(parameters['subject'][0])
    else:
        subject = 'World'

    start_response('200 OK', [('Content-Type','text/html')])
    resp = "<h1>Hello %(subject)s</h1>"  % {'subject':subject}

    return [resp.encode('utf8')]

