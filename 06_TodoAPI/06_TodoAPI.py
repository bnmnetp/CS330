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

engine = create_engine('sqlite:///todo_database.db', echo=False)
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


if __name__ == '__main__':
    app.run()

