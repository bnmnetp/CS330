from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app=app)

class Expenses(Resource):

    def get(self, expense_id=None):
        if expense_id == None:
            return {'hello':'world'}
        else:
            return {'hello': f'world {expense_id}'}


api.add_resource(Expenses, '/api/v1/expenses',
                 '/api/v1/expenses/<int:expense_id>')

if __name__ == '__main__':
    app.run(debug=True)

# GET
# /api/v1/expenses  -- return all Expenses
# /api/v1/expenses/356  -- return expense 346

# POST
# /api/v1/expenses  -- Create new expense data is in the data block
