var missiles = new Array();
var hit = 0;


Enemy = function(){
	setInterval("firing()",1)
	canvas = document.getElementById('mycanvas2');
	ctx = canvas.getContext('2d');
	
	
	
	
	createM = function(){
		ctx.fillStyle = 'red';
		ctx.beginPath();
		x=Math.sin(Date.now()*0.001)*200+250
		y=100
		ctx.arc(x,y,5,0,2*Math.PI,true);
		ctx.closePath();
		ctx.fill()
		missiles.push(new missile(x,y,Math.random(.5,1) * 5.5 - 2.75, Math.random(.5,1) * 5.5));
		
	}
	
	
	function missile(x, y, xsee, ysee) {
	
	this.x = x;
	this.y = y;
	this.xsee = xsee;
	this.ysee = ysee;
		this.move = function() {
			
			this.x += this.xsee;
			this.y += this.ysee;
			
			ctx.fillStyle = 'red';
			ctx.beginPath();
			ctx.arc(this.x, this.y, 5, 0, 2*Math.PI, true);
			
			ctx.closePath();
			ctx.fill();
		}
	}

	firing = function() {
	for(var i = 0; i < missiles.length; i++) {
			missiles[i].move();
			if (missiles[i].x > 1000 || missiles[i].x < 0){
				missiles.splice(i,1);
				}
			else if (missiles[i].y > 1000 || missiles[i].y < 0){
				missiles.splice(i,1);
				}

			if (missiles[i].x > block_x && missiles[i].x < block_x + 30 && missiles[i].y > block_y && missiles[i].y < block_y+40) {
			hit += 1;
			missiles.splice(i,1);
			if (hit == 3) {endGame('lost'); }
			}
		}
		
	time = Date.now()
	if(time%10 == 0) createM();
	
	}
}
