from html import escape
from urllib.parse import parse_qs

class FlaskApp:

    def __call__(self, environ, start_response):
        parameters = parse_qs(environ.get('QUERY_STRING', ''))
        if 'subject' in parameters:
            subject = escape(parameters['subject'][0])
        else:
            subject = 'World'
        start_response('200 OK', [('Content-Type', 'text/html')])
        resp = '''Hello %(subject)s
        Hello %(subject)s!

    ''' % {'subject': subject}
        return [resp.encode('utf8')]


app = FlaskApp()

if __name__ == '__main__':
    from wsgiref.simple_server import make_server
    srv = make_server('localhost', 8080, hello_world)
    srv.serve_forever()
