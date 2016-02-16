#

Work in pairs to write a command line chat client to connect to my server?

1.  Get the hostname and port from sys.argv -- or use values I give you.  The little program below will demonstrate the contents of the sys.argv list if you call the program from the command line.

```
import sys
print(sys.argv)
```

You will see that `sys.argv` is a list.  if you run your program like this `python3 asyncChatClient.py knuth.luther.edu 8000` Then sys.argv will contain `['asyncChatClient.py', 'knuth.luther.edu', '8000']`

2.  create a socket object and set its timeout to 2
3.  Try to connect to the remote host, if you cannot exit with an error.  You will use the `connect` function for this.
4.  Write a prompt like 'Me>' to stdout.  Use `print` or use `sys.stdout.write('Me>')``
5.  Loop forever

    1.  Use `select` to get the list of sockets with data.
    2.  Check if either `sys.stdin` or the socket you connected with has data
    2.  If there is data from the server, get it and print it out. Unless the data is empty in which case disconnect and exit.
    3.  If there is data from stdin

        1.  Read it all using `sys.stdin.readline()` to get it all
        2.  encode the data
        3.  Send it to the server
