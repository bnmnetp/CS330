// complete list of style attributes:  http://www.w3schools.com/jsref/dom_obj_style.asp


function lineThrough(id) {
	var li = document.getElementById(id);
	if (li) {
		li.style.textDecoration = "line-through" // notice the subtle difference between this and css
	}
}


lineThrough = function(id) {
	var li = document.getElementById(id);
	if (li && li.children[0].checked) {
		li.style.textDecoration = "line-through"
	} else {
		li.style.textDecoration = "none"		
	}
}


lineThroughSelf = function(cbox) {
	var li = cbox.parentNode;
	if (cbox.checked) {
		li.style.textDecoration = "line-through"  
	} else {
		li.style.textDecoration = "none"
	}
}

counter = 0;   // create a global variable!
function increment() {
	var sp = document.getElementById('counter');
	counter = counter + 1;
	sp.innerHTML = counter; // notice automatic string conversion...
	sp.style.fontSize = counter + "pt";
}


checkForm = function() {
	var cboxes = document.forms.todoform.elements.complete;
	var oneChecked = false;
	for (var i = 0; i < cboxes.length; i++) {
		if (cboxes[i].checked) oneCheced = true;
	}
	if (! oneChecked ) {
		alert('No Tasks were marked as done!')
	}
	return oneChecked;
}

//How about adding a list element
function addLi(id) {
	var parent = document.getElementById(id);
	var newli = document.createElement('li');
	newli.innerHTML = "this is a test";
	parent.appendChild(newli);
}

function addH1() {
	var newh1 = document.createElement('h1');
	newh1.innerHTML = "Surprise!!!";
	document.body.appendChild(newh1);
}

window.onload = addH1;

// probably wait on this
MyStuff = function () {
	self.count = 0;
	self.brad = 11;
	return self;
}();