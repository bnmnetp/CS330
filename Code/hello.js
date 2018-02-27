function callme() {
	alert("hello world")
}

function addH1() {
	var newh1 = document.createElement('h1')
	newh1.innerHTML = "Surprise!!!"
	document.body.appendChild(newh1)
}
// this is a comment

/*
multiline comments
like this
*/
counter = 0
function increment() {
	var sp = document.getElementById('counter')
	counter = counter+1
	sp.innerHTML = counter
	sp.style.fontSize = counter
}


function lineThrough(id) {
	var li = document.getElementById(id);
	if(li && li.children[0].checked) {
		li.style.textDecoration = "line-through"
		li.setClass("done")
	} else {
		li.style.textDecoration = "none"
	}
}

function lineThroughSelf(cbox) {
	var li = cbox.parentNode;
	if (cbox.checked) {
		li.style.textDecoration = "line-through"
	} else {
		li.style.textDecoration = "none"
	}
}

window.onload = addH1
