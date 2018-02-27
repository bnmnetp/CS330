A Python Web Server
===================

In this assignment you are going to write your own web server.  Your server must be able to handle at least the following:

Requests
--------

* Browser makes a GET request for an HTML, CSS, or Javascript file  (Start with HTML)
* Browser makes a GET request for an image

Required Headers
----------------

* Return the appropriate response code line (200 OK, 404, 500, etc)
* Content-Type
* Content-Length
* Date
* Server - Use your name somewhere in the server response.

Implementation
--------------

* You may either make your server multi-threaded, multi-processed, or use asyncio.
* You can test your server first, using the `nc` command and when you think you have things working right, then you should test it with your browser.  You can bring up a page in the browser using the IP address and the port of the server as follows:  `http://192.168.1.5:8000/myfile.html`


Extra Credit
------------

* Correctly handle conditional requests from the browser.  That is, the browser caches a copy of the page locally and only wants to get a new page if it is changed since it was last loaded into the cache.
