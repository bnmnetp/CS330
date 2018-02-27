drawit = function(){
	canvas = document.getElementById('mycanvas');
	ctx = canvas.getContext("2d");

	//console.log("drawit")
	canvas.width = canvas.width;
	ctx.beginPath();
	ctx.arc(300, 300, 300, 0, Math.PI*2, true); 
	ctx.closePath();
	ctx.clip();
	var img=document.getElementById('at');
	ctx.drawImage(img,0,0,600,600);

	//second hand
	ctx.save();
	ctx.translate(300,300);
	var now = new Date();
	var time = new Date(now.valueOf());
	//console.log(time.getUTCSeconds()+" sec");
	ctx.rotate((Math.PI/180)*((time.getUTCSeconds()/60)*360));
	ctx.lineWidth=5;
	ctx.moveTo(0,0);
	ctx.lineTo(0,-225);
	ctx.font="bold 18px Arial";
	ctx.fillStyle = "red";
	if (time.getUTCSeconds()>9){
		ctx.fillText(time.getUTCSeconds(),-10,-235,20);
	}
	else{
		ctx.fillText("0"+time.getUTCSeconds(),-10,-235,20);
	}
	ctx.stroke();
	ctx.restore();
	
	
	//hour hand
	ctx.save();
	ctx.translate(300,300);
	var hour;
	var hours;
	hour = (time.getUTCHours()%12) + 6;
	hours = hour + (time.getUTCMinutes()/60);
	if (hours>12){
		hours = hours-12;
	}
	if (hour>12){
		hour = hour-12;
	}
	//console.log(time.getUTCHours());
	//console.log(hours+" hours");
	ctx.rotate((Math.PI/180)*((hours/12)*360));
	ctx.lineWidth=5;
	ctx.moveTo(0,0);
	ctx.lineTo(0,-125);
	ctx.font="bold 18px Arial";
	ctx.fillStyle = "red";
	if(hour==0){
		ctx.fillText(12,-10,-135,20);
	}
	else{
		if (hour>9){
			//console.log(hour);
			ctx.fillText(hour,-10,-135,20);
		}
		else{
			//console.log(hour);
			ctx.fillText("0"+hour,-10,-135,20);
		}
	}
	ctx.stroke();
	ctx.restore();
	
	
	//minute hand
	ctx.save();
	ctx.translate(300,300);
	//console.log(time.getUTCMinutes()+" minutes");
	ctx.rotate((Math.PI/180)*((time.getUTCMinutes()/60)*360));
	ctx.lineWidth=5;
	ctx.moveTo(0,0);
	ctx.lineTo(0,-175);
	ctx.font="bold 18px Arial";
	ctx.fillStyle = "red";
	if (time.getUTCMinutes()>9){
		ctx.fillText(time.getUTCMinutes(),-10,-185,20);
	}
	else{
		ctx.fillText("0"+time.getUTCMinutes(),-10,-185,20);
	}
	ctx.stroke();
	ctx.restore();
	
	
	//outside tick marks
	for (var i=0;i<60;i++){
		ctx.save();
		ctx.translate(300,300);
		ctx.rotate((Math.PI/180)*((i/60)*360));
		ctx.moveTo(275,0);
		if (i%5){
			ctx.lineTo(285,0);
		}
		else{
			//ctx.lineTo(265,0);
			ctx.fillRect(275,-5,20,10);
		}
		ctx.stroke();
		ctx.restore();
	}

}

start = function(){
	var int = self.setInterval("drawit()",1000);
}

