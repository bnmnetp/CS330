#!/usr/bin/env python3

from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy import Column, Integer, String, Date, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import date

engine = create_engine('sqlite:///todo.db',echo=True)

Base = declarative_base()

class Todo(Base):
    __tablename__ = 'todo'
    id = Column(Integer, primary_key=True)
    task = Column(String)
    priority = Column(String)
    due = Column(Date)
    done = Column(Boolean)

Base.metadata.create_all(engine)


task = Todo(task='Make example for 330',priority='high',due=date(2016,3,1),done=False)

Session = sessionmaker(bind=engine)
Session.configure(bind=engine)
session = Session()

session.add(task)

session.commit()


our_task = session.query(Todo).filter_by(done=False).first()
print(our_task.task)

# this is how we update!!
our_task.done = True
session.commit()

# connection = engine.connect()
# result = connection.execute("select username from users")
# for row in result:
#     print "username:", row['username']
# connection.close()
