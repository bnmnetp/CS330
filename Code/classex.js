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
//console.log(foo.innerFunc())
//console.log(foo.publicFunction(100))
//console.log(foo.outerfunction(200))
//console.log(foo)
//console.log(foo.something)
//console.log(foo.innerFunc())


Person = function(name,age,wgt,ssnum) {
	var ssn = ssnum
    var weight = wgt
	this.age = age
    this.name = name
	//if (ssn == undefined) {
	//	ssn = 'default value'
	//}


	var addWeight = function(lbs) {
		weight = weight + lbs
	}

    this.gainWeight = function(lbs) {
        addWeight(lbs)
    }

	this.getSSN =function() {
		return ssn
	}

    this.getWeight = function() {
        return "none of your bees wax"
    }

}

Person.prototype.birthday = function(lbs) {
	this.age = this.age + 1
	//weight = weight + lbs
	return this.age
}

b = new Person("brad",48,160,1234567890)
b.birthday()
console.log(b.getSSN())
console.log(b.weight)
console.log(b.gainWeight(10))
console.log(b.getWeight())