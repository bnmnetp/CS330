var ctx;
var balls = new Array();
var mouse = {x:-100, y:-100};
var prey  = {x:Math.random()*440, y:Math.random()*440};
var circle = Math.PI * 2
var score = 0;
var high_score = 0;
var endGame = true;

function $(id) {
	return document.getElementById(id);
}

function updateStat() {
	$('score').innerHTML = score;
	$('high_score').innerHTML = high_score;
}

function Ball(x, y, xsee, ysee) {
	var dropDown = $("difficulty");
	var difficulty = dropDown.options[dropDown.selectedIndex].value;
	
	this.x = x;
	this.y = y;
	this.xsee = xsee;
	this.ysee = ysee;
		this.move = function() {
			if(this.x > 500 ) {
				this.x = 500;
				this.xsee = -this.xsee;
			} else if(this.x < 5) {
				this.x = 5;
				this.xsee = -this.xsee;
			}
			if(this.y > 500) {
				this.y = 500;
				this.ysee = -this.ysee;
			} else if(this.y < 5) {
				this.y = 5;
				this.ysee = -this.ysee;
			}
			
			this.x += this.xsee;
			this.y += this.ysee;
			ctx.beginPath();
			if (difficulty == "insane") {
				ctx.arc(this.x, this.y, 15, 0, circle, true);
			} else if (difficulty == "hard") {
				ctx.arc(this.x, this.y, 10, 0, circle, true);
			} else if (difficulty == "easy") {
				ctx.arc(this.x, this.y, 5, 0, circle, true);
			}
	
			ctx.closePath();
			ctx.fill();
		}
}

function createBall() {
	var dropDown = $("difficulty");
	var difficulty = dropDown.options[dropDown.selectedIndex].value;
	
	//A ball is created when your mouse collides with the square
	do {
		x = Math.random() * 485;//creates a ball at a random point on the canvas
		y = Math.random() * 485;
	} while(prey.x <= x + 35 && x <= prey.x + 55 && prey.y <= y + 35 && y <= prey.y + 55); 
	
	//adds the new ball to the ball array
	if (difficulty == "easy") {
		balls.push(new Ball(x, y, Math.random() * 5.5 - 3.75, Math.random() * 5.5 - 3.75));
	} else if (difficulty == "hard") {
		balls.push(new Ball(x, y, Math.random() * 5.5 - 1.75, Math.random() * 5.5 - 1.75));
	} else if (difficulty == "insane") {
		balls.push(new Ball(x, y, Math.random() * 5.5 - 1, Math.random() * 5.5 - 1));
	}
}

//initializes the canvas
function init() {
	ctx = $('canvas').getContext('2d');
	window.setInterval(clock, 20);
	var userAgent = navigator.userAgent;
 
	if (userAgent.indexOf('MSIE') >= 0) {
  	console.log("Hello, IE user. STOP USING IE6!");
	} else if (userAgent.indexOf('Firefox') >= 0) {
  	console.log("Hello, Firefox user");
	} else if (userAgent.indexOf('Chrome') >= 0) {
  	console.log("Hello, Chrome user");
	}
}

