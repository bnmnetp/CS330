import os
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "<h1>Hello World</h1>"

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host='0.0.0.0', port=port)

# 'postgres://xlsvcgjpvgbbvx:d6af5b677018ca763773de5e0570ef9ee364edf0cb52eee8e8bd25220efd0718@ec2-23-21-227-73.compute-1.amazonaws.com:5432/d9i4os2j7jplh3'