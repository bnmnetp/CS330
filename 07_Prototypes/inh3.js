function mytest(a) {
    this.foo = a
}
x = {}
mytest.apply(x,[10,20])

console.log(x.foo)


// The  new operator works like this

function New (f) {
    var x  = {'__proto__': f.prototype};
    return function () {
        f.apply(x,arguments);
        return x;
    };
}

t = New(mytest)(30)
console.log(t.foo)
