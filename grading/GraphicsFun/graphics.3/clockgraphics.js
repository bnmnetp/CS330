startclock = function() {
    
     canvas = document.getElementById('mycanvas')
     ctx = canvas.getContext("2d")
     create()
     setInterval(create,1000)  

}

create = function() {
     now = new Date() 

     ctx.save()
     ctx.clearRect(0,0,400,400)
     ctx.translate(200,200)
     ctx.scale(0.9,0.9)
     ctx.strokeStyle = "#04B4AE"
     ctx.fillStyle = "pink"
     ctx.lineWidth = 8
     ctx.lineCap = "round"
     ctx.save()
 
     //hour marks
     for(i=1;i<=60;i++) {
        ang = Math.PI/30*i
        sang=Math.sin(ang)
        cang=Math.cos(ang)
        if (i % 5 == 0) {
           ctx.fillStyle = "#2E9AFE"
           ctx.lineWidth=8;
           sx=sang*95;
           sy=cang*-95;
           ex=sang*120;
           ey=cang*-120;
           nx=sang*80;
           ny=cang*-80;
           ctx.fillText(i/5,nx,ny);
       } else {
           ctx.lineWidth=2;
           sx=sang*110;
           sy=cang*110;
           ex=sang*120;
           ey=cang*120;
       }
           ctx.beginPath();
           ctx.moveTo(sx,sy);
           ctx.lineTo(ex,ey);
           ctx.stroke();
     }
     ctx.restore()

     seconds = now.getSeconds()
     minutes = now.getMinutes()
     hours = now.getHours()
   
     // HOURS
     ctx.strokeStyle = "#BFFF00"
     ctx.save()
     ctx.rotate(Math.PI/6*(hours+(minutes/60)+(seconds/3600)))  
     ctx.lineWidth = 14;  
     ctx.beginPath();  
     ctx.moveTo(0,10);  
     ctx.lineTo(0,-60);  
     ctx.stroke(); 
     ctx.restore();

    //MINUTES
     ctx.strokeStyle = "#FF8000"
     ctx.save();  
     ctx.rotate(Math.PI/30*(minutes+(seconds/60)))  
     ctx.lineWidth = 10;  
     ctx.beginPath();  
     ctx.moveTo(0,20);  
     ctx.lineTo(0,-110);  
     ctx.stroke();  
     ctx.restore();


     //SECONDS
     ctx.save()
     ctx.rotate(seconds * Math.PI/30)
     ctx.strokeStyle = "#FE2E64"
     ctx.fillStyle = "#D40000"
     ctx.lineWidth = 6
     ctx.beginPath()
     ctx.moveTo(0,20)
     ctx.lineTo(0,-110)
     ctx.stroke()
     ctx.beginPath()
     ctx.fill()
     ctx.beginPath()
     ctx.stroke()
     ctx.fillStyle = "#FFFF00"
     ctx.arc(0,0,10,0,Math.PI*2,true);
     ctx.fill()
     ctx.restore()
     
     //the center circle
     ctx.beginPath()
     ctx.lineWidth = 18
     ctx.strokeStyle = '#4B088A'
     ctx.arc(0,0,148,0,Math.PI*2,true)
     ctx.stroke()
    
     ctx.restore()

     imageObj = new Image()
     imageObj.onload = function() {
         ctx.drawImage(imageObj,400,125,250,250)  
     }
     imageObj.src = 'angry.jpg'
   
     // adds the tallking bubble
     ctx.beginPath()  
     ctx.moveTo(550,35) 
     ctx.bezierCurveTo(510, 55, 510 ,105 ,610, 105)
     ctx.bezierCurveTo(630,135, 700, 135, 725, 105)
     ctx.bezierCurveTo(800,105, 800, 75, 770,55)
     ctx.bezierCurveTo(810, -5,200,-15, 550,35)
     ctx.stroke()
     ctx.closePath()
     ctx.restore()
   
     ctx.save()
     //adds the text in the bubble
     ctx.font = "15px Arial"
     ctx.fillStyle = '#D00000'
     ctx.fillText("Look at the clock to get the time!",550,60)
     ctx.fillText("Is it AM or PM?", 585,75)


     ampm = "AM"
     //am or pm
     if (hours >= 12) ampm = "PM"
     ctx.font = "25px Arial"
     ctx.fillText(ampm,615,102)
     ctx.restore()

     ctx.strokeRect(0,0,canvas.width,canvas.height)
    
    
}


     
     




