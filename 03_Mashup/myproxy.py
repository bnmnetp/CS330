from flask import Flask, request, Response
import requests as req

app = Flask(__name__)

@app.route('/proxy/mypuppy')
def do_proxy():
    args = request.url.split('?')[1]
    res = req.get('http://www.recipepuppy.com/api/?{}'.format(args))

    return res.text



@app.route('/proxy/all/<string:host>/<path:uri>')
def generic_proxy(host, uri):
    args = request.url.split('?')[1]
    print("http://{}/{}?{}".format(host, uri, args))
    from_api = req.get("http://{}/{}?{}".format(host, uri, args))
    res = Response(from_api.text)
    res.headers['Content-type'] = 'application/json'

    return res


app.run(debug=True,host="0.0.0.0", port=8001)
