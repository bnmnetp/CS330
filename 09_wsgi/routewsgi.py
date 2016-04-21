from html import escape
from urllib.parse import parse_qs
from collections import OrderedDict
import re

class FlaskApp:

    def __init__(self):
        self.urlmatch = OrderedDict()


    def __call__(self, environ, start_response):
        path_info = environ.get('PATH_INFO', '').lstrip('/')
        print("PATH_INFO = ", path_info)

        if path_info:
            for prex in self.urlmatch.keys():
                if re.match(prex,path_info):
                    start_response('200 OK', [('Content-Type', 'text/html')])
                    resp = self.urlmatch[prex]()
                    return [resp.encode('utf8')]

            print("READY TO FAIL")
        start_response('404 Not Found', [('Content-Type', 'text/html')])
        return ["not found".encode('utf8')]

    def addroute(self,path,func):
        self.urlmatch[path] = func


def foo():
    return "<h1>This is Foo</h1>"

def myfunc():
    return "<h1>This is MyFunc</h1>"

app = FlaskApp()
app.addroute('foo',foo)
app.addroute('my/path/forward',myfunc)

if __name__ == '__main__':
    from wsgiref.simple_server import make_server
    srv = make_server('localhost', 8080, app)
    srv.serve_forever()
