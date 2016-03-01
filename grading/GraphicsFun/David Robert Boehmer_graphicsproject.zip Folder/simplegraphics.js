drawfield=function() {
  canvas = document.getElementById('mycanvas');
  ctx = canvas.getContext('2d');
  ctx.save();
  
  ctx.fillStyle = 'green';
  ctx.fillRect(100,100,450,200);
  ctx.strokeRect(100,100,450,200);
  
  ctx.fillStyle = 'blue';
  ctx.fillRect(100,100,70,200);
  
  ctx.fillStyle = 'black';
  ctx.fillRect(480,100,70,200);
  ctx.fill();
  ctx.stroke();
  
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(110,175);
  ctx.bezierCurveTo(120, 175, 130, 171, 132, 158);
  ctx.arc(132,142,16,1.570795,4.712385,true);
  ctx.bezierCurveTo(130,113,120,109,110,109);
  ctx.bezierCurveTo(112,111,118,115,122,126);
  ctx.bezierCurveTo(110,136,110,148,122,158);
  ctx.bezierCurveTo(118,169,112,173,110,175);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.translate(115,291);
  ctx.rotate(- Math.PI/2);
  ctx.fillStyle = 'white';
  ctx.font = 'bold 28px sans-serif';
  ctx.textBaseline = 'top';
  ctx.fillText('Luther',0,0);
  ctx.stroke();
  ctx.fill();
  ctx.restore();
  ctx.save();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.moveTo(200,197);
  ctx.lineTo(200,203);
  ctx.moveTo(450,197);
  ctx.lineTo(450,203);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.translate(537,127);
  ctx.rotate(Math.PI/2);
  ctx.fillStyle = 'yellow';
  ctx.font = 'bold 55px sans-serif';
  ctx.textBaseline = 'top';
  ctx.fillText('Iowa',0,0);
  ctx.stroke();
  ctx.fill();
  ctx.restore();
  ctx.closePath();
}

