# TODO the Old School Way

* We will use a look similar to the todo SPA we started with, but all of the storage will be "server side"
* When the page is created and first displayed all current TODO items will be presented
* We will have a form at the bottom of the page for Entering a new TODO item.  This item must be submitted and the page reconstructed on the server side.
* The todo list is also going to need to be a form, with its own submit button so that when we check something off and click the Submit button,  the checked items will be removed from the list.

To make this work, we will need to store a user's todo list on the server.  This allows them to access their todo list from any device anywhere.  A real advantage over the localStorage approach where the todo list resides is stuck in a single browser.

Storage is of course key.  We will start with a really simple file based approach and build up to a full blown database implementation.

Ideally, a single server should be able to manage and store the todo list for more than one person.  With a database managing that concurrency is easy.  With a file its pretty risky, so we will start with the assumption that our server will serve just one user.  When we make the move to the database we will relax that assumption.



