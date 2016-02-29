#!/usr/bin/env python3

from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy import Column, Integer, String, Date
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

Base.metadata.create_all(engine)


task = Todo(task='Make example for 330',priority='high',due=date(2016,3,1))

Session = sessionmaker(bind=engine)
Session.configure(bind=engine)
session = Session()

session.add(task)

session.commit()
