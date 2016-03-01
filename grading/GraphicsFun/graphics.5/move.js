var context;
var rightKey = false;
var leftKey = false;
var upKey = false;
var downKey = false;
var fire = false;
var block_x;
var block_y;
var block_h = 30;
var block_w = 30;
var dmg = 0



function initialize() {
  canvas = document.getElementById('mycanvas2');
  context = canvas.getContext('2d');
  WIDTH = 600;
  HEIGHT = 600;
  block_x = WIDTH / 2 - 15;
  block_y = HEIGHT - 100;
  setInterval('draw()', 1);
}
function clearCanvas() {
  context.clearRect(0,0,WIDTH,HEIGHT);
}

function draw() {
  //clearCanvas();
  if (rightKey) block_x += 11;
  else if (leftKey) block_x -= 11;
  if (upKey) block_y -= 11;
  else if (downKey) block_y += 11;
  if (block_x <= 0) block_x = 0;
  if ((block_x + block_w) >= WIDTH) block_x = WIDTH - block_w;
  if (block_y <= 0) block_y = 0;
  if ((block_y + block_h) >= HEIGHT) block_y = HEIGHT - block_h;
  if (fire) {
	bullet(block_x,block_y);
	if (block_x > Math.sin(Date.now()*0.001)*200+250 && block_x < Math.sin(Date.now()*0.001)*200+350) { dmg += 1;}
	}
	
  context.fillStyle = 'red';
  context.beginPath(); // create ship shape
  context.moveTo(block_x,block_y);
  context.lineTo(block_x - 10,block_y + 30);
  context.lineTo(block_x + 10,block_y + 30);
  context.lineTo(block_x,block_y);
  context.closePath(); // complete custom shape
  context.fill();
}

function  bullet(block_x,block_y) {
firex = block_x-5;
firey = block_y-5;

;

context.fillStyle = "yellow";
while (firey > 0){
if (firey % 100) context.fillRect(firex,firey,5,5);
firey -= 1;
}

}

function onKeyDown(evt) {
  if (evt.keyCode == 39) rightKey = true;
  else if (evt.keyCode == 37) leftKey = true;
  if (evt.keyCode == 38) upKey = true;
  else if (evt.keyCode == 40) downKey = true;
  if (evt.keyCode == 65) fire = true;
}

function onKeyUp(evt) {
  if (evt.keyCode == 39) rightKey = false;
  else if (evt.keyCode == 37) leftKey = false;
  if (evt.keyCode == 38) upKey = false;
  else if (evt.keyCode == 40) downKey = false;
  if (evt.keyCode == 65) fire = false;
}

window.addEventListener('keydown',onKeyDown, true);
window.addEventListener('keyup',onKeyUp, true);
