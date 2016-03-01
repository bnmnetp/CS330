// complete list of style attributes:  http://www.w3schools.com/jsref/dom_obj_style.asp

counter = 0
function increment() {
	var sp = document.getElementById('counter')
	counter = counter + 1
	sp.innerHTML = counter
	sp.style.fontSize = counter + "pt"
}

lineThrough = function(id) {
	var li = document.getElementById(id)
	if (li && li.children[0].checked) {
		li.style.textDecoration = "line-through"
	} else {
		li.style.textDecoration = "none"
	}
}

lineThroughSelf = function(cb) {
	var li = cb.parentNode
	if (cb.checked) {
		li.style.textDecoration = "line-through"
	} else {
		li.style.textDecoration = "none"
	}
}


addH1 = function() {
	var newh1 = document.createElement('h1')
	newh1.innerHTML = 'Surprise!!!'
	document.body.appendChild(newh1)
}


window.onload = addH1











