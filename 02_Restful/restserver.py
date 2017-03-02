from flask import Flask, request, Response
from json import dumps, loads
from flask_pymongo import PyMongo
from flask import jsonify
from bson.json_util import dumps

app = Flask(__name__)
mongo = PyMongo(app)

@app.route('/api/v1/expenses', methods=['GET'])
def get_expenses(expense_id=None):
        if expense_id == None:
            edb = mongo.db.expenses
            #res = edb.find_one({'store': 'fareway'})
            explist = list(edb.find())
            res = Response(dumps(explist))
            res.headers['Access-Control-Allow-Origin'] = '*'
            res.headers['Content-type'] = 'application/json'
            return  res
        else:
            return {'hello': 'world {}'.format(expense_id)}


@app.route('/api/v1/expenses', methods=['POST'])
def save_expense():
    edb = mongo.db.expenses
    newexp = request.json

    edb.insert(newexp)
    return dumps(newexp)


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=8088)

# GET
# /api/v1/expenses  -- return all Expenses
# /api/v1/expenses/356  -- return expense 346

# POST
# /api/v1/expenses  -- Create new expense data is in the data block

# curl -H "Content-Type: application/json" -X POST -d '{"date": "2017-02-28", "store": "ace", "category": "law", "item": "lawnmower", "amount": 200.55}'
