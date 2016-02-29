Person = function(name, ssnum, wgt, age) {
	var ssn = ssnum
	var weight = wgt

	this.name = name
	if (age === undefined) {
		this.age = 0
	}

	this.getSSN = function() {
		return ssn
	}
	this.gain = function(lbs) {
		weight = weight+ lbs
	}

	this.getWeight = function() {
		return weight;
	}
}

Person.prototype.getName = function() {
	return this.name
}


x = new Person('tom',1234567890,145)

console.log(x.getName())
console.log(x.getSSN())
x.gain(10)
console.log(x.getWeight())
console.log(x.age)

