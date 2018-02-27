# Echo server program
import socket
import threading
import os, datetime, sys
import traceback

class WriteableObject:
    def __init__(self):
        self.content = []
    def write(self, string):
        self.content.append(string)
    def __iter__(self):
        return self.content

class HttpServer(threading.Thread):
    def __init__(self, conn):
        super(HttpServer, self).__init__()
        self.conn = conn.makefile()   # dupes socket into something with a write method.
        self.orig_conn = conn         # save the original socket for later closing

    def getHeaders(self):
        """Construct dictionary of headers"""
        self.hd = {}
        line = self.conn.readline()
        while line != "\r\n":
            print ":"+line+":"+" len = ",len(line)
            key,value = line.split(':',1)
            self.hd[key] = value.strip()
            line = self.conn.readline()
        return self.hd

    def getIfModifiedDate(self):
        """Parse the If-Modified-Since date into a datetime object."""
        dateString = self.hd['If-Modified-Since']
        # std format Sat, 29 Oct 1994 19:43:31 GMT
        monthLookup = {'Jan':1, 'Feb':2, 'Mar':3, 'Apr':4, 'May':5,
                       'Jun':6, 'Jul':7, 'Aug':8, 'Sep':9, 'Oct':10,
                       'Nov':11, 'Dec':12}
        dateList = dateString.split()
        timeList = dateList[4].split(':')
        print dateList, timeList
        d = datetime.datetime(int(dateList[3]), monthLookup[dateList[2]], int(dateList[1]),
                              int(timeList[0]), int(timeList[1]), int(timeList[2]))
        return d

    def isFileNewerThanDate(self,fname, d):
        mtime = datetime.datetime.fromtimestamp(os.path.getmtime(fname))
        if mtime > d:
            return True
        else:
            return False

    def getPageLen(self,page):
        if page[:12].lower() == 'content-type':
            return len(page[page.index('\n\n')+2:])
        else:
            return len(page)
            
    def runPython(self, script):
        newOut = WriteableObject()
        sys.stdout = newOut
        try:
            execfile(script)
            sys.stdout = sys.__stdout__
            return "".join(newOut)
        except:
            self.conn.write('HTTP/1.1 500 Server Error\n\n')
            return None

    def sendPage(self,page,fname):
        if page:
            self.conn.write("HTTP/1.1 200 OK\n")
            self.conn.write("Content-Length: %d\n"%self.getPageLen(page))

            if fname[-3:] == 'jpg':
                self.conn.write("Content-Type: image/jpeg\n\n")
            elif fname[-4:] == 'html':
                self.conn.write("Content-Type: text/html\n\n")

            self.conn.write(page)
            self.conn.flush()

    def processQueryString(self,fname):
        qs = fname.split('?')
        if len(qs) > 1:
            fname = qs[0]
            qs = qs[1]
            os.environ['QUERY_STRING'] = qs

    def readPage(self,fname):
        try:
            reqFile = open(fname)
            page = reqFile.read()
            reqFile.close()
        except:
            self.conn.write("HTTP/1.1 404 Not Found\r\n")
            self.conn.write("\r\n")
            self.conn.flush()
            page = None
        return page
        
    def doGet(self,uri,version):
        """docstring for doGet"""

        fname = os.path.join(os.getcwd(),uri[1:])

        # check for conditional get
        if 'If-Modified-Since' in self.hd:
            d = self.getIfModifiedDate()
            if not self.isFileNewerThanDate(fname,d):
                self.conn.write('HTTP/1.1 304 Not Modified\n\n')
                return

        self.processQueryString(fname)

        if fname[-2:] == 'py':
            page = self.runPython(fname)
        else:
            page = self.readPage(fname)

        self.sendPage(page,fname)

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
        while True:
            req = self.getRequest()
            headers = self.getHeaders()
            print headers
            if req[0] == 'GET':
                self.doGet(req[1],req[2])
            elif req[0] == 'POST':
                self.doPost(req[1],req[2])
            else:
                print 'Error: unhandled Request'

            closeIt = True
            if 'Connection' in self.hd:
                if self.hd['Connection'] != 'keep-alive':
                    closeIt = True
                else:
                    closeIt = False
            if closeIt:
                self.conn.close()
                self.orig_conn.close()
                break


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
    traceback.print_exc()
    s.close()
    for t in threading.enumerate()[1:]:
        t.conn.close()
        t.orig_conn.close()
    sys.exit(0)
