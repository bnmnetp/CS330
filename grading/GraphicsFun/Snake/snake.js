x = 80;
y = 120;
speed = 20;
bodyLength = 5
snakeBody = []
size = 20
dir = 'left'
food = [false, null, null]
time = 200

moveSnake = function(){
	if (!selfTouch()){
		myCtx.beginPath()
		myCtx.fillStyle='#FF0000';
		myCtx.fillRect(x,y,size,size);
		snakeBody.push([x,y]);
		check();
		direction(dir)
		myCtx.moveTo(x,y)
		myCtx.closePath()
		setTimeout("moveSnake()", time);
	} else {
		alert("Game Over!! Refresh to start again.")	
	}
}
selfTouch = function(){
	var bodyTouchedHead = false
	head = snakeBody[snakeBody.length - 1]
	if (snakeBody.length > 2) {
		for (var point= snakeBody.length-3; point >= 0 ; point--){
			if (touched(head, snakeBody[point])){
				bodyTouchedHead = true
			}
		}
	}
	return bodyTouchedHead;
}
touched = function(point1, point2){
	var touched = false
	if (point1[0] == point2[0] && point1[1] == point2[1]){
		touched = true
	}
	return touched
}
check = function(){
	if (snakeBody.length > bodyLength){
		myCtx.clearRect(snakeBody[0][0], snakeBody[0][1], size, size)
		snakeBody.shift()
	}
	if (!food[0]){
		var point = makeFoodItem();
		food = [true, point[0], point[1]]
		updateScore()
	} else {
		head = snakeBody[snakeBody.length - 1]
		if (head[0] == food[1] && head[1] == food[2]){
			myCtx.clearRect(food[1], food[2], size, size)
			bodyLength +=1
			time -= 5
			food[0] = false
		}
	}
}
direction = function(direct){
	if (direct == 'up'){
		if (y <= 0){ 
			y = 500
		} else { 
		y = (y - speed) % 500
		}	
	} else if (direct == 'right'){
		x = (x + speed) % 600
	} else if (direct == 'down'){
		y = (y + speed) % 500	
	} else if (direct == 'left'){
		if (x <= 0){ 
			x = 600
		} else { 
		x = (x - speed) % 600
		}	
	}
}

document.onkeydown = function(event) {
  var keyCode; 
  if(event == null) {
    keyCode = window.event.keyCode; 
  } else {
    keyCode = event.keyCode; 
  }
 
  switch(keyCode)
  {
    case 37:
      if (dir != "right"){
        dir = 'left'
      }
      break;
     
    case 38:
      if (dir != "down"){
        dir = 'up';
      }
      break; 
      
    case 39:
      if (dir != "left"){
        dir = 'right';
      }
      break; 
    
    case 40:
      if (dir != "up"){
        dir = 'down';
      }
      break; 
    
    default: 
      break; 
  } 
}
updateScore = function(){
  	var score = snakeBody.length*10
  	document.getElementById('score').innerText = score;

}
play = function(){

	myCanvas=document.getElementById('myCanvas');
	myCtx=myCanvas.getContext('2d');
	moveSnake()
}

function makeFoodItem(){
 	var point = [(Math.floor(Math.floor(Math.random()*myCanvas.width)/size))*size, Math.floor(Math.floor(Math.random()*myCanvas.height)/size)*size];
	myCtx.fillStyle = '#33FF66';
    myCtx.fillRect(point[0], point[1], size, size);
	return point
}
