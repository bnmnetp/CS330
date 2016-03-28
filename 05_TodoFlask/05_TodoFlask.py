from flask import Flask, request, jsonify
import sqlite3
import os
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy import Column, Integer, String, Date, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import date
from dateutil.parser import parse

from dateutil.parser import parse
engine = create_engine('sqlite:///todo_database.db',echo=False)
Base = declarative_base()

app = Flask(__name__)
app.debug = True

Session = sessionmaker(bind=engine)
Session.configure()
session = Session()

from collections import OrderedDict


class Todo(Base):
    __tablename__ = 'todo'
    id = Column(Integer, primary_key=True)
    task = Column(String)
    priority = Column(String)
    due = Column(Date)
    done = Column(Boolean)

Base.metadata.create_all(engine)


@app.route('/')
def hello_world():
    return 'Hello World!'




@app.route('/todo')
def todo():
    print("before forms")
    process_forms(session)
    print("after forms")
    return create_todo_list(session) + create_new_task_form()

# From the folder above your cgi-bin folder you run:
# python3.4 -m http.server --cgi 80000
# your test.db file should be in the same folder as your cgi-bin folder.

# Process form data if submitted
def process_forms(session):
        if 'description' in request.args:
            newTodo = Todo(task=request.args['description'], priority=request.args['priority'],
                           due=parse(request.args['duedate']).date(), done=False )
            session.add(newTodo)
            session.commit()
        elif 'isdone' in request.args:
            print(request.args.getlist('isdone'))
            for task_id in request.args.getlist('isdone'):
                session.query(Todo).filter_by(id=int(task_id)).update({'done':True})
            session.commit()

def create_todo_list(session):
    results = session.query(Todo).filter_by(done=False).all()
    #print([dict(r) for r in results])
    res = "<h1>My Todo List</h1>"
    res += "<form method=GET action=todo>"
    res += "<table>"

    rowtext = "<tr><td><input type=checkbox name=isdone value=%d></td><td>%s</td><td>%s</td><td>%s</td></tr>"

    for row in results:
        res += rowtext % (row.id, row.task, row.priority, row.due)

    res += """
    </table>
    <input type=submit value='Mark Done'>
    </form>"""

    return res

def create_new_task_form():
    return """
    <hr>
    <form method=GET action=todo>
    Task: <input type=text name=description>
    <select name=priority>
       <option value=high>High</option>
       <option value=medium>Medium</option>
       <option value=low>Low</option>
    </select>
    Due: <input type=text name=duedate>
    <input type=submit value=submit>
    </form>
    """

if __name__ == '__main__':
    app.run()
