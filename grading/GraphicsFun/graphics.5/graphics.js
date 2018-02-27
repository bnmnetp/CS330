

drawit = function(state) {
if (state) self.setInterval("drawit(false)",1);
canvas = document.getElementById('mycanvas');
ctx = canvas.getContext('2d');
ctx.clearRect(0,0,1000,1000)
ctx.save();
ctx.translate(Math.sin(Date.now()*0.001)*100 - 25, 0);
ctx.beginPath(); // begin custom shape
ctx.moveTo(170, 80);
ctx.bezierCurveTo(130, 100, 130, 150, 230, 150);
ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
ctx.closePath(); // complete custom shape

// create radial gradient
var grd = ctx.createRadialGradient(238, 50, 10, 238, 50, 200);
grd.addColorStop(0, "#8ED6FF"); // light blue
grd.addColorStop(1, "#004CB3"); // dark blue
ctx.fillStyle = grd;
ctx.fill();

// add stroke
ctx.lineWidth = 5;
ctx.strokeStyle = "#0000ff";
ctx.stroke();
ctx.restore();
	
}



