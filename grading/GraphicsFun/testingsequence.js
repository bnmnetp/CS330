GLaDOSvisible = true;
heightOfEye=12;

GLaDOS = function(x,y,eyeheight) {
	if ((y)>380) var basefacey = 380;
	else if ((y)<180) var basefacey = 180;
	else var basefacey = y;
	if (x>400) var basefacex = 400;
	else if (x<50) var basefacex = 50;
	else var basefacex = x;
	body(x,y,"right");
	roundRect(basefacex, basefacey, 100, 200, "4", 20, "white", true);
	roundRect(basefacex+25, basefacey+45, 45, 100, "4", 20, "black", true);
	roundRect(basefacex+25, basefacey+45, 45, 100, "2", 20, "rgba(80,80,80, 1)", false);

	if ((y+55)>445) var baseeyehousey = 445;
	else if ((y+55)<225) var baseeyehousey = 225;
	else var baseeyehousey = y+55;
	roundRect(basefacex+27.5, baseeyehousey, 40, 80, "1", 20, "rgba(70, 80, 90, 0.75)", true); //This is the grey center eyepiece
	
	if ((y+90)>480) var baseeyey = 480; //Increase to allow eye movement
	else if ((y+90)<260) var baseeyey = 260; //Increase to allow eye movement
	else var baseeyey = y+90;
	eye(basefacex+38, baseeyey, 20, eyeheight, "2", "yellow", "black", true);
}

getReady = function() {
	GLaDOS(300,300,12);
	//var clock=self.setInterval("clock()",500); //Enabling this made the image blink every half second in an earlier version of the code.  This has not been tested in the current version.
	document.onmousedown=mouseDown;
	document.onmouseup=mouseUp;
	document.onmousemove=getMouse;
}

getMouse = function(event) {
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	var mousexval = event.pageX-canvas.offsetLeft;
	var mouseyval = event.pageY-canvas.offsetTop;
	context.clearRect(0,0,600,600);
	GLaDOS(mousexval-50,mouseyval-100,heightOfEye);
}

mouseDown = function(event) {
	heightOfEye=8; //Makes GLaDOS squint whenever you click.
	getMouse(event);
}

mouseUp = function(event) {
	heightOfEye=12; //Makes GLaDOS's eye return to normal after squinting.
	getMouse(event);

}

clock = function() {
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	if (GLaDOSvisible) {
		context.clearRect(0,0,600,600);
		GLaDOSvisible = false;
	}
	else {
		GLaDOS(10,10,12);
		GLaDOSvisible = true;
	}
}



