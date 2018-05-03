CS-330 Internet Programming
===========================

* Office Hours: 9:30 -- 10:30 Tues, Wed, Thurs.  By Appointment, `Use my Calendar <https://calendar.google.com/calendar/embed?mode=WEEK&src=millbr02%40luther.edu&ctz=America/Chicago>`_  Do not email me to ask when I can meet, use the calendar.
* Slack Channel:  I'll use this to post hints and screen captures of notes.  Using your norsekey `signup for slack <https://luthercs.slack.com/signup>`_ Then join the internetprogramming channel

Getting your environment set up
-------------------------------

It is important that you are comfortable working from the command line in this class.  If you are not comfortable working from the command line, and using git, then I would recommend you check out the following:

* Codecademy: `Using the Command Line <https://www.codecademy.com/learn/learn-the-command-line>`_  Well worth a couple of hours.
* Codecademy: `Git Basics <https://www.codecademy.com/learn/learn-git>`_
* Tower: `Learn Version control with Git <https://www.git-tower.com/learn/git/ebook>`_ Is an excellent overview also.

Because we will be installing a lot of third party packages, and because a big part of web programming involves using and installing 3rd party packages you will each need your own installation of Ubuntu Linux.  This is a very common development environment as well as a common environment for deploying production ready web apps.

* Kent has written up a nice set of instructions for `installing Ubuntu <http://knuth.luther.edu/~leekent/stories/installing-linux-in-our-lab.html>`_  He also has a `video here <http://cs.luther.edu/~leekent/InstallingLinux.mp4>`_

Unit 2 - Back End with Flask

`The Flask Mega-tutorial <https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world>`_ is an excellent resource for this part of the course.

Week of May 8
~~~~~~~~~~~~~

World explorer project due on Tuesday

* This project is all to be done with flask and server side python.

* Develop an interface staring with the contents in a dropdown menu (populated from the database) when a user selects a continent then you should display a dropdown with the names of the countries and another with the languages.

* If the user selects a country display all the information about that country and add a dropdown that includes the names of the cities.
when a city is chosen continue to display the country information but add the details for the selected city as well.

* If the user selects a language then show the detailed information for all of the countries on that continent that have that language as their official language.

Proposals due on Tuesday for final Project

Week of May 1
~~~~~~~~~~~~~

* Tuesday - XKCD assignment due
  - Database

* Thursday
  - Cookies
  - Talk about final project
  
  - Notes on records
    
    >>> import records
    >>> db2 = records.Database('sqlite:///mydb.db')
    >>> db2.query('create table person (first_name text, last_name text)')
    <RecordCollection size=0 pending=True>
    >>> db2.query("""insert into person values ('Brad', 'Miller')""")
    <RecordCollection size=0 pending=True>
    >>> res = db2.query("""select * from person""")
    >>> res[0]
    <Record {"first_name": "Brad", "last_name": "Miller"}>


Week of April 24
~~~~~~~~~~~~~~~~

* Tuesday
  -   - The Python Database Interface and `records <https://github.com/kennethreitz/records>`_

* Thursday
  - No Class - Work on XKCD Password project
  - XKCD Password Requirements
    * Generate a password from a word list dictionary composed of four words that satisfy the minimum and maximum length as defined selected by the user. (minimum single word length, maximum single word length, maximum overall length)
    * Implement a checkbox to enable letter for number substitution in the passwords
    * display passwords in a table using templates
    * Use the bootstrap plugin for flask to improve the look and feel.
    * Do ONE of the following:
      * implement options for "easy typing" passwords
      * implement options for adjective, noun, verb, adverb style

    * This is due at the end of the day Tuesday May 1

Week of April 17
~~~~~~~~~~~~~~~~

* Tuesday - In Class Demo Day - Demo your mashups to me and your classmates

* Thursday 
  - virtual environments
  - Templates
  - Forms



Unit 1 - Javascript Fundamentals
--------------------------------

Week of April 10
~~~~~~~~~~~~~~~~

* Tuesday - No Class
* Thursday - Work on Mashups

Week of April 3
~~~~~~~~~~~~~~~

* Midterm Mashups!  (see mashup.md)
* Writing a simple proxy to avoid CORS problems
* I will be gone Tuesday April 10th

