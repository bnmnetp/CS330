writeSomething = function(){ 
    canvas = document.getElementById("myCanvas")
    ctx = canvas.getContext("2d")
    var a = Math.floor(Math.random()*1500)
    var b = Math.floor(Math.random()*400)
    var c = Math.floor(Math.random()*100)
    var userText = document.getElementById("toWrite").value
    
    ctx.font = c + 'px sans-serif';
    var color = '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);

    ctx.fillStyle = color;
 
    ctx.fillText(userText,a,b);
     
}

getPath = function(){
	var Image = document.getElementById("rImage").value
	image(Image);
}

image = function(path){
	canvas = document.getElementById("myCanvas")
    ctx = canvas.getContext("2d")
	ctx.strokeStyle = 'black';
	myImage = new Image();
	myImage.src = path;
	ctx.drawImage(myImage,375,0);
	
	}
	
luther = function(path){
	canvas = document.getElementById("myCanvas")
    ctx = canvas.getContext("2d")
	var x = Math.floor(Math.random()*1500)
    var y = Math.floor(Math.random()*400)
	myImage = new Image();
	myImage.src = "Luther.png";
	ctx.drawImage(myImage,x,y);
	}
	
newCanvas = function(){
	canvas = document.getElementById("myCanvas")
    ctx = canvas.getContext("2d")
	myImage = new Image();
	myImage.src = "New.png";
	ctx.drawImage(myImage,0,0);
	}
	
Paint = function(){
		var draw = new Array(x,y);
		
}

rectangle = function(){
	canvas = document.getElementById("myCanvas")
    ctx = canvas.getContext("2d")
	var x = Math.floor(Math.random()*1500)
    var y = Math.floor(Math.random()*400)
	var color = '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
	ctx.strokeRect = color;
	ctx.fillRect(x,y,20,20);
}


