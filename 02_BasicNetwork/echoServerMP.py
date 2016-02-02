# Echo server program
import socket
from multiprocessing import Process, Array

        
def run(conn):
    """docstring for run"""
    while 1:
        data = conn.recv(1024)
        if not data:
            break
        conn.send(data)
    print 'closing connection ', conn
    conn.close()

HOST = ''                 # Symbolic name meaning the local host
PORT = 50007              # Arbitrary non-privileged port
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((HOST, PORT))
s.listen(2)               # listen param is length of backlog queue

while True:
    newSock, addr = s.accept()
    print 'Connected by', addr
    p = Process(target=run, args=(newSock,))
    p.start()