makedraggable = function(){
   var canvas;
   var ctx;
   var x = 75;
   var y = 50;
   var WIDTH = 600;
   var HEIGHT = 600;
   var dragok1 = false;
   var dragok2 = false;
   var dragok3 = false;
   var dragok4 = false;
   var dragok5 = false;
   var dragok6 = false;
   var dragok7 = false;
   var a = 95;
   var b = 50;
   var c = 115;
   var d = 50;
   var z = 135;
   var f = 50;
   var g = 155;
   var h = 50;
   var i = 175;
   var j = 50;
   var k = 195;
   var l = 50;
   var m = 325;
   var n = 270;
   var o = 325;
   var p = 290;
   var forward = true;

   function rect1(x,y,w,h) {
      ctx.strokeStyle = 'white';
      ctx.beginPath();
      ctx.strokeRect(x,y,w,h);
      ctx.closePath();
   }

   function rect2(x,y,w,h)  {
      ctx.beginPath();
      ctx.fillStyle = 'purple';
      ctx.fillRect(x,y,w,h);
      ctx.closePath();
      ctx.fill();
   }

   function rect3(x,y,w,h)  {
      ctx.beginPath();
      ctx.fillStyle = 'red';
      ctx.fillRect(x,y,w,h);
      ctx.closePath();
      ctx.fill();
   }

   function circle(x,y,r,a1,a2,bool)  {
      ctx.beginPath();
      ctx.fillStyle= 'pink';
      ctx.arc(x,y,r,a1,a2,bool)
      ctx.fill();
      ctx.closePath();
   }
   
   function clear() {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
   }

   function init() {
      canvas = document.getElementById("mycanvas");
      ctx = canvas.getContext("2d");
      return setInterval(draw, 100);
   }

   function draw() {
      clear();
      drawfield();
      if (forward){
         m = m+3;
         o = o+3;
      }
      else{
         m = m-3;
         o = o-3;
      } 
      if(m > 550){
         forward = false;
      }
      if(m<100){ 
         forward = true;
      }
      rect1(0,0,WIDTH,HEIGHT);
      rect2(x - 5, y - 5, 10, 10);
      rect2(a - 5, b - 5, 10,10);
      rect2(c - 5, d - 5, 10,10);
      rect2(m - 5, n -5, 10,10);
      rect3(z - 5, f - 5, 10, 10);
      rect3(g - 5, h - 5, 10,10);
      rect3(i - 5, j - 5, 10,10);
      rect3(o - 5, p - 5, 10,10);
      circle(k,l,4,0,Math.PI*2,true);
   }

   function myMove(e){
      if (dragok1){
         x = e.pageX - canvas.offsetLeft;
         y = e.pageY - canvas.offsetTop;
      }
      if (dragok2){
         a = e.pageX - canvas.offsetLeft;
         b = e.pageY - canvas.offsetTop;
      }
      if (dragok3){
         c = e.pageX - canvas.offsetLeft;
         d = e.pageY - canvas.offsetTop;
      }
      if (dragok4){
         z = e.pageX - canvas.offsetLeft;
         f = e.pageY - canvas.offsetTop;
      }
      if (dragok5){
         g = e.pageX - canvas.offsetLeft;
         h = e.pageY - canvas.offsetTop;
      }
      if (dragok6){
         i = e.pageX - canvas.offsetLeft;
         j = e.pageY - canvas.offsetTop;
      }
      if (dragok7){
         k = e.pageX - canvas.offsetLeft;
         l = e.pageY - canvas.offsetTop;
      }
   }


   function myDown(e){
      if (e.pageX < x + 5 + canvas.offsetLeft && e.pageX > x - 5 +
         canvas.offsetLeft && e.pageY < y + 5 + canvas.offsetTop &&
         e.pageY > y -5 + canvas.offsetTop){
         //x = e.pageX - canvas.offsetLeft;
         //y = e.pageY - canvas.offsetTop;
         dragok1 = true;
         canvas.onmousemove = myMove;
      }
      if (e.pageX < a + 5 + canvas.offsetLeft && e.pageX > a - 5 +
         canvas.offsetLeft && e.pageY < b + 5 + canvas.offsetTop &&
         e.pageY > b-5 + canvas.offsetTop){
         dragok2 = true;
         canvas.onmousemove = myMove;
      }
      if (e.pageX < c + 5 + canvas.offsetLeft && e.pageX > c - 5 +
         canvas.offsetLeft && e.pageY < d + 5 + canvas.offsetTop &&
         e.pageY > d-5 + canvas.offsetTop){
         dragok3 = true;
         canvas.onmousemove = myMove;
      }
      if (e.pageX <  z+ 5 + canvas.offsetLeft && e.pageX > z - 5 +
         canvas.offsetLeft && e.pageY < f + 5 + canvas.offsetTop &&
         e.pageY > f-5 + canvas.offsetTop){
         dragok4 = true;
         canvas.onmousemove = myMove;
      }
      if (e.pageX < g + 5 + canvas.offsetLeft && e.pageX > g - 5 +
         canvas.offsetLeft && e.pageY < h + 5 + canvas.offsetTop &&
         e.pageY > h-5 + canvas.offsetTop){
         dragok5 = true;
         canvas.onmousemove = myMove;
      }
      if (e.pageX < i + 5 + canvas.offsetLeft && e.pageX > i - 5 +
         canvas.offsetLeft && e.pageY < j + 5 + canvas.offsetTop &&
         e.pageY > j-5 + canvas.offsetTop){
         dragok6 = true;
         canvas.onmousemove = myMove;
      }
      if (e.pageX < k + 4 + canvas.offsetLeft && e.pageX > k - 4 +
         canvas.offsetLeft && e.pageY < l + 4 + canvas.offsetTop &&
         e.pageY > l-4 + canvas.offsetTop){
         dragok7 = true;
         canvas.onmousemove = myMove;
      }
   }


   function myUp(){
      dragok1 = false;
      dragok2 = false;
      dragok3 = false;
      dragok4 = false;
      dragok5 = false;
      dragok6 = false;
      dragok7 = false;
      canvas.onmousemove = null;
   }

   init();
   canvas.onmousedown = myDown;
   canvas.onmouseup = myUp;
}


