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


Unit 1 - Javascript Fundamentals
--------------------------------

Most of you have only had a small taste of Javascript in CS-130.  Here we'll compare Javascript to Python highligting the key differences and main features of Javascript for programming in the browser.

Week of February 2
~~~~~~~~~~~~~~~~~~

* Thursday
  - Admin
  - The Web Programming Architecture
  - Review of DOM
  - Javascript `Pretest <http://interactivepython.org/runestone/static/JS4Python/pretest.html>`_ 30 minutes
  - Javascript Syntax and basic structures
  - For Tuesday Read `Javascript for Python Programmers Part I <http://interactivepython.org/runestone/static/JS4Python/TheBasics/JS4Python.html>`_  and Do practice exercises

Week of February 7
~~~~~~~~~~~~~~~~~~

* Tuesday
  - Javascript Data types and Examples
  - For Thursday Read Javascript for Python Programmers Part II

* Thursday
  - Writing classes in Javascript
  - More Javascript Helper Objects
  - Javascript Quiz 1
  - Javascript programming project 1

Week of February 14
~~~~~~~~~~~~~~~~~~~

* Tuesday
  - XMLHTTP Request Objects
  - Web API's

* Thursday
  - Mashups
  - Javascript Quiz 2
  - Mashup Project

Unit 2 - Networking Basics
--------------------------

The goals of this unit are to understand a bit about Network programming, as this forms the basis for how the web server and the browser communicate with each other.

Week of February 21
~~~~~~~~~~~~~~~~~~~

* Tuesday
  - Get Linux environments installed and configured
  Configure Network for 'Bridged Mode' so we can access server
  Test the echoServer3.py and echoclient3.py programs with a partner

* Thursday
  - Look at Multithreading and Multi-process models of the echo server

  * See echoServerMT.py and echoServerMP.py
  * Demonstrate a simple python webserver
  * start to write our own webserver based on echoServerXX.py
  * Quiz on the readings

* Readings

  * `Networking Basics <http://www.bogotobogo.com/cplusplus/sockets_server_client.php>`_
  * `A Simple Client/Server <http://www.bogotobogo.com/python/python_network_programming_server_client.php>`_



Week of February 28
~~~~~~~~~~~~~~~~~~~

* Tuesday
  - Chat server with asyncio

* Thursday
  - A multithreaded web server
  - Quiz on Readings

* Readings

  * `Intro to HTTP <http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177>`_
  * `Another Intro <http://www.tutorialspoint.com/http/index.htm>`_
  * `Build your own server <https://ruslanspivak.com/lsbaws-part1/>`_

* Week of March

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

* Week of March

    * Tuesday - Database Access

        * Using SqlAlchemy
        * A server side Todo Program

    * Thursday - No Class

    * Readings

        * [SQLAlchemy Tutorial](http://docs.sqlalchemy.org/en/latest/orm/tutorial.html)
