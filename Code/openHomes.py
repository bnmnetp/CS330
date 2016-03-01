#!/usr/bin/python

import os
import time
classList = open('classList','r').readlines()
classList = [x[:-1] for x in classList]

for student in classList:
    try:
        os.system('open "http://knuth.luther.edu/~'+student+'/todo/todo.cgi"')
        time.sleep(1)
    except urllib2.HTTPError as e:
        print student, e.msg
