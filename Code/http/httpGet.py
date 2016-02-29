#!/usr/bin/python
import socket
import string
import sys
import re

# read data one character at a time from the socket until newline
def readLine(s):
    msg = ''
    c = s.recv(1)
    while c != "\n" and len(c) > 0:
        msg = msg + c
        c = s.recv(1)
    return msg


def getPage(url):
    """>>> getPage("http://localhost/~bmiller/test.html")
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
       "http://www.w3.org/TR/html4/loose.dtd">
    <html lang="en">
    <head>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    	<title>untitled</title>
    	<meta name="generator" content="TextMate http://macromates.com/">
    	<meta name="author" content="Brad Miller">
    	<!-- Date: 2007-09-03 -->
    </head>
    <body>
    <h1>Hello World</h1>
    </body>
    </html>
    """
    umatch = re.match(r'http://([\w\d\.]+)[:]?(\d+)?(/.*)',url)
    if umatch:
        host,port,uri = umatch.groups()
    else:
        print 'I do not understand the url: %s \n' % url

    if port:
        port = int(port)
    else:
        port = 80
    # SOCK_STREAM indicates that the socket is to a TCP type socket. (not udp)
    # AF_INET indicates an ipv4 internet socket (not unix domain, not v6)
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    myhost = socket.gethostname()

    s.connect((host, port))  # host,port must be a tuple
    s.send('GET %s HTTP/1.1\r\n' % uri)
    s.send('Host: '+host+'\r\n')
    s.send('\r\n')  #Range: bytes=10-20\r\n

    dataLen = 0
    data = readLine(s)
    print data
    if True: #( re.search('200 OK', data)):
        p = re.compile('([\w+-]+:)\s+?(.*$)')
        data = readLine(s)
        print data
        while (data != '\r'):  # look for blank line
            print data, len(data)
#           TODO: Add this header to a dictionary
            m = p.match(data)
            if (m.group(1) == 'Content-Length:'):
                dataLen = int(m.group(2))
                print 'length = ', dataLen
            data = readLine(s)
            print data
    # receive the entire page

    if (dataLen > 0):
        data = s.recv(dataLen)
        print data
    else:
        s.settimeout(2.0)
        try:
            data = s.recv(1024)
            while data:
                print data
                data = s.recv(1024)
        except:
            print 'done'
    s.close()


if __name__ == '__main__':
    getPage("http://www.luther.edu/")
