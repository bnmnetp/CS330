from socket import *
import asyncio

loop = asyncio.get_event_loop()

async def echo_server(address):
    sock = socket(AF_INET, SOCK_STREAM)
    sock.setsockopt(SOL_SOCKET, SO_REUSEADDR, 1)
    sock.bind(address)
    sock.listen(5)
    sock.setblocking(False)

    while True:
        client, addr = await loop.sock_accept(sock)
        print('Connection from',addr)
        loop.create_task(echo_handler(client))


async def echo_handler(client):
    with client:
        while True:
            data = await loop.sock_recv(client, 100000)
            if not data:
                break
            await loop.sock_sendall(client, b'Got:'+data)
    print('Connection Closed')

loop.create_task(echo_server(('',25000)))
loop.run_forever()

# For a very full and educational explanation see: https://www.youtube.com/watch?v=lYe8W04ERnY
