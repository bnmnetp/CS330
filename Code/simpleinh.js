x = Object.create(null)
x.bar = 1
x.foo = function() {
    console.log(this.bar)
}
x.foo()


y = Object.create(x)
y.foo()
y.bar=2
y.foo()


z = function() {
    this.bar = 2
    this.foo = function() {
        console.log(this.bar)
    }
    return this
}

z1 = z()
z1.foo()

myClass = function() {
    this.bar = 22
    this.foo = function() {
        console.log(this.bar)
    }
}

z2 = new myClass()
z2.foo()
console.log(z2.prototype)


MyClass = function(x,y,z) {
	var priv = x
	this.pub = y
	//if (z == undefined) {
	//	z = 'default value'
	//}
	this.something = z

	var innerFunc = function() {
		priv = priv + 1
	}

	this.publicFunction =function(z) {
		priv = priv + z
		return priv
	}

}

MyClass.prototype.outerfunction = function(a) {
	this.pub = this.pub + a
	//priv = priv + 1
	return this.pub
}

foo = new MyClass(10,20,30)
console.log(foo.outerfunction(99))
console.log(foo.publicFunction(99))
//foo.innerFunc()
