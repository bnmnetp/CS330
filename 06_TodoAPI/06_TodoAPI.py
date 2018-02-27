from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import os
from datetime import date
from dateutil.parser import parse

app = Flask(__name__)
app.debug = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo_database.db'
db = SQLAlchemy(app)

class Todo(db.Model):
    __tablename__ = 'todo'
    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String)
    priority = db.Column(db.String)
    due = db.Column(db.Date)
    done = db.Column(db.Boolean)

db.create_all()

results = Todo.query.filter_by(done=False).all()
if len(results) == 0:
    # make some test data
    task = Todo(task='Make example for 330', priority='High', due=date(2016, 3, 28), done=False)
    db.session.add(task)
    task = Todo(task='Another example for 330', priority='Medium', due=date(2016, 4, 1), done=False)
    db.session.add(task)
    db.session.commit()


@app.route('/hellojson')
def hello_world():
    return jsonify({'greeting':'Hello JSON World!'})


@app.route('/todo', methods=['GET'])
def todo():
    reslist = []
    results = Todo.query.filter_by(done=False).all()
    for row in results:
        reslist.append(dict(id=row.id, task=row.task, priority=row.priority, due=row.due.isoformat()))

    print(reslist)
    return jsonify(tasklist=reslist)

@app.route('/todo/<int:task_id>', methods=['PUT'])
def todo_one(task_id):
    row = Todo.query.filter_by(id=task_id).update(dict(done=True))
    db.session.commit()
    return "done"

# Notes:  For a POST this seems particularly important.
# If The API wants to send JSON as the data part of the post then make sure to set the content type to application/json  data will be in request.json
# If the API is sending form data then it will send as x-www-form-urlencoded and will be in request.form
# If the API does not set the content type (or is text/plain or something) then data is in request.data
# If there is data as a part of the URL then it will be in request.args

@app.route('/todo', methods=['POST'])
def mark_done():
    print("got a PUT")
    # when a POST or PUT is sent, and the content-type is application/x-www-form-urlencoded then
    # we should get the data from a request.form object not from request.args, request.data or request.query_string
    #print("id = ", request.form['id'])
    #print("done = ", request.form['done'])
    print("json = ", request.json)
    return "foo"

if __name__ == '__main__':
    app.run()

