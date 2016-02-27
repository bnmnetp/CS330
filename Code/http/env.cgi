#!/usr/bin/python

import os

print "Content-type: text/html"
print "Set-cookie: foobar=mycookie123; domain=knuth.luther.edu; path=/~bmiller/"
print "\n\n"

print "<html>"
print "<head><title>Server Environment</title></head>"
print"<body><pre>"
x = os.popen("env")
print x.read()
print "</pre></body>"
print "</html>"