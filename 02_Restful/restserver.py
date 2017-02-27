from flask import Flask
from flask_restful import Resource, Api
from json import dumps, loads

app = Flask(__name__)
api = Api(app=app)

class Expense:
    def __init__(self, date, store, category, item, amount ):
        self.date = date
        self.store = store
        self.category = category
        self.item = item
        self.amount = float(amount)

    def foo(self):
        print('ffsf')
        
e = Expense("2017-02-22", "fareway", "grocery", "milk", "2.00")
print(dumps(e.__dict__))

class ExpenseResp(Resource):

    def get(self, expense_id=None):
        if expense_id == None:
            return dumps(e.__dict__)
        else:
            return {'hello': f'world {expense_id}'}


api.add_resource(ExpenseResp, '/api/v1/expenses',
                 '/api/v1/expenses/<int:expense_id>')

if __name__ == '__main__':
    app.run(debug=True)

# GET
# /api/v1/expenses  -- return all Expenses
# /api/v1/expenses/356  -- return expense 346

# POST
# /api/v1/expenses  -- Create new expense, data is in the data block


# DELETE
# /api/v1/expenses/356 -- remove expense
