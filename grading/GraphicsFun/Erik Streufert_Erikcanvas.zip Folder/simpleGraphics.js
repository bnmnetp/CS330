draw = function()  {
    canvas = document.getElementById('mycanvas')
    size = document.getElementById('square').value
    ctx = canvas.getContext("2d")
    ctx.fillStyle = 'black'
    rect = {}
    canvas.addEventListener('mousedown',simplerect,false)   
    function simplerect(e)  {
       rect.startX = e.pageX - this.offsetLeft
       rect.startY= e.pageY - this.offsetTop       
       ctx.fillStyle = 'blue'
       ctx.fillRect(rect.startX,rect.startY,size,size)
       canvas.removeEventListener('mousedown',simplerect,false)
    }
}

drawimg = function()  {
    var img= new Image();
    img.src="Stickman.jpg";
    canvas = document.getElementById('mycanvas')
    ctx = canvas.getContext('2d')
    ctx.drawImage(img,0,0);
    
}
drawarc = function()  {
    var canvas = document.getElementById('mycanvas')
    var ctx = canvas.getContext('2d')

    ctx.beginPath()
    var rn = Math.floor(Math.random()*700)
    var rn2 = Math.floor(Math.random()*400)
    var rn3 = Math.floor(Math.random()*150)
    var x          = 50 + rn         // x coordinate
    var y          = 50 + rn2          // y coordinate
    var radius     = rn3                    // Arc radius
    var startAngle = 0  + rn3                  // Starting point on circle
    var endAngle   = Math.PI               // End point on circle
    var clockwise  = true                  // clockwise or anticlockwise
    
    ctx.arc(x,y,radius,startAngle,endAngle, clockwise);
    var rn = Math.floor(Math.random()*50)
    if (rn> 20){
      ctx.fill();
    } 
    else {
      ctx.stroke();
    }

}
clearimg = function()  {
    canvas = document.getElementById('mycanvas')
    ctx = canvas.getContext('2d')
    canvas.width = canvas.width
}

drawBowTie = function() {
    canvas = document.getElementById('mycanvas')
    ctx = canvas.getContext('2d')
    ctx.fillStyle = 'white'
    ctx.fillRect(-50,-50,100,100)
    
    var rn = Math.floor(Math.random()*50) 
     if(rn<10)  {
       var color = "red"
     }
     if(rn>=10 && rn<20)  {
       var color = "blue"
     }
     if(rn>=20 && rn<30)  {
       var color = "green"
     }
     if(rn>=30 && rn<40)  {
       var color = "yellow"
     }
     if(rn>=40 && rn<50)  {
       var color = "purple"
     }

     ctx.rotate(Math.PI/4)   


  
   ctx.fillStyle = color
   ctx.globalAlpha = 1.0 
   ctx.beginPath()
   ctx.moveTo(25, 25)
   ctx.lineTo(-25, -25)
   ctx.lineTo(25, -25)
   ctx.lineTo(-25, 25) 
   ctx.closePath() 
   ctx.fill()
   dot(ctx)
 }  
   
 function dot(ctx) {  
   ctx.save()
   ctx.fillStyle = "black"
   ctx.fillRect(-2, -2, 4, 4)
   ctx.restore()  
}  
   
drawbowtie = function() {  
   var canvas = document.getElementById("mycanvas")
   var ctx = canvas.getContext("2d")
   canvas.width = canvas.width
   ctx.translate(400,250)
   ctx.save()
   
   clearid = setInterval("drawBowTie()",500)
   dot(ctx)
        
}
setclear = function()  {
   var canvas = document.getElementById("mycanvas")
   var ctx = canvas.getContext("2d")
   clearInterval(clearid)
   canvas.width = canvas.width
}
textbubble = function()  {
   var canvas = document.getElementById("mycanvas")
   canvas.addEventListener('mousedown',mouseText,false)
   var text = document.getElementById("text").value
   var ctx = canvas.getContext("2d")
   ctx.fillStyle = 'black'
   bubble = {}
   function mouseText(e)  {
       bubble.startX = e.pageX - this.offsetLeft
       bubble.startY= e.pageY - this.offsetTop
   
   ctx.beginPath()
   ctx.moveTo(bubble.startX + 75,bubble.startY + 25)  // 75,25
   ctx.quadraticCurveTo(bubble.startX + 25,bubble.startY + 25,bubble.startX + 25,bubble.startY + 62.5)
   ctx.quadraticCurveTo(bubble.startX + 25,bubble.startY + 100,bubble.startX + 50,bubble.startY + 100)  
   ctx.quadraticCurveTo(bubble.startX + 50,bubble.startY + 120,bubble.startX + 30,bubble.startY + 125)  
   ctx.quadraticCurveTo(bubble.startX + 60,bubble.startY + 120,bubble.startX + 65,bubble.startY + 100)  
   ctx.quadraticCurveTo(bubble.startX + 125,bubble.startY + 100,bubble.startX + 125,bubble.startY + 62.5)  
   ctx.quadraticCurveTo(bubble.startX + 125,bubble.startY + 25,bubble.startX + 75,bubble.startY + 25)
   ctx.stroke()
   ctx.font = "8pt Arial"
   ctx.fillText(text, bubble.startX + 35, bubble.startY + 50)
   canvas.removeEventListener('mousedown',mouseText,false)
   }
}
