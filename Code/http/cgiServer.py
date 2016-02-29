# Echo server program
import socket
from threading import Thread
import os, datetime

class HttpServer(Thread):
    def __init__(self, conn):
        super(HttpServer, self).__init__()
        self.conn = conn.makefile()

    def getHeaders(self):
        """Construct dictionary of headers"""
        hd = {}
        line = self.conn.readline()
        while line != "\r\n":
            print ":"+line+":"+" len = ",len(line)
            key,value = line.split(':',1)
            hd[key] = value.rstrip()
            line = self.conn.readline()
        return hd
        
    def doGet(self,uri,version):
        """docstring for doGet"""
        fname = os.path.join(os.getcwd(),uri[1:])
        try:
            reqFile = open(fname)
            page = reqFile.read()
            self.conn.write("HTTP/1.1 200 OK\r\n")
            self.conn.write(str(datetime.datetime.now())+"\r\n")
            self.conn.write("Content-Type: text/html\r\n")
            self.conn.write("Content-Length: %d\r\n"%len(page))
            self.conn.write("\r\n")
            self.conn.write(page)
        except:
            self.conn.write("HTTP/1.1 404 Not Found\r\n")
            self.conn.write("\r\n")

    def doCgi(self,uri,version):
        """docstring for doCgi"""
        if '?' in uri:
            command,args = uri.split('?')
        else:
            command = uri
            args = ''
        command = os.path.join(os.getcwd(),command[1:])   ## security alert...
        #fork/exec new process use fdopen to redirect socket to stdout (sys.stdout = socket)
        # or can use popen to run and pass on the output?
        # setup environment variables:
        os.putenv('QUERY_STRING',args)
        try:
            pipeOut = popen(command)
            self.conn.write("HTTP/1.1 200 OK\r\n")
            pipeLine = pipeOut.readline()
            while  pipeLine != "":
                self.conn.write(pipeLine)
                pipeLine = pipeOut.readline()
        except:
            self.conn.write("HTTP/1.1 500 Execution Error\r\n")
            self.conn.write("\r\n")
            
    def doPost(self,uri,version):
        """docstring for doPost"""
        pass
        
    def getRequest(self):
        """Get the first line to determine the request type
        For example: GET /index.html HTTP/1.1 
        """
        req = self.conn.readline()
        return req.split()
        
    def run(self):
        """docstring for run"""
        req = self.getRequest()
        headers = self.getHeaders()
        print headers
        if req[0] == 'GET':
            if req[1][req[1].rfind('.'):] == '.cgi':
                self.doCgi(req[1],req[2])
            else:
                self.doGet(req[1],req[2])
        elif req[0] == 'POST':
            self.doPost(req[1],req[2])
        else:
            print 'Error: unhandled Request'
        
        print 'cleaning up'
        self.conn.close()


HOST = ''                 # Symbolic name meaning the local host
PORT = 8081              # Arbitrary non-privileged port

try:
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind((HOST, PORT))
    s.listen(2)
    while True:
        newSock, addr = s.accept()
        print 'Connected by', addr
        newConn = HttpServer(newSock)
        newConn.start()
except:
    print "caught error, exiting"
    s.close

