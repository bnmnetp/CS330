from flask import Flask, jsonify
import requests

app = Flask(__name__)
app.debug = True


@app.route('/getquote/<string:ticker>')
def get_quote(ticker):
    quotestr = "http://download.finance.yahoo.com/d/quotes.csv?s={}&f=sbpo".format(ticker)
    res = requests.get(quotestr)
    print(res.status_code)
    print(res.text)
    rlist = res.text.split(',')

    result = {rlist[0]:float(rlist[1])}
    return jsonify(result)


app.run()