function go(state){
if (state) self.setInterval("go(false)",1);
canvas = document.getElementById('mycanvas');
ctx = canvas.getContext('2d');
var height = 600;
var width = 600;
// initialization
if (typeof palette === "undefined")
{
   var paletteoffset = 0,
       palette = [];
   
   for (var i=0,r,g,b; i<256; i++)
   {
      r = ~~(128 + 128 * Math.sin(Math.PI * i / 32));
      g = ~~(128 + 128 * Math.sin(Math.PI * i / 64));
      b = ~~(128 + 128 * Math.sin(Math.PI * i / 128));
      palette[i] = "rgb(" + ~~r + "," + ~~g + "," + ~~b + ")";
   }
}

var dist = function dist(a, b, c, d)
{
   return Math.sqrt((a - c) * (a - c) + (b - d) * (b - d));
}

// plasma source width and height
var pwidth = 48, pheight = pwidth * (height/width);

// scale the plasma source to the canvas width/height
var vpx = width/pwidth, vpy = height/pheight;
var time = Date.now() / 64;

var colour = function colour(x, y)
{
   // plasma function
   return (128 + (128 * Math.sin(x * 0.0625)) +
           128 + (128 * Math.sin(y * 0.03125)) +
           128 + (128 * Math.sin(dist(x + time, y - time, width, height) * 0.125)) +
           128 + (128 * Math.sin(Math.sqrt(x * x + y * y) * 0.125)) ) * 0.25;
}

// render plasma effect
for (var y=0,x; y<pheight; y++)
{
   for (x=0; x<pwidth; x++)
   {
      // map plasma pixels to canvas pixels using the virtual pixel size
      ctx.fillStyle = palette[~~(colour(x, y) + paletteoffset) % 256];
      ctx.fillRect(Math.floor(x * vpx), Math.floor(y * vpy), Math.ceil(vpx), Math.ceil(vpy));
   }
}

// palette cycle speed
paletteoffset++;
}