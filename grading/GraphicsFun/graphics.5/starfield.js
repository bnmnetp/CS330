function go(state){
canvas = document.getElementById('mycanvas');
ctx = canvas.getContext('2d');

if (state) {
 self.setInterval("go(false)",1); 
 initialize();
 Enemy();
 }
 Cloud();
 
 


// setup aliases
var Rnd = Math.random,
    Sin = Math.sin,
    Floor = Math.floor;

//set up asteroids
//(Rnd * Date.now())
	
// constants and storage for objects that represent star positions
var warpZ = 16,
    units = 1000,
    Z = 0.025 + (1/25 * 2);

// function to reset a star object
function resetstar(a)
{
   a.x = (Rnd() * 600 - (600 * 0.5)) * warpZ;
   a.y = (Rnd() * 600 - (600 * 0.5)) * warpZ;
   a.z = warpZ;
   a.px = 0;
   a.py = 0;
}

// initialisation
if (typeof stars === "undefined")
{
   stars = [];
   // initial star setup
   for (var i=0, n; i<units; i++)
   {
      n = {};
      resetstar(n);
      stars.push(n);
   }
   cycle = 0;
}

// star rendering
ctx.globalAlpha = .5;
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, 600, 600);

var cx = 600 / 2,
    cy = 600 / 30;

// update all stars
var sat = Floor(Z * 500);       // Z range 0.01 -> 0.5
if (sat > 100) sat = 100;
for (var i=0; i<units; i++)
{
   var n = stars[i],            // the star
       xx = n.x / n.z,          // star position
       yy = n.y / n.z,
       e = (1.0 / n.z + 1) * 2;   // size i.e. z
   
   if (n.px)
   {
      // hsl colour from a sine wave
      ctx.strokeStyle = "hsl(" + ((cycle * i) % 360) + ",80%,80%)";
      ctx.line600 = e;
      ctx.beginPath();
      ctx.moveTo(xx + cx, yy + cy);
      ctx.lineTo(n.px + cx, n.py + cy);
      ctx.stroke();
   }
   
   // update star position values with new settings
   n.px = xx;
   n.py = yy;
   n.z -= Z;
   
   // reset when star is out of the view field
   if (n.z < Z || n.px > 600 || n.py > 600)
   {
      // reset star
      resetstar(n);
   }
}

// colour cycle sinewave rotation
cycle += 0.01;
}
