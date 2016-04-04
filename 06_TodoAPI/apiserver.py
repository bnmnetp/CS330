from flask import Flask, request, jsonify
from sqlalchemy import create_engine, Column, Integer, String, Boolean, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import date

engine = create_engine('sqlite:///todo_database.db',echo=False)
Base = declarative_base()


app = Flask(__name__)
app.debug = True

Session= sessionmaker(bind=engine)
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
    task = Todo(task='example for 330',priority='High', due=date(2016,3,28), done=False)
    session.add(task)
    task = Todo(task='another example for 330',priority='High', due=date(2016,4,28), done=False)
    session.add(task)
    task = Todo(task='no more examples',priority='High', due=date(2016,3,30), done=False)
    session.add(task)
    session.commit()

@app.route('/todo/<int:task_id>')
def index(task_id):
    return jsonify(greeting="<h1>Hello Task Id # {}</h1>".format(task_id))

@app.route('/todo', methods=['GET'])
def get_all_tasks():
    Session = sessionmaker(bind=engine)
    Session.configure()
    session=Session()
    results = session.query(Todo).filter_by(done=False).all()
    reslist = []
    for row in results:
        reslist.append(dict(id=row.id,task=row.task,priority=row.priority,due=row.due.isoformat()))

    print(reslist)
    return jsonify(tasklist=reslist)


if __name__ == '__main__':
    app.run()
