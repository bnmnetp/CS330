#

Work in pairs to write a command line chat client to connect to my server?

1.  Get the hostname and port from sys.argv -- or use values I give you.
2.  create a socket object and set its timeout to 2
3.  Try to connect to the remote host, if you cannot exit with an error
4.  Write a prompt like 'Me>' to stdout
5.  Loop forever

    1.  Use select to see if either stdin or the socket you connected with has data
    2.  If there is data from the server, get it and print it out. Unless the data is empty in which case disconnect and exit.
    3.  If there is data from stdin

        1.  Read it all using readline to get it all
        2.  encode the data
        3.  Send it to the server