function clock() {
	var dropDown = $("difficulty");
	var difficulty = dropDown.options[dropDown.selectedIndex].value;
	ctx.clearRect(0, 0, 500, 500);
	ctx.fillStyle = "#c00";
	if (difficulty == "easy") {
		ctx.fillRect(prey.x, prey.y, 50, 50);
	} else if (difficulty == "hard") {
		ctx.fillRect(prey.x, prey.y, 35, 35);	
	} else if (difficulty == "insane") {
		ctx.fillRect(prey.x, prey.y, 20, 20);	
	}
	ctx.beginPath();
	ctx.arc(mouse.x, mouse.y, 10, 0, circle, true);
	ctx.closePath();
	ctx.fill();
	ctx.fillStyle = "#999999";
	
	for(var i = 0; i < balls.length; i++) {
		balls[i].move();
		
		//checks to see if there is a collision between the mouse and a ball
		if (difficulty == "easy") {
			if( balls[i].x <= mouse.x + 15 && mouse.x <= balls[i].x + 15 &&
				balls[i].y <= mouse.y + 15 && mouse.y <= balls[i].y + 15 &&
				((mouse.x-balls[i].x)*(mouse.x-balls[i].x) + (mouse.y-balls[i].y)*(mouse.y-balls[i].y)) <= 225) {
	
				balls = new Array();
				//checks to see if you got more balls than your high score
				if(high_score < score) {
					alert("A NEW RECORD!  " + score + "!");
					high_score = score;
				} else {
					alert("SO CLOSE! TRY AGAIN!");
				}
							
				//resets the score back to zero and updates the high score
				score = 0;
				updateStat();
			}
		} else if (difficulty == "hard") {
			if( balls[i].x <= mouse.x + 30 && mouse.x <= balls[i].x + 30 &&
				balls[i].y <= mouse.y + 30 && mouse.y <= balls[i].y + 30 &&
				((mouse.x-balls[i].x)*(mouse.x-balls[i].x) + (mouse.y-balls[i].y)*(mouse.y-balls[i].y)) <= 225) {
	
				balls = new Array();
				//checks to see if you got more balls than your high score
				if(high_score < score) {
					alert("A NEW RECORD!  " + score + "!");
					high_score = score;
				} else {
					alert("SO CLOSE! TRY AGAIN!");
				}
							
				//resets the score back to zero and updates the high score
				score = 0;
				updateStat();
			}
		} else if (difficulty == "insane") {
			if( balls[i].x <= mouse.x + 45 && mouse.x <= balls[i].x + 45 &&
				balls[i].y <= mouse.y + 45 && mouse.y <= balls[i].y + 45 &&
				((mouse.x-balls[i].x)*(mouse.x-balls[i].x) + (mouse.y-balls[i].y)*(mouse.y-balls[i].y)) <= 225) {
	
				balls = new Array();
				//checks to see if you got more balls than your high score
				if(high_score < score) {
					alert("A NEW RECORD!  " + score + "!");
					high_score = score;
				} else {
					alert("SO CLOSE! TRY AGAIN!");
				}
							
				//resets the score back to zero and updates the high score
				score = 0;
				updateStat();
			}
		}
		
	}
}

//Reverse the ball movement when you click on the canvas!
document.onclick = function() {
	if (balls.length == 0 ) {
		balls = new Array();
		if(high_score < score) {
			high_score = score;
		}
		score = 0;
		upddateStat();	
	}
	
	if (mouse.x < 500 && mouse.y < 500) {
		for(var i=0; i < balls.length; i++) {
			balls[i].xsee =- balls[i].xsee;
			balls[i].ysee =- balls[i].ysee;
		}
	}
}

document.onmousemove = function(e) {
	mouse.x = e.pageX;
	mouse.y = e.pageY;
	var dropDown = $("difficulty");
	var difficulty = dropDown.options[dropDown.selectedIndex].value;

	/*if (mouse.x < 9 || mouse.y < 9 || mouse.x > 491 || mouse.y > 491 && endGame == false) {
		balls = new Array();
		//checks to see if you got more balls than your high score
		if(high_score < score) {
			alert("A NEW RECORD!  " + score + "!");
			high_score = score;
		} else {
			alert("SO CLOSE! TRY AGAIN!");
		}				
		//resets the score back to zero and updates the high score
		score = 0;
		updateStat();
		endGame = true;
	}*///trying to make it so if you move out of the canvas you lose

	//checks for a collision of a box and the mouse
	if (difficulty == "insane") {
		if(prey.x <= mouse.x + 10 && mouse.x <= prey.x + 30 && prey.y <= mouse.y + 10 && mouse.y <= prey.y + 30) {
			//creates a new box at a new random spot on the canvas
			prey = {x:Math.random()*440, y:Math.random()*440}
			createBall();
			score+= 1;
			updateStat();
		}
	} else if (difficulty == "hard") {
		if(prey.x <= mouse.x + 10 && mouse.x <= prey.x + 45 && prey.y <= mouse.y + 10 && mouse.y <= prey.y + 45) {
			//creates a new box at a new random spot on the canvas
			prey = {x:Math.random()*440, y:Math.random()*440}
			createBall();
			score+= 1;
			updateStat();
		}
	} else if (difficulty == "easy") {
		if(prey.x <= mouse.x + 10 && mouse.x <= prey.x + 60 && prey.y <= mouse.y + 10 && mouse.y <= prey.y + 60) {
			//creates a new box at a new random spot on the canvas
			prey = {x:Math.random()*440, y:Math.random()*440}
			createBall();
			score+= 1;
			updateStat();
		}
	}
}
