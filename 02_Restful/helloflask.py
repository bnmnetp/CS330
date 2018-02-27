from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "<h1>Hello World</h1>"


app.run(debug=True, port=5001)
