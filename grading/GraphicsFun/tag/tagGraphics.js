var attackX = 150
var attackY = 0

var defendX = -150
var defendY = 0

var blockNum = 0
var blockAvailable = true
var blockList = Array()
var blueWins = false
var releaseBlock = false

var timer = setInterval("availableBlock()",10000)
blink = 0

availableBlock = function(){

	//console.log(blink)
	//console.log(blink%2==0)
	//draw()
	/*if (blockAvailable && blink%2 == 0){
		//console.log("tick")
		ctx.fillStyle = "green"
		ctx.fillRect(285,285,10,10)
	}a
	if (blockAvailable && blink%2==1){w
		ctx.fillStyle = "white"
		ctx.fillRect(285,285,10,10)
	}
	blink = blink + 1*/
	console.log("tick")

	blockAvailable = !blockAvailable
}

TagBlock = function(x,y){
	this.elemX = x
	this.elemY = y
}

TagBlock.prototype.getX = function(){
	return this.elemX
}

TagBlock.prototype.getY = function(){
	return this.elemY
}

TagBlock.prototype.draw = function(cxt){
	cxt.fillStyle = "green"
	cxt.fillRect(this.elemX,this.elemY,10,10)
}

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function blockDown(x,y){
	var tBlock = new TagBlock(x,y)
	console.log(tBlock.getX()+" : "+tBlock.getY())
	blockList.push(tBlock)
	releaseBlock = false
	blockNum = blockNum -1
}

function inersect(x1,y1,x2,y2){
	intersection = false
	//console.log("red: "+attackX + " , " + attackY)
	//console.log("blue: "+defendX + " , " + defendY)
	x2 = x2-x1
	y2 = y2-y1
	if(Math.abs(0-x2)<10 && Math.abs(0-y2)<10){
		
		intersection = true
	}
	/*if(defendX - attackX <10 && defendY - attackY<10){
		intersection = true
	}*/
	return intersection
}

begin = function(){
	canvas = document.getElementById("mycanvas")
	canvas.width = canvas.width

	//Step 2: get the Context	
	ctx = canvas.getContext("2d")
	ctx.translate(canvas.width/2,canvas.height/2)
	ctx.scale(1,-1)

	ctx.strokeStyle = "black"

	ctx.strokeRect(-(canvas.width/2),-(canvas.height/2),600,600)

	//alert(attackX + " , " + attackY)
	ctx.fillStyle = "red"
	//console.log(attackX + " , " + attackY)

	ctx.fillRect(attackX,attackY,10,10)
	
	ctx.fillStyle = "blue"
	ctx.fillRect(defendX,defendY,10,10)
	//console.log("Let the game begin")
}

draw = function(e){
	var keynum
	preventDefault(e)


	if(window.event) // IE8 and earlier
		{
			keynum = e.keyCode;
	
		}
	else if(e.which) // IE9/Firefox/Chrome/Opera/Safari
		{
			keynum = e.which;
		}
	canvas = document.getElementById("mycanvas")
	canvas.width = canvas.width

	//Step 2: get the Context	
	ctx = canvas.getContext("2d")
	canvas.widtwh = canvas.width
	ctx.translate(canvas.width/2,canvas.height/2)
	ctx.scale(1,-1)
	//ctx.clearRect(attackX,attackY,10,10)
	if(keynum == 32){
		//console.log("block Released")
		if(blockNum>0){	
			releaseBlock = true
		}
	}
	if(keynum == 37){
		if(attackX != -295){
			attackX = attackX - 5
		}
	}
	if(keynum == 39){
		if(attackX != 285){
			attackX = attackX + 5
		}
	}
	if(keynum == 38){
		if(attackY != 285){
			attackY = attackY + 5
		}
	}
	if(keynum == 40){
		if(attackY != -295){
			attackY = attackY - 5
		}
	}

	if(keynum == 87){
		if(defendY != 285){
			defendY = defendY + 5
		}
		if(releaseBlock){
			console.log("block Releasing")
			blockDown(defendX,defendY-10)
		}
	}
	if(keynum == 83){
		if(defendY != -295){
			defendY = defendY - 5
		}
		if(releaseBlock){
			blockDown(defendX,defendY+10)
		}
	}
	if(keynum == 65){
		if(defendX != -295){
			defendX = defendX - 5
		}
		if(releaseBlock){
			blockDown(defendX-10,defendY)
		}
	}
	if(keynum == 68){
		if(defendX != 285){
			defendX = defendX + 5
		}
		if(releaseBlock){
			blockDown(defendX+10,defendY)
		}
	}
	//console.log(attackY)
	ctx.strokeStyle = "black"

	ctx.strokeRect(-(canvas.width/2),-(canvas.height/2),600,600)

	//alert(attackX + " , " + attackY)
	ctx.fillStyle = "red"
	//console.log(attackX + " , " + attackY)

	ctx.fillRect(attackX,attackY,10,10)
	
	ctx.fillStyle = "blue"
	ctx.fillRect(defendX,defendY,10,10)

	if(blockAvailable){
		ctx.fillStyle = "green"
		ctx.fillRect(285,285,10,10)
	}

	for(i=0;i<blockList.length;i=i+1){
		console.log(blockList[i].getX()+" : "+blockList[i].getY())
		ctx.fillStyle = "green"
		ctx.fillRect(blockList[i].getX(),blockList[i].getY(),10,10)
		console.log(attackX+" : "+attackY)
		if(inersect(attackX,attackY,blockList[i].getX(),blockList[i].getY())){
			blueWins = true
		}
	}

	if(Math.abs(285-defendX)<10 && Math.abs(285-defendY)<10){
		blockNum = blockNum + 1
		blockAvailable = false
	}

	//console.log(intersect())
	if(inersect(attackX,attackY,defendX,defendY)){
		alert("RED WINS!")
		blockList = Array()
		attackX = 150
		attackY = 0

		defendX = -150
		defendY = 0
	}
	
	if(blueWins){
		alert("BLUE WINS!")
		blueWins = false
		blockList = Array()
		attackX = 150
		attackY = 0

		defendX = -150
		defendY = 0
	}
}