Week of March 27
~~~~~~~~~~~~~~~~

* Enjoy Spring Break!

Week of March 20
~~~~~~~~~~~~~~~~

**For Thursday by 5pm**

  * Implement saving and restoring your todo list from a server
  * Ideas for midterm mashup
  * add one additional feature of your choice to the todo list

**Tuesday**

* Deploying the server to pythonanywhere `Getting Started <https://help.pythonanywhere.com/pages/Flask/>`_
* Virtual environments
* Discussion of midterm mashups (not due until after break)

Week of March 13
~~~~~~~~~~~~~~~~

**For Tuesday** Continue to enhance the shopping cart application by:

* Adding a sort capability to your table -- clicking on the title of a column should cause your program to sort the list on that column.
* Adding the use of localStorage to store and retrieve your list.  When the page loads you should access localStorage to restore your list.

* Tuesday

  * XMLHttpRequest objects
  * New fetch interface and Promises
  * a simple Flask application

* Thursday

  * Passing data from client to server
  * Using promises to build a remote adding machine

Week of March 6
~~~~~~~~~~~~~~~

**For Tuesday**  MVC Version of the shopping list with the following features working

* MVC implementation
* Working publish/subscribe interface between model and view
* Review MVC and pub/sub models
* Closures and Scopes in Javascript and events see https://runestone.academy/runestone/static/JS4Python/Advanced/closures.html
* JSON and localStorage

**For Thursday**
* Clicking on a checkbox marks the item as purchased.  The row should now appear to be crossed out.  Optionally have the row dissapear after being crossed out for aobut 2 seconds.
* If we get to localsStorage 


Week of February 27
~~~~~~~~~~~~~~~~~~~

* Tuesday/Thursday

  - Initial user interface due by class on tuesday.  Only the add button needs to work.
  - Look at Selenium unit tests for buttontest homework
  - Review git basics and commit the initial shopping list app to git
  - Model View Controller and first refactoring
  - Using localStorage for saving tasks in the browser

* Thursday

  - Introduce the idea of a query string and post data
  - Create page with four text inputs to enter 4 numbers
  - Add an Add button
  - When add button is clicked you have to add all the numbers using server
  - The server supports a URL '/addtwo?num1=1&num2=2' and returns a json result 
  - in the client use the fetch interface to add all four numbers together


Week of February 20
~~~~~~~~~~~~~~~~~~~

* Tuesday

	- The document Object Model
	- Javascript Events and event driven programming
  - Finish up the prime number table

* Thursday
  - Admin
  - The Web Programming Architecture
  - Review of DOM
  - For thursday: Create a web page that has a button on it.  Each time the button is pressed the next prime number should be displayed on the page along with the button.  The prime number should be displayed in an h1 with the id of'nextprime' and the button should have an id of 'primebutton'.  This web page should be public in your account on knuth.luther.edu and I should be able to access the page using ``http://knuth.luther.edu/~youruser/buttontest.html``
  - Unit testing
  - Writing unit tests for the stack class


Week of February 13
~~~~~~~~~~~~~~~~~~~

Most of you have only had a small taste of Javascript in CS-130.  Here we'll compare Javascript to Python highligting the key differences and main features of Javascript for programming in the browser.

* Tuesday
  - Javascript Data types and Examples
  - For Thursday Read Javascript for Python Programmers Part II

* Thursday
  - Javascript Quiz 1


Unit 2 - Networking Basics
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

	- Writing classes in Javascript

**For Tuesday Feb 20**

* Do practice Exercise classes_3  -- Implement a stack class


Week of February 8
~~~~~~~~~~~~~~~~~~

* Thursday

  - Admin
  - The Web Programming Architecture
  - Javascript `Pretest <https://runestone.academy/runestone/static/JS4Python/TheBasics/pretest.html>`_ 30 minutes
  - Javascript Syntax and basic structures
  - For Tuesday Feb 13, Read `Javascript for Python Programmers Part I <https://runestone.academy/runestone/static/JS4Python/TheBasics/toctree.html>`_  and Do Practice Problems 1 (jsbasics_1), 3 (jsbasic_3), and 5 (jsbasic_5)


