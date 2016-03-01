Making Word Ladders
===================

In this assignment you are going to create word ladders and display them on a web page.  This web page will have almost no server side code, other than to supply the basic page, css and javascript. files.  The rest of the work will be done by a Javascript program in the browser.  In addition to creating some webpage content

The initial page layout will contain two text entry boxes a button and a dropdown that allows the user to select the length of the words 3, 4, or 5 letter words are allowed.  The user will then type in a beginning word, and an ending word.  Your program must find the series of words that differ by only a single letter that lead from the beginning word to the ending word.  For example, to turn the word STONE into WATER, one series of words is::

    STONE
    SHONE
    SHINE
    SHINS
    SHIES
    SHYER
    SAYER
    HAYER
    HATER
    WATER

Word Ladder Algorithm
---------------------

In Datastructures class you may have studied a graph based algorithm for solving this problem.  Here we will use an algorithm that employs both a Stack and a Queue.  Here's how the algorithm works:

1. Get the starting word and search through the dictionary to find all words that are one letter different, and have not already been used.  Add the starting word to a set of used words.

2. Create stacks for each of these words containing the starting word (pushed first) and the word that is one letter different pushed on top.  Add these words to the set of used words.

3. Enqueue each of these stacks onto a queue, creating a queue of stacks!

4. Now dequeue the first stack from the queue, look at its top word and compare it with the ending word.  If they are equal you are done, and this tack reprsents the word ladder.  Otherwise find all the unused words that are one letter different from the word on top of the stack.  For each of these words:

   4.1 Make a clone of the current stack and push this word onto the cloned stack.
   4.2 Add the new words to the set of used words
   4.3 enqueue this new stack

Make sure that you don't re-use any words or you will create an infinite loop.

We'll go through an example of this in class.

I will provide you with the dictionary you need for this assignment.  The dictionary is simply a javascript file with three large arrays.   one array contains three letter words, one contains four letter words, and one contains five letter words.  By including this javascript file in your page you will have the global variables ``threeLetterWords`` ``fourLetterWords`` and ``fiveLetterWords`` available for your use.

Requirements
------------

* Implement the Stack class just as we did in class.

* Implement a Queue class

* Implement a Set class, you should implement at least ``add`` and ``contains`` methods.

* Create a web page with the basic user interface described in the beginning.  When the user presses the button to create the ladder your program should:

  * Verify that the start and end word are of the proper length.  If the words are not the correct length display an error message on your webpage.
  * Compute the word ladder using the algorithm described above
  * Popuulate a table on your webpage with the word ladder.  This table should be styled so it looks nice.
  * If no ladder is possible the appropriate message should be displayed.
  * The user should be able to enter one or more new words and when the button is pressed the old ladder is cleared from the page.


Grading
-------

This assignment is worth 20 points, distributed as follows:

* 5 points for implementing the Queue and Set classes
* 10 points for a working word ladder implementation
* 5 points for creating the web page 

Extra Credit
------------

* Some of these ladders take a long time.  Can you devise a way to run the calculation in a way that would let the user cancel the operation?  -- 5 points
* Can you devise some heuristics to speed up the search?  You will need to write up a good explanation for why your heuristics work. -- 5 points
* Does this algorithm produce the shortest, longest, or unknown length ladders?  Allow the user to choose whether they get the shortest or longest ladder. -- 5 points


