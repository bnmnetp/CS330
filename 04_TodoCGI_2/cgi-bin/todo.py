#!/usr/bin/env python3

import sqlite3
import os
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy import Column, Integer, String, Date, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import date
import cgi
from dateutil.parser import parse
import cgitb

cgitb.enable()  # enable for tracebacks in the browser

engine = create_engine('sqlite:///todo.db',echo=False)
Base = declarative_base()

class Todo(Base):
    __tablename__ = 'todo'
    id = Column(Integer, primary_key=True)
    task = Column(String)
    priority = Column(String)
    due = Column(Date)
    done = Column(Boolean)

Base.metadata.create_all(engine)

# From the folder above your cgi-bin folder you run:
# python3.4 -m http.server --cgi 80000
# your test.db file should be in the same folder as your cgi-bin folder.



# Process form data if submitted
def process_forms(session):
    if os.environ["QUERY_STRING"]:
        form = cgi.FieldStorage()

        if 'description' in form:
            newTodo = Todo(task=form['description'].value, priority=form['priority'].value,
                           due=parse(form['duedate'].value).date(), done=False )
            session.add(newTodo)
            session.commit()
        elif 'isdone' in form:
            for task_id in form.getlist('isdone'):
                session.query(Todo).filter_by(id=int(task_id)).update({'done':True})
            session.commit()

def create_todo_list(session):
    res = session.query(Todo).filter_by(done=False).all()
    print("Content-Type: text/html")
    print("")
    print("<h1>My Todo List</h1>")
    print("<form method=GET action=todo.py>")
    print("<table>")

    rowtext = "<tr><td><input type=checkbox name=isdone value=%d></td><td>%s</td><td>%s</td><td>%s</td></tr>"

    for row in res:
        print(rowtext % (row.id, row.task, row.priority, row.due))

    print("""
    </table>
    <input type=submit value='Mark Done'>
    </form>""")

def create_new_task_form():
    print("""
    <hr>
    <form method=GET action=todo.py>
    Task: <input type=text name=description>
    <select name=priority>
       <option value=high>High</option>
       <option value=medium>Medium</option>
       <option value=low>Low</option>
    </select>
    Due: <input type=text name=duedate>
    <input type=submit value=submit>
    </form>
    """)

if __name__ == '__main__':
    Session = sessionmaker(bind=engine)
    Session.configure()
    session = Session()

    process_forms(session)
    create_todo_list(session)
    create_new_task_form()