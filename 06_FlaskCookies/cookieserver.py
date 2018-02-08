"""
* example code for processing forms and demonstrating cookies
"""
from flask import Flask, request

app = Flask(__name__)

@app.route('/processform')
def procform():
    print(request.args['first_name'])
    return "done"

app.run(debug=True)
