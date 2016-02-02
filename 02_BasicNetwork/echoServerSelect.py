# Echo server program
import socket
import select

HOST = ''                 # Symbolic name meaning the local host
PORT = 50008              # Arbitrary non-privileged port
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((HOST, PORT))
s.listen(5)
preader = [s]
pwriter = []
perr = []
timeout=10
print("our listening socket is", s)

while 1:
    rtr, rtw, ie = select.select(preader,pwriter,perr,timeout)
    print('after select', rtr, rtw, ie)
    if s in rtr:
        conn, addr = s.accept()
        print('Connected by', addr)
        rtr.remove(s)
        conn.setblocking(0)
        preader.append(conn)
    for conn in rtr:
        data = conn.recv(1024)
        if not data:
            preader.remove(conn)
            break
        conn.send(data)

conn.close()

