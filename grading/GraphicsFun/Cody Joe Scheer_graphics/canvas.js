var x = 730
var y = 547
var dx = 2
var dy = 4
var WIDTH = 730
var HEIGHT = 547
var c
var ctx
var shapes = []

window.onload = function() {
    c=document.getElementById("myCanvas")
    ctx=c.getContext("2d")
    setInterval(draw,50)
}

function draw() {
    clear(WIDTH,HEIGHT)
    var img=new Image()
    img.src="pine.jpg"
    ctx.fillStyle = "rgba(255, 255, 255, 0)"
    ctx.drawImage(img,0,0)
    rect(0,0,WIDTH,HEIGHT)
    for (i in shapes) {
        var shape = shapes[i]
        circle(shape.getX(),shape.getY(),shape.getR())
        if (shape.getX() + shape.getDX() > WIDTH || shape.getX() + shape.getDX() < 0)
            shape.setDX(-shape.getDX())
        if (shape.getY() + shape.getDY() > HEIGHT || shape.getY() + shape.getDY() < 0)
            shape.setDY(-shape.getDY())
        shape.setX(shape.getX()+shape.getDX())
        shape.setY(shape.getY()+shape.getDY())

    }
}

function circle(x,y,r) {
  ctx.save()
  ctx.beginPath()
  ctx.arc(x,y,r,0,Math.PI*2,true)
  ctx.fillStyle = "rgba(255, 255, 255, .5)"
  ctx.fill()
  ctx.closePath()
  ctx.restore()
}

function rect(x,y,w,h) {
  ctx.beginPath()
  ctx.rect(x,y,w,h)
  ctx.closePath()
  ctx.fill()
}

function clear(WIDTH,HEIGHT) {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

var Shape = function(xcoord,ycoord) {
    var x = xcoord
    var y = ycoord
    var r = Math.floor(Math.random()*25)
    var dx = Math.floor(Math.random()*15)
    var dy = Math.floor(Math.random()*15)

    this.getX = function() {
        return x
    }

    this.setX = function(newx) {
        x = newx
    }

    this.getY = function() {
        return y
    }

    this.setY = function(newy) {
        y = newy
    }

    this.getR = function() {
        return r
    }

    this.getDX = function() {
        return dx
    }

    this.setDX = function(newdx) {
        x = newdx
    }

    this.getDY = function() {
        return dy
    }

    this.setDY = function(newdy) {
        y = newdy
    }

}

document.onclick = function(event) {
    var x = event.clientX - c.offsetLeft
    var y = event.clientY - c.offsetTop
    if (x<WIDTH && y<HEIGHT && x>c.offsetLeft && y>c.offsetTop) {
        var shape = new Shape(x,y)
        shapes.push(shape)
    }
}

function summer() {
    while (shapes.length>0) {
        shapes.pop()
    }
}