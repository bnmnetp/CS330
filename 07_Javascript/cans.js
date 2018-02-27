/**
 * Created by bmiller on 4/7/16.
 */


function Can(radius, height) {
    
    this.radius = radius;
    this.height = height;
    
}

Can.prototype.volume = function () {
    return this.radius * this.radius * Math.PI * this.height;
}


coke = new Can(5,12)

console.log(coke.volume())

function Case() {

    this.mycans = []
    for (var i = 0; i < 6; i++) {
        this.mycans.push(new Can(5,12))
    }

}

mycase = new Case()

for (can in mycase.mycans) {
    console.log(can, mycase.mycans[can].volume())
}
