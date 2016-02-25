function zero(context, x, scale, y)
{
    seven(context,x,scale,y)
    one(context,x,scale,y)
    context.moveTo(scale*(x+5),scale*(y+200))
    context.lineTo(scale*(x+100),scale*(y+200))
    context.stroke()
}
function one(context,x,scale,y)
{
    context.moveTo(scale*x,scale*y)
    context.lineTo(scale*x,scale*(y+100))
    context.moveTo(scale*x,scale*(y+105))
    context.lineTo(scale*x,scale*(y+200))
    context.stroke()
}

function two(context,x,scale,y)
{
    context.moveTo(scale*x,scale*y); //a
    context.lineTo(scale*(x+100),scale*y);  //b
    context.moveTo(scale*(x+105),scale*y);
    context.lineTo(scale*(x+105),scale*(y+100)); //c
    context.moveTo(scale*(x+105),scale*(y+105))
    context.lineTo(scale*(x+5),scale*(y+105))//d
    context.moveTo(scale*x,scale*(y+105))
    context.lineTo(scale*x,scale*(y+205)) //e
    context.moveTo(scale*x,scale*(y+205))
    context.lineTo(scale*(x+105),scale*(y+205))
    context.stroke();
}
function three(context,x,scale,y)
{
    context.moveTo(scale*x,scale*y)//a
    context.lineTo(scale*(x+100),scale*y)//b
    context.moveTo(scale*(x+105),scale*y)
    context.lineTo(scale*(x+105),scale*(y+100))
    context.moveTo(scale*(x+100),scale*(y+105))
    context.lineTo(scale*(x+5),scale*(y+105))
    context.moveTo(scale*(x+105),scale*(y+107))
    context.lineTo(scale*(x+105),scale*(y+200))
    context.moveTo(scale*(x+100),scale*(y+200))
    context.lineTo(scale*x,scale*(y+200))
    context.stroke()
}
function four(context,x,scale,y)
{
    context.moveTo(scale*x,scale*y)
    context.lineTo(scale*x,scale*(y+100))
    context.moveTo(scale*x,scale*(y+105))
    context.lineTo(scale*(x+100),scale*(y+105))
    context.moveTo(scale*(x+105),scale*y)
    context.lineTo(scale*(x+105),scale*(y+100))
    context.moveTo(scale*(x+105),scale*(y+105))
    context.lineTo(scale*(x+105),scale*(y+205))
    context.stroke()
}
function five(context,x,scale,y)
{
    context.moveTo(scale*(x+105),scale*y)
    context.lineTo(scale*(x+5),scale*y)
    context.moveTo(scale*x,scale*y)
    context.lineTo(scale*x,scale*(y+100))
    context.moveTo(scale*(x+5),scale*(y+100))
    context.lineTo(scale*(x+105),scale*(y+100))
    context.moveTo(scale*(x+105),scale*(y+105))
    context.lineTo(scale*(x+105),scale*(y+205))
    context.moveTo(scale*(x+100),scale*(y+205))
    context.lineTo(scale*x,scale*(y+205))
    context.stroke()

}
function six(context,x,scale,y)
{
    five(context,x,scale,y)
    context.moveTo(scale*x,scale*(y+105))
    context.lineTo(scale*x,scale*(y+200))
    context.stroke()
}
function seven(context,x,scale,y)
{
    context.moveTo(scale*x,scale*y)
    context.lineTo(scale*(x+100),scale*y)
    one(context,x+105,scale,y)
}
function eight(context,x,scale,y)
{
    one(context,x,scale,y)
    three(context,x+5,scale,y)
    context.stroke()
}
function nine(context,x,scale,y)
{
    context.moveTo(scale*x,scale*(y+5))
    context.lineTo(scale*x,scale*(y+100))
    three(context,x,scale,y)
    context.stroke()
}

function blink(context,x,scale,y)
{
    context.fillStyle = "Red"
    context.strokeStyle = "Red"
    context.beginPath()
    context.arc(scale*x,scale*y,scale*20,0,2*Math.PI,true)
    context.closePath()
    context.stroke()
    context.fill()
    //context.fillStyle = "Red"
    context.beginPath()
    context.arc(scale*x,scale*(y+100),scale*20,0,2*Math.PI,true)
    context.closePath()
    context.stroke()
    context.fill()
}

function clock()
{
var date=new Date();
var t=date.toLocaleTimeString();
document.getElementById("label").value=t;
}

function findFunction(context,Tval, digit,x,scale,y)
{
    var date=new Date();
    var t=date.toLocaleTimeString();
    if (t[Tval]=="0")
        return zero(context,x,scale,y)
    else if (t[Tval] == "1")
        return one(context,x,scale,y)
    else if (t[Tval] == "2")
        return two(context,x,scale,y)
    else if (t[Tval] == "3")
        return three(context,x,scale,y)
    else if (t[Tval] == "4")
        return four(context,x,scale,y)
    else if (t[Tval] == "5")
        return five(context,x,scale,y)
    else if (t[Tval] == "6")
        return six(context,x,scale,y)
    else if (t[Tval] == "7")
        return seven(context,x,scale,y)
    else if (t[Tval] == "8")
        return eight(context,x,scale,y)
    else if (t[Tval] == "9")
        return nine(context,x,scale,y)
    return false
}
function drawSomething()
{
    var canvas = document.getElementById("myCanvas");
    var size = document.getElementById("size").value
    context = canvas.getContext("2d");
    scale = size/10;
    var date=new Date();
    t=date.toLocaleTimeString();
    context.lineWidth = 5;
}
hours = function()
{
    drawSomething()
    findFunction(context,0, t[0],10,scale,10)
    findFunction(context,1, t[1],150,scale,10)
}
minutes =function()
{
    drawSomething()
    findFunction(context,3, t[3],400,scale,10)
    findFunction(context,4, t[4],550,scale,10)
}
function seconds()
{
    drawSomething()
    findFunction(context,6, t[6],800,scale,10)
    findFunction(context,7, t[7],950,scale,10)
}
function dots()
{
    drawSomething()
    blink(context,330,scale,50)
    blink(context,730,scale,50)
}
function clearScreen()
{
    var canvas = document.getElementById("myCanvas");
    canvas.width = canvas.width
}
var int=self.setInterval("clock()",1000);
var int=self.setInterval("clearScreen()",1000);
var int=self.setInterval("hours()",1000);
var int=self.setInterval("minutes()",1000);
var int=self.setInterval("seconds()",1000);
var int=self.setInterval("dots()",1000);