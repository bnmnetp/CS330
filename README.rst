CS-330 Internet Programming
===========================

* Office Hours: 2:00 -- 3:00 Daily.  By Appointment, `Use my Calendar <https://calendar.google.com/calendar/embed?mode=WEEK&src=millbr02%40luther.edu&ctz=America/Chicago>`_  Do not email me to ask when I can meet, use the calendar.
* Slack Channel:  I'll use this to post hints and screen captures of notes.  Using your norsekey `signup for slack <https://luthercs.slack.com/signup>`_ Then join the internetprogramming channel

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
  - Javascript `Pretest <http://interactivepython.org/runestone/static/JS4Python/pretest.html>`_ 30 minutes
  - Javascript Syntax and basic structures
  - For Tuesday Read `Javascript for Python Programmers Part I <http://interactivepython.org/runestone/static/JS4Python/TheBasics/JS4Python.html>`_  and Do practice exercises 1, 3, and 5


Week of February 7
~~~~~~~~~~~~~~~~~~

* Tuesday

  - Javascript Data types and Examples
  - For Thursday Read Javascript for Python Programmers Part II
  - For Thursday, if you did not complete practice exercises 3 and 5 finish them by Thursday.

* Thursday
  - Writing classes in Javascript
  - The document Object Model
  - Javascript Events and event driven programming

**For Tuesday**

* Do practice Exercise classes_3  -- Implement a stack class
* Create a web page that has a button on it.  Each time the button is pressed the next prime number should be displayed on the page along with the button.  The prime number should be displayed in an h1 with the id of 'nextprime' and the button should have an id of 'primebutton'.  This web page should be public in your account on knuth.luther.edu and I should be able to access the page using ``http://knuth.luther.edu/~youruser/buttontest.html``

Week of February 14
~~~~~~~~~~~~~~~~~~~

* Tuesday
  - Javascript Quiz - 30 mins on Javascript basics and classes
  - Creating an Expense tracking web application
  - Web API's

* Thursday
  - Check your grade on the quiz
  - Check your registration on interactivepython.org  -- Need to be in JS4Python
  - Expense Tracking SPA
  - Bootstrap
  - jQuery

Week of February 21
~~~~~~~~~~~~~~~~~~~

* Tuesday

  - Automated Testing with Selenium
  - Common Problems / Debugging
    - Submit buttons
    - static versus non-static functions and properties
  - JSON - Javascript Object Notation
  - Expense Tracking
    - localStorage - save
    - localStorage - restore
    - filtering the list by category
    - sorting
  - An expense API
  - XMLHTTP Request Objects

**Assignment**

* By class on thursday your page should save and restore your entered expenses.  Make sure that you have the latest deployed on knuth under expenses.html

* Thursday

  - filtering the list by category
  - sorting


* Resources / Readings
  - `Introduction to JSON <https://www.w3schools.com/js/js_json_intro.asp>`_


Week of February 28
~~~~~~~~~~~~~~~~~~~

* Tuesday
  - HTTP Protocol
  - REST
  - An expense API and server the easy way
  - An easy AJAX interface
  - CORS

* Thursday
  - Finishing jQuery interface to our server
  - XMLHTTP Request Objects


* Readings

  * `Intro to HTTP <http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177>`_
  * `Another Intro <http://www.tutorialspoint.com/http/index.htm>`_
  * `Build your own server <https://ruslanspivak.com/lsbaws-part1/>`_


* Week of March ...

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



Someday Maybe
~~~~~~~~~~~~~

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

* Week of March

    * Tuesday - Database Access

        * Using SqlAlchemy
        * A server side Todo Program

    * Thursday - No Class

    * Readings

        * [SQLAlchemy Tutorial](http://docs.sqlalchemy.org/en/latest/orm/tutorial.html)
