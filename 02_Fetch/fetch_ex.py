from flask import Flask, Response, request, jsonify
import random, json

app = Flask(__name__)

@app.route('/getnum')
def anyname():
    res = Response(json.dumps({'number':random.randrange(100)}))
    #res.headers['Access-Control-Allow-Origin'] = '*'
    res.headers['Content-type'] = 'application/json'
    return  res

@app.route('/addtwo', methods=['GET','POST'])
def add():
    print("hello from add")
    if request.method == 'GET':    
        num1 = int(request.args['num1'])
        num2 = int(request.args['num2'])
        print("got: ", num1, num2)
    else:
        # request.data contains raw data
        # request.form contains data from a submitted form
        # request.args containes the URL query_string
        # request.values combines args and form into one
        # request.json contains the parsed json
        num1 = int(request.json.get('num1'))
        num2 = int(request.json.get('num2'))
    return jsonify(num1+num2)


app.run(debug=True, port=5001)
