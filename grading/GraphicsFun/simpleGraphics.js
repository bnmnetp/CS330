window.onload = function(){ //init function
	canvas = document.getElementById('mycanvas');
	ctx = canvas.getContext('2d');
	canvas2 = document.getElementById('mycanvas2');
	ctx2 = canvas2.getContext('2d');
}

clearPath = function(){ //function for Clear Path button
	ctx2.closePath();
	ctx2.clearRect(0,0,600,600); 
}

followToggle = function(){ //function for Enable Follow checkbox
		check = document.getElementById("followCheck");
		if (check.checked){
			followChecked = true;
		}
		else{
			followChecked = false;
		}
}

drawPathToggle = function(){ //function for Draw Path checkbox
		check = document.getElementById("pathCheck");
		if (check.checked){
			drawPath = true;
		}
		else{
			drawPath = false;
		}
}

over = function(){ //called on mouseover
	inWindow = true;
	if(started && launch==false){
		window.setTimeout("tick()", 10);
	}
}

out = function(){ //called on mouseout
	inWindow = false;
	dragging = false;
	ctx.clearRect(0,0,600,600); 
	if(started){
		drawCircle(circleX,circleY);
	}
	window.clearTimeout(timer)
}

fire = function(){ //handles launching the circle and bounching off walls
	console.log('fire');
	if((circleX-50 < 0 || circleX+50 > 600 || circleY-50 < 0 || circleY+50 > 600) && launchStop == true){
		oldX = circleX;
		oldY = circleY;
		if(circleX-50<0||circleX+50>600){
			if(staticLastXDir == "+"){
				staticLastXDir = "-"
			}
			else if(staticLastXDir == "-"){
				staticLastXDir = "+"
			}
		}
		if(circleY-50<0||circleY+50>600){
			if(staticLastYDir == "+"){
				staticLastYDir = "-"
			}
			else if(staticLastYDir == "-"){
				staticLastYDir = "+"
			}
		}
		ctx.clearRect(circleX-60, circleY-60, 125, 125);
		if(staticLastXDir == '+'){
			circleX -= (xMod * speedM*launchM);
		}
		else if(staticLastXDir == '-'){
			circleX += (xMod * speedM*launchM);
		}
		else{
			circleX += 0;
		}

		if(staticLastYDir == '+'){
			circleY -= (yMod * speedM*launchM);
		}
		else if(staticLastYDir == '-'){
			circleY += (yMod * speedM*launchM);
		}
		else{
			circleY += 0;
		}
		if(drawPath){
			ctx2.beginPath()
			ctx2.fillStyle   = 'black';
			ctx2.strokeStyle = 'black';
			ctx2.lineWidth   = 4;
			ctx2.moveTo(oldX,oldY);
			ctx2.lineTo(circleX,circleY);
			ctx2.stroke();
			ctx2.closePath();
		}
		drawCircle(circleX,circleY);
		launchTimer = window.setTimeout("fire()", 10);
		launchStop = false;
	}
	else{
		launchM = launchM - .05;
		if(launchM > 0){
			ctx.clearRect(circleX-60, circleY-60, 125, 125);
			oldX = circleX;
			oldY = circleY;
			if(staticLastXDir == '+'){
				circleX -= (xMod * speedM*launchM);
			}
			else if(staticLastXDir == '-'){
				circleX += (xMod * speedM*launchM);
			}
			else{
				circleX += 0;
			}

			if(staticLastYDir == '+'){
				circleY -= (yMod * speedM*launchM);
			}
			else if(staticLastYDir == '-'){
				circleY += (yMod * speedM*launchM);
			}
			else{
				circleY += 0;
			}
			if(drawPath){
				ctx2.beginPath()
				ctx2.fillStyle   = 'black';
				ctx2.strokeStyle = 'black';
				ctx2.lineWidth   = 4;
				ctx2.moveTo(oldX,oldY);
				ctx2.lineTo(circleX,circleY);
				ctx2.stroke();
				ctx2.closePath();
			}
			drawCircle(circleX,circleY);
			launchStop = true;
			launchTimer = window.setTimeout("fire()", 10);
		}
		else{
			launchStop = true;
			window.clearTimeout(launchTimer)
			console.log('done');
			
			if (lastKnownX>circleX){
				lastXDir = "+";
			}
			else if (lastKnownX<circleX){
				lastXDir = "-";
			}
			else{
				lastXDir = "0";
			}
			
			if (lastKnownY>circleY){
				lastYDir = "+";
			}
			else if (lastKnownY<circleY){
				lastYDir = "-";
			}
			else{
				lastYDir = "0";
			}
			
			launch = false;
			launchM = 20;
			if(inWindow){
				timer = window.setTimeout("tick()", 10);
			}
		}
	}
}

