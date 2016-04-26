from html import escape
from urllib.parse import parse_qs


class FlaskApp:

    def __init__(self):
        self.urlmatch = {}

    def __call__(self, environ, start_response):
        path = environ.get('PATH_INFO','')

        if path in self.urlmatch:
            resp = self.urlmatch[path]()
            status = '200 OK'

        else:
            status = '404 Not Found'
            resp = "Not found"

        start_response(status, [('Content-Type', 'text/html')])
        return [resp.encode('utf8')]

    def addroute(self,url,func):
        self.urlmatch[url] = func

@app.route('/')
def hello():
    return "<h1>Hello World</h1>"

@app.route('/bye')
def goodbye():
    return "<h1>Goodbye and thanks for all the fish!</h1>"

app = FlaskApp()