function body(x,y,rightorleft) {
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");


	//Aperture Computer Stack
	context.beginPath();
	context.moveTo(100,0);
	context.lineTo(100,50);
	context.lineTo(500,50);
	context.lineTo(500,0);
	context.fillStyle="rgb(20,20,20)"
	context.strokeStyle="rgb(20,20,20)"
	context.stroke();
	context.fill();
	context.closePath();
	
	//Right arm
	if (x<200) var baserightarmx = 200;
	else if (x>250) var baserightarmx = 250;
	else baserightarmx = x;

	if ((y-150)<100) var baserightarmy = 100;
	else if ((y-150)>200) var baserightarmy = 200;
	else baserightarmy = y-150;

	if ((x+200)>500) var baserightsecondjointx = 500;
	else if ((x+200)<350) var baserightsecondjointx = 350;
	else baserightsecondjointx = x+200;

	if ((y>380)) var finalpointy = 380+150;
	else if (y<180) var finalpointy = 180+150;
	else var finalpointy = y+150;

	if (x>400) var finalpointx = 400;
	else if (x<50) var finalpointx = 50;
	else var finalpointx = x;

	var baserightsecontjointy = baserightarmy+100;


	context.fillStyle="rgb(35,35,35)";
	context.strokeStyle="rgb(35,35,35)";
	context.beginPath();
	context.moveTo(300,50);
	context.lineTo(baserightarmx+200,baserightarmy); //first joint
	context.lineTo(baserightsecondjointx,baserightsecontjointy); //second joint
	context.lineTo(finalpointx+50,finalpointy); //Connection with GLaDOS's head
	context.lineTo(baserightsecondjointx-25, baserightsecontjointy); //Second joint
	context.lineTo(baserightarmx+175,baserightarmy) //First joint
	context.lineTo(300,50);
	context.stroke();
	context.fill();
	context.closePath();

	//Left arm
	if (x>300) var baseleftarmx = 300;
	else if (x<250) var baseleftarmx = 250;
	else baseleftarmx = x;

	if ((x-100)<100) var baseleftsecondjointx = 100;
	else if ((x-100)>250) var baseleftsecondjointx = 250;
	else baseleftsecondjointx = x-100;

	context.fillStyle="rgb(35,35,35)";
	context.strokeStyle="rgb(35,35,35)";
	context.beginPath();
	context.moveTo(300,50);
	context.lineTo(baseleftarmx-100,baserightarmy); //First joint
	context.lineTo(baseleftsecondjointx,baserightsecontjointy); //Second joint
	context.lineTo(finalpointx+50,finalpointy); //Connection with GLaDOS's head
	context.lineTo(baseleftsecondjointx+25,baserightsecontjointy); //Second Joint
	context.lineTo(baseleftarmx-75,baserightarmy); //First joint
	context.lineTo(300,50);
	context.stroke();
	context.fill();
	context.closePath();


	//Body Column
	if (y<180) var bodycolumny = 180;
	else if (y>400) var bodycolumny = 400;
	else bodycolumny = y;
	if (x>400) var bodycolumnx = 400;
	else if (x<50) var bodycolumnx = 50;
	else var bodycolumnx = x;
	
	context.fillStyle="rgb(35,35,35)";
	context.strokeStyle="rgb(35,35,35)";
	context.beginPath();
	context.moveTo(240,50);
	context.lineTo(240,100);
	context.lineTo(bodycolumnx+10,bodycolumny+100);
	context.lineTo(bodycolumnx+90,bodycolumny+100);
	context.lineTo(360,100);
	context.lineTo(360,50);
	context.stroke();
	context.fill();
	context.closePath();
	
	//The circle thing
	var basecirclex = x+50;
	if ((y+25)>400) var basecircley = 400;
	else if ((y+25)<250) var basecircley = 250;
	else var basecircley = y+25; //Sets and limits the maximum height for the GLaDOS circle.
	if (x+50>450) var basecirclex = 450;
	else if (x+50<100) var basecirclex = 100;
	else var basecirclex = x+50;
	
	var xmodifier = -(0.2*(basecirclex-300))
	context.strokeStyle="green";
	context.fillStyle = "rgb(50,50,50)";
	context.strokeStyle = "rgb(50,50,50)";
	context.beginPath();
	context.arc(basecirclex+xmodifier, basecircley, 70, 0, Math.PI*2, true); 
	context.closePath();
	context.fill();

	//The square box
	if ((y)>380) var basesquarey = 380;
	else if ((y)<210) var basesquarey = 210;
	else var basesquarey = y; //Sets and limits the maximum height for the GLaDOS square
	if (x>400) var basesquarex = 400;
	else if (x<50) var basesquarex = 50;
	else var basesquarex = x;
	context.fillStyle="rgb(32,32,32)";
	context.fillRect((basesquarex-7.5)+(0.5*xmodifier),basesquarey-7.5,115,115);
	context.beginPath();
}

function roundRect(x, y, w, h, linewidth, radius,color, fill) {
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	var r = x + w;
	var b = y + h;
	context.beginPath();
	context.strokeStyle=color;
	context.fillStyle=color;
	context.lineWidth=linewidth
	context.moveTo(x+radius, y);
	context.lineTo(r-radius, y);
	context.quadraticCurveTo(r, y, r, y+radius);
	context.lineTo(r, y+h-radius);
	context.quadraticCurveTo(r, b, r-radius, b);
	context.lineTo(x+radius, b);
	context.quadraticCurveTo(x, b, x, b-radius);
	context.lineTo(x, y+radius);
	context.quadraticCurveTo(x, y, x+radius, y);
	context.stroke();
	if (fill) context.fill();
}
function eye(x, y, w, h, linewidth, color, outline, fill) {
	var canvas = document.getElementById("myCanvas"); 
	var context = canvas.getContext("2d");
	var mx = x + w / 2;
	var my = y + h / 2;
	context.beginPath();
	context.strokeStyle=outline;
	context.fillStyle=color;   
	context.lineWidth=linewidth;   
	context.moveTo(x,my);
	context.quadraticCurveTo(x, y, mx, y);
	context.quadraticCurveTo(x+w, y, x+w, my);
	context.quadraticCurveTo(x+w, y+h, mx, y+h);
	context.quadraticCurveTo(x, y+h, x, my);      
	context.stroke();
	if (fill) context.fill();
}
