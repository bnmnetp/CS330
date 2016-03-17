from flask import Flask, request, jsonify
import os
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy import Column, Integer, String, Date, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import date
from dateutil.parser import parse

engine = create_engine('sqlite:///todo_database.db', echo=False)
Base = declarative_base()

app = Flask(__name__)
app.debug = True

Session = sessionmaker(bind=engine)
Session.configure()
session = Session()


class Todo(Base):
    __tablename__ = 'todo'
    id = Column(Integer, primary_key=True)
    task = Column(String)
    priority = Column(String)
    due = Column(Date)
    done = Column(Boolean)

Base.metadata.create_all(engine)

results = session.query(Todo).filter_by(done=False).all()
if len(results) == 0:
    # make some test data
    task = Todo(task='Make example for 330', priority='High', due=date(2016, 3, 28), done=False)
    session.add(task)
    task = Todo(task='Another example for 330', priority='Medium', due=date(2016, 4, 1), done=False)
    session.add(task)
    session.commit()


@app.route('/hellojson')
def hello_world():
    return jsonify({'greeting':'Hello JSON World!'})


@app.route('/todo', methods=['GET'])
def todo():
    Session = sessionmaker(bind=engine)
    Session.configure()
    session = Session()
    reslist = []
    results = session.query(Todo).filter_by(done=False).all()
    for row in results:
        reslist.append(dict(id=row.id, task=row.task, priority=row.priority, due=row.due.isoformat()))

    print(reslist)
    return jsonify(tasklist=reslist)

@app.route('/todo/<int:task_id>', methods=['GET'])
def todo_one(task_id):
    Session = sessionmaker(bind=engine)
    Session.configure()
    session = Session()
    row = session.query(Todo).filter_by(id=task_id).one()
    return jsonify(task=dict(id=row.id, task=row.task, priority=row.priority, due=row.due.isoformat()))

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

