from flask import Flask, render_template
from flask_bootstrap import Bootstrap

app = Flask(__name__)
app.debug = True

Bootstrap(app)

@app.route('/')
def hello_world():
    return render_template('index.html',foo='bar')


if __name__ == '__main__':
    app.run()
