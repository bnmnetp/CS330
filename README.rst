CS-330 Internet Programming
===========================


Getting your environment set up
-------------------------------

It is important that you are comfortable working from the command line in this class.  If you are not comfortable working from the command line, and using git, then I would recommend you check out the following:

* Codecademy: `Using the Command Line <https://www.codecademy.com/learn/learn-the-command-line>`_  Well worth a couple of hours.
* Codecademy: `Git Basics <https://www.codecademy.com/learn/learn-git>`_
* Tower: `Learn Version control with Git <https://www.git-tower.com/learn/git/ebook>`_ Is an excellent overview also.

Because we will be installing a lot of third party packages, and because a big part of web programming involves using and installing 3rd party packages you will each create your own installation of Ubuntu Linux.  This is a very common development environment as well as a common environment for deploying production ready web apps.

* Kent has written up a nice set of instructions for `installing Ubuntu <http://knuth.luther.edu/~leekent/stories/installing-linux-in-our-lab.html>`_



Unit 1 - Networking Basics
--------------------------

The goals of this first unit are to understand a bit about Network programming, as this forms the basis for how the web server and the browser communicate with each other.

* Week of February 7

    * Tuesday - Get Linux environments installed and configured

        * Configure Network for 'Bridged Mode' so we can access server
        * Test the echoServer3.py and echoclient3.py programs with a partner

    * Thursday - Look at Multithreading and Multi-process models of the echo server

        * See echoServerMT.py and echoServerMP.py
        * Demonstrate a simple python webserver
        * start to write our own webserver based on echoServerXX.py

    * Readings

        * `Networking Basics <http://www.bogotobogo.com/cplusplus/sockets_server_client.php>`_
        * `A Simple Client/Server <http://www.bogotobogo.com/python/python_network_programming_server_client.php>`_



* Week of February 14

    * Tuesday  - Chat server with asyncio

    * Thursday - A multithreaded web server

    * Readings

        * `Intro to HTTP <http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177>`_
        * `Another Intro <http://www.tutorialspoint.com/http/index.htm>`_
        * `Build your own server <https://ruslanspivak.com/lsbaws-part1/>`_

* Week of February 20

    * Tuesday  -  Introduction to CGI Programming

        * A Hello World Example
        * Parameters and Interprocess communication
        * Readings

           * `Server Side Intro <http://interactivepython.org/runestone/static/webfundamentals/CGI/basiccgi.html>`_
           * `User Input <http://interactivepython.org/runestone/static/webfundamentals/CGI/forms.html>`_
           * `W3Schools Forms <http://www.w3schools.com/html/html_forms.asp>`_

    * Thursday - Extending our webserver to support CGI programming

        * Forms and Form Processing
        * The ooolld todo app as a server side program

* Week of February 29

    * Tuesday - Database Access

        * Using SqlAlchemy
        * A server side Todo Program

    * Thursday - No Class

    * Readings

        * `SQLAlchemy Tutorial <http://docs.sqlalchemy.org/en/latest/orm/tutorial.html>`_
        * `SQLITE3 Tutorial <https://docs.python.org/2/library/sqlite3.html>`_

* Week of March 7

    * Tuesday

        * Finish up CGI TODO
        * Using SQLAlchecmy -- a Better Database Interface
        * Understanding the Descriptors used by SQLAlchemy and others

    * Readings

        * `Python Descriptors Demystified <http://nbviewer.jupyter.org/urls/gist.github.com/ChrisBeaumont/5758381/raw/descriptor_writeup.ipynb>`_

* Week of March 14

    * Web 2.0 -- Services and Javascript

        * Review the SQLAlchemy based todo app
        * Designing a Web API
        * AJAX / XMLHttpRequest Objects
        * JSON
        * A Hybrid TODO - Javasript on the Front end and Services on the back

    * Readings

        * `Designing a RESTful API <http://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask>`_
        * `XMLHttpRequest <http://www.w3schools.com/ajax/ajax_xmlhttprequest_create.asp>`_


* Week of March 28

  * Javascript Tour

    * A quick and incomplete tour of a few important Javascript concepts (Arrays, Objects, Prototype Inheritance, Strings, iteration)

    * `Great Documentation and Examples <http://www.w3schools.com/js/default.asp>`_
    * `Prototypal Inheritance <http://blog.vjeux.com/2011/javascript/how-prototypal-inheritance-really-works.html>`_

  * Midterm Mashups

  * Readings

    * I highly recommend you buy `Flask Web Development by Miguel Grinberg <http://flaskbook.com>`_
    * It is based on this series of posts: `The Flask Mega Tutorial <http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-now-with-python-3-support>`_  But it is expanded and well worth the $$.


* Week of April 4

  * See `Mashup Information <https://github.com/bnmnetp/CS330/blob/master/mashup.md>`_

  * Javascript

    * Writing classes in Javascript
    * Tour of builtin classes

  * Security and Potential Pitfalls of the mashup

    * CORS -- Cross Origin Resource Sharing
