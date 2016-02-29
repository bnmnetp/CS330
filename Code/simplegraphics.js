// https://developer.mozilla.org/en/Canvas_tutorial/Drawing_shapes

var boxx = 50
var boxy = 50

drawit = function() {

	canvas = document.getElementById('mycanvas')
	canvas.width = canvas.width
	ctx = canvas.getContext("2d")
	ctx.fillStyle = "#00ff22"
	boxx += 2
	boxy += 2
	ctx.fillRect(boxx,boxy,150,100)
	// ctx.beginPath();
	// ctx.moveTo(75,40);
	// ctx.bezierCurveTo(75,37,70,25,50,25);
	// ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
	// ctx.bezierCurveTo(20,80,40,102,75,120);
	// ctx.bezierCurveTo(110,102,130,80,130,62.5);
//	ctx.bezierCurveTo(130,62.5,130,25,100,25);
//	ctx.bezierCurveTo(85,25,75,37,75,40);
//	ctx.fill();
//	ctx.stroke()

}



// fillStyle
// strokeStyle
// strokeRect(x,y,width,height)
// clearRect(x,y,width,height)

// reset canvas by setting the width or height

// Paths
// moveTo
// lineTo
// arc(x,y,radius,startangle,endangle,false) -- false = clockwise
// stroke


// context.font = "bold 12px sans-serif"
// fillText("string", x, y)

// rotate
// scale
// translate

rot = 0.0
drawRotate = function() {
	canvas = document.getElementById('mycanvas')
	ctx = canvas.getContext("2d")
	if (rot != 0.0) ctx.restore();
	ctx.save()
	ctx.translate(canvas.width / 2, canvas.height / 2); // move 0,0 to center.
    ctx.scale(1, -1); // scaling like this flips the y axis the right way.
    ctx.rotate(rot)
    ctx.beginPath()
    ctx.moveTo(0,-100)
    ctx.lineTo(0,100)
    ctx.closePath()
    ctx.stroke()
    ctx.fillText("X",0,110)
    rot = rot + 0.1

}


drawAnImage = function() {
	// drawImage(im,x,y)
	// drawImage(im,x,y,scaleW,scaleH)
	//  already on the page
    var canvas = document.getElementById("e");
    var context = canvas.getContext("2d");
    var cat = document.getElementById("cat");
    context.drawImage(cat, 0, 0);
	// or can get it from the server and then draw
    var canvas = document.getElementById("e");
    var context = canvas.getContext("2d");
    var cat = new Image();
    cat.src = "images/cat.png";
    cat.onload = function() {
    context.drawImage(cat, 0, 0);
	};
}

// events
// onmousemove(evt) -- event evt.offsetX
// onmousedown(evt)
// onkeydown(evt)  -- evt.keyCode

// setInterval(func,ms)  --> intervalId
// clearInterval(intervalID)


myMouse = function(evt) {
	console.log(evt);
	canvas = document.getElementById('mycanvas')
	ctx = canvas.getContext("2d")
	ctx.beginPath()
	ctx.arc(evt.offsetX,evt.offsetY,10,0,2*3.1415)
	ctx.stroke()

}

press = function(evt) {
	console.log(evt.keyCode)
	if (evt.keyCode == 27) {
		canvas = document.getElementById('mycanvas')
		canvas.width = canvas.width
	}
}



