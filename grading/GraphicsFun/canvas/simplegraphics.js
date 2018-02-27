var color = "#00FF1E";

function drawit(){
	
	//Create Canvas
	canvas = document.getElementById('canvas');
	myC = canvas.getContext("2d");

	//Initial Circle
	myC.clearRect(0,0,600,600);
	myC.strokeStyle = color;
	myC.lineWidth = 1;
	myC.beginPath();
	myC.arc(300, 300, 300, 0, Math.PI*2, true); 
	myC.closePath();
	myC.clip();

	//Outside Marks
	for (var i=0;i<60;i++){
		myC.save();
		myC.translate(300,300);
		myC.rotate((Math.PI/180)*((i/60)*360));
		myC.moveTo(300,0);
		if (i%5) myC.lineTo(285,0);
		else{
			myC.fillStyle = color;
			myC.fillRect(250,-5, 50,10);
		}
		myC.stroke();
		myC.restore();
	}

	//Seconds
	myC.save();
	myC.translate(300,300);
	var now = new Date();
	var time = new Date(now.valueOf());
	myC.rotate((Math.PI/180)*((time.getUTCSeconds()/60)*360));
	myC.moveTo(0,0);
	myC.lineTo(0,-255);
    myC.lineWidth = 5;
	myC.stroke();
	myC.restore();
	
	//Minutes
	myC.save();
	myC.translate(300,300);
	myC.rotate((Math.PI/180)*((time.getUTCMinutes()/60)*360));
	myC.moveTo(0,0);
	myC.lineTo(0,-195);
    myC.lineWidth = 7;
	myC.stroke();
	myC.restore();
	
	//Hours
	myC.save();
	myC.translate(300,300);
	var hour;
	var hours;
	hour = (time.getUTCHours()%12) + 6;
	hours = hour + (time.getUTCMinutes()/60);
	if (hours>12) hours = hours-12;
	myC.rotate((Math.PI/180)*((hours/12)*360));
	myC.moveTo(0,0);
	myC.lineTo(0,-155);
 	myC.lineWidth = 8;
	myC.stroke();
	myC.restore();
	
	//Hands Circle
	myC.save();
	myC.beginPath();
	myC.arc(300, 300, 20, 0, Math.PI*2, true); 
	myC.fill();
	myC.closePath();
	myC.clip();
	myC.restore();
	
}

function randomColor(){
	color = "#" + Math.floor(Math.random()*1000000).toString();
	//alert(color);
}

function start(){
	var int = self.setInterval("drawit()",1000);
}