tick = function() { //handles the follow funtion, also prevents the circle from leaving the canvas
	if (inWindow && started && followChecked && dragging==false){
		xDist = Math.abs(circleX -  lastKnownX);
		yDist = Math.abs(circleY -  lastKnownY);
		oldX = circleX;
		oldY = circleY;
		// console.log('M '+lastKnownX+','+lastKnownY);
		// console.log('C '+circleX+','+circleY);
		// console.log('XDir ' + lastXDir);
		// console.log('YDir ' + lastYDir);
		if(xDist>=1 || yDist>=1){
			if(xDist<1){
				lastXDir='0';
			}
			if(yDist<1){
				lastYDir='0';
			}
			if (xDist > yDist){
				xMod = 1;
				yMod = yDist/xDist;
			}
			else if (yDist > xDist){
				yMod = 1;
				xMod = xDist/yDist;
			}
			else{
				xMod = 1;
				yMod = 1;
			}
			
			if(lastXDir == '+'){
				temp = circleX + (xMod * speedM * moveM);
				if(temp+50<600 && temp-50>0){
					circleX = temp;
				}
			}
			else if(lastXDir == '-'){
				temp = circleX - (xMod * speedM * moveM);
				if(temp+50<600 && temp-50>0){
					circleX = temp;
				}
			}
			else{
				circleX += 0;
			}

			if(lastYDir == '+'){
				temp = circleY + (yMod * speedM * moveM);
				if(temp+50<600 && temp-50>0){
					circleY = temp;
				}
			}
			else if(lastYDir == '-'){
				temp = circleY - (yMod * speedM * moveM);
				if(temp+50<600 && temp-50>0){
					circleY = temp;
				}
			}
			else{
				circleY += 0;
			}
			ctx.clearRect(circleX-60, circleY-60, 125, 125);
			drawCircle(circleX,circleY);
			if(drawPath){
				ctx2.beginPath()
				ctx2.fillStyle   = 'black';
				ctx2.strokeStyle = 'black';
				ctx2.lineWidth   = 4;
				ctx2.moveTo(oldX,oldY);
				ctx2.lineTo(circleX,circleY);
				ctx2.stroke();
				ctx2.closePath();
			}
		}
	}
	timer = window.setTimeout("tick()", 10);
}

mouseup = function(){ //caleed on release of mouse button
	if(dragging == true){
		dragging = false;
		distX = Math.abs(lineX-circleX);
		distY = Math.abs(lineY-circleY);
		if(distY>distX){
			yMod = 1;
			xMod = distX/distY;
		}
		else if(distY<distX){
			yMod = distY/distX;
			xMod = 1;
		}
		else{
			yMod = 1;
			xMod = 1;
		}
		launchM = (Math.sqrt((distY*distY)+(distX*distX)))/10;
		if(lastXDir == "+"){
			staticLastXDir = "+";
		}
		else if(lastXDir == "-"){
			staticLastXDir = "-";
		}
		else{
			staticLastXDir = "0";
		}
		if(lastYDir == "+"){
			staticLastYDir = "+";
		}
		else if(lastYDir == "-"){
			staticLastYDir = "-";
		}
		else{
			staticLastYDir = "0";
		}
		launch = true;
		launchTimer = window.setTimeout("fire()", 10);
		window.clearTimeout(timer)
	}
	ctx.clearRect(0,0,600,600); 
	if(started){
		drawCircle(circleX,circleY);
	}
}

myMouse = function(event){ //called on mousedown
	x = event.layerX;
	y = event.layerY;
	lastKnownX = x;
	lastKnownY = y;
	
	if(launch == false){
		var imageData = ctx.getImageData(x, y, 1, 1);
		if (imageData.data[3] > 0){
			dragging = true;
		}
		if (x+50<600 && x-50>0 && y+50<600 && y-50>0){
			ctx.clearRect(circleX-55, circleY-55, 110, 110); 
			circleX = x;
			circleY = y;
			drawCircle(x,y);
			if (started){

			}
			else{
				timer = window.setTimeout("tick()", 10);
			}
			started = true;
		}
		else{
			console.log('mouseClick out of range');
			if(draggin==false){
				alert("The mouseclick is out of range");
			}
		}
	}
}

drawCircle = function(x,y){ //draw the circle
	ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.stroke();
}

follow = function(event){ //called on mousemove
	console.log('moved');
	if (dragging){
		x = event.layerX;
		y = event.layerY;		
		lastKnownX = x;
		lastKnownY = y;
		ctx.clearRect(0,0,600,600); 
		drawCircle(circleX,circleY);
		ctx.beginPath()
		ctx.fillStyle   = 'red';
		ctx.strokeStyle = 'red';
		ctx.lineWidth   = 4;
		lineX = x;
		lineY = y;
		ctx.moveTo(x,y);
		ctx.lineTo(circleX,circleY);
		ctx.stroke();
		ctx.closePath()
	}
	if (started){
		x = event.layerX;
		y = event.layerY;		
		lastKnownX = x;
		lastKnownY = y;

		if (x>circleX){
			lastXDir = "+";
		}
		else if (x<circleX){
			lastXDir = "-";
		}
		else{
			lastXDir = "0";
		}
		
		if (y>circleY){
			lastYDir = "+";
		}
		else if (y<circleY){
			lastYDir = "-";
		}
		else{
			lastYDir = "0";
		}
	}
	console.log(lastXDir+","+lastYDir);
}

lastKnownX = 0; //Keeps track of last mouse position
lastKnownY = 0;
circleX = 0; //Keeps track of circle position (center)
circleY = 0;
yMod = 1; //Distance to move the circle on each function call
xMod = 1;
speedM = 1; //Allows the follow speed to be easily modified
staticLastXDir = "" //Used for launching the circle while still tracking the mouse position
staticLastYDir = ""
lastXDir = "" //Last postion of the mouse (left or right of circle)
lastYDir = "" //Last postion of the mouse (above or below of circle)
moveM = 2; //Additional modifier for follow speed
var launchTimer; //keeps track of the timer for launching the circle
launchStop = true; //Allows the circle to bounce off walls
launch = false; //keeps track of if we are currently in launch mode
launchM = 20; //Speed multiplier for launch, also set by line distance
started = false; //true if the circle is shown, false otherwise
inWindow = false; //is the mouse in the window
followChecked = false; //is the follow checkbox checked
dragging = false; //are we dragging nad making a line by clicking on the circle
var canvas; //canvas1 (main)
var ctx; //canvas1 context
var radius = 50; //circle radius
var timer; //follow function timer
var drawPath = false; //is the draw path button checked?
var canvas2; //canvas2 (path)
var ctx2; //canvas2 context
var HEIGHT = 600;  //canvas height
var WIDTH = 600;  //canvas width
