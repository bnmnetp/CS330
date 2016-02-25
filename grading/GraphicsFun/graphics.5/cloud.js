Cloud = function() {
canvas = document.getElementById('mycanvas2');
ctx = canvas.getContext('2d');
//setInterval('Cloud()', 1);
//context.clearRect(0,0,1000,1000);
height = 600;
width = 600;
ctx.save();
if (dmg < 1000) ctx.translate(Math.sin(Date.now()*0.001)*200+50, 0);
else { endGame('win'); 
     }
ctx.beginPath(); // begin custom shape
ctx.moveTo(200, 80);
ctx.bezierCurveTo(100, 80, 190, 90, 200, 100);
ctx.bezierCurveTo(200, 120, 270, 120, 270, 100);
ctx.bezierCurveTo(260, 90, 370, 90, 270, 80);
ctx.bezierCurveTo(280, 55, 200, 50, 200, 80);
ctx.closePath(); // complete custom shape

// create radial gradient
var grd = ctx.createRadialGradient(238, 50, 10, 238, 50, 200);
grd.addColorStop(0, "#996600"); // light blue
grd.addColorStop(1, "#CC6600"); // dark blue
ctx.fillStyle = "rgba(0,255,0,1)";
ctx.fill();


ctx.restore();
}


endGame = function(game) {

	if (game == 'lost') {
	alert('You lose!');
	}
	else if (game == 'win') {
	alert('You win!');
	}

	hit = 0;
	dmg = 0;
	window.location.reload();

}
