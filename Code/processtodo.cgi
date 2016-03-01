#!/usr/bin/python

print "Content-type: text/html\n\n"

parms = os.environ['QUERY_STRING']
parmlist = parms.split('=')

print '<html><body><pre>'
print parms
print '</pre></body></html>'

