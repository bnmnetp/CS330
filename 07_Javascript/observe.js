'use strict';
var ViewThing = require('./view')


class Subject {
 
    constructor() {
        this.handlers = []
    }

    subscribe(fn) {
            this.handlers.push(fn);
        }
     
    unsubscribe(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    }
     
    publish(msg, someobj) {
        var scope = someobj || window;
        for (let fn of this.handlers) {
            fn(scope, msg)
        }
    }
}


class Can extends Subject {
    constructor(h, r) {
        super()
        this._height = h
        this.radius = r

    }
    
    volume () {
        return this.radius * this.radius * Math.PI * this.height;
    }

    get height() {
        return this._height
    }

    set height(nv) {
        this._height = nv;
        this.publish("changedheight", this)
    }

}


let model =  new Can(10,2)

function ochange(scope, msg) {
    console.log(scope)
    console.log(msg)
}

model.subscribe(ochange)



let vt = new ViewThing(model)

model.height = 20;
model.height = 40;
model.height = 1;

console.log(JSON.stringify(model))
