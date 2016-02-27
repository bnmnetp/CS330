#!/usr/bin/python
import sys

print 'Content-Type: text/html\n\n'


print '''<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="book.css">
</head>

<body>
	<h1>Being Busy</h1> 
	<p>It's not easy being busy! But that doesn't mean it can't be fun.</p> 
<form>	<ul>'''

try:
    tl = open('todo.txt','r')
except:
    print '<h1>Could not open todo file</h1>'
    print '</body></html>'
    sys.exit()

for line in tl:
	print '<li> <input type="checkbox"  /> %s </li>' % (line)

print '''
	</ul>
	<p>Enter a new Task: <input type="text" name="newtask" size="50"> </p>
	<input type="submit" value="submit">
</form>	
</body>

</html>
'''
