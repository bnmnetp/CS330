
var context;
var dx= 8;
var dy=8;
var y=150;
var x=10;
function draw(){
    context= myCanvas.getContext('2d');
    context.clearRect(0,0,400,400);
    context.beginPath();
    context.fillStyle="#0000ff";
    context.arc(x,y,20,0,Math.PI*2,true);
    context.closePath();
    context.fill();
    if( x<0 || x>400)
    dx=-dx;
    if( y<0 || y>400)
    dy=-dy;
    x+=dx;
    y+=dy;
    }
setInterval(draw,10); 

