var racerOne = {"x":100, "y":150, "color":'red', "dir":"Right"}
var racerTwo = {"x":500, "y":450, "color":'blue', "dir":"Left"}
var DISTANCE = 2
var interval

draw = function () {

    var canvas = document.getElementById('mycanvas')
    var ctx = canvas.getContext("2d")
    
    // RACER ONE
    ctx.strokeStyle = racerOne["color"]
    ctx.beginPath()
    ctx.moveTo(racerOne["x"], racerOne["y"])
    if (racerOne["dir"] == "Right") {
        if (racerOne["x"] <= 599) {
            racerOne["x"] = racerOne["x"] + DISTANCE
        }
    }
    if (racerOne["dir"] == "Left") {
        if (racerOne["x"] >= 1) {
            racerOne["x"] = racerOne["x"] - DISTANCE
        }
    }
    if (racerOne["dir"] == "Up") {
        if (racerOne["y"] >= 1) {
            racerOne["y"] = racerOne["y"] - DISTANCE
        }
    }
    if (racerOne["dir"] == "Down") {
        if (racerOne["y"] <= 599) {
            racerOne["y"] = racerOne["y"] + DISTANCE
        }
    }
    ctx.lineTo(racerOne["x"], racerOne["y"])
    ctx.stroke()
    
    // RACER TWO
    ctx.strokeStyle = racerTwo["color"]
    ctx.beginPath()
    ctx.moveTo(racerTwo["x"], racerTwo["y"])
    if (racerTwo["dir"] == "Right") {
        if (racerTwo["x"] <= 599) {
            racerTwo["x"] = racerTwo["x"] + DISTANCE
        }
    }
    if (racerTwo["dir"] == "Left") {
        if (racerTwo["x"] >= 1) {
            racerTwo["x"] = racerTwo["x"] - DISTANCE
        }
    }
    if (racerTwo["dir"] == "Up") {
        if (racerTwo["y"] >= 1) {
            racerTwo["y"] = racerTwo["y"] - DISTANCE
        }
    }
    if (racerTwo["dir"] == "Down") {
        if (racerTwo["y"] <= 599) {
            racerTwo["y"] = racerTwo["y"] + DISTANCE
        }
    }
    ctx.lineTo(racerTwo["x"], racerTwo["y"])
    ctx.stroke()
}

clearit = function() {
    interval = window.clearInterval(interval)
    var canvas = document.getElementById('mycanvas')
    var ctx = canvas.getContext("2d")

    ctx.clearRect(0, 0, 600, 600)
    ctx.strokeRect()

    racerOne["x"] = 100
    racerOne["y"] = 150
    racerTwo["x"] = 500
    racerTwo["y"] = 450
}

drawit = function() {

    interval = self.setInterval("draw()", 20)
    //ctx.arc(300, 200, 20, 0, 6.28, false)
    //ctx.moveTo(280, 150)
    //ctx.bezierCurveTo(320, 200, 280, 200, 280, 250)
    //ctx.stroke()
}

arrows = function(event) {
    if (event.keyIdentifier == "Up") {
        racerOne["dir"] = "Up"
    }
    if (event.keyIdentifier == "Right") {
        racerOne["dir"] = "Right"
    }
    if (event.keyIdentifier == "Left") {
        racerOne["dir"] = "Left"
    }
    if (event.keyIdentifier == "Down") {
        racerOne["dir"] = "Down"
    }
    if (event.keyIdentifier == "U+0057") {
        racerTwo["dir"] = "Up"
    }
    if (event.keyIdentifier == "U+0041") {
        racerTwo["dir"] = "Left"
    }
    if (event.keyIdentifier == "U+0053") {
        racerTwo["dir"] = "Down"
    }
    if (event.keyIdentifier == "U+0044") {
        racerTwo["dir"] = "Right"
    }
}
