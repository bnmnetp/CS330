Stack = function(){
	this.mystack = new Array()
}

Stack.prototype.push = function(x){
	this.mystack.push(x)
}

Stack.prototype.pop = function(){
	this.mystack.pop(x)
}

Stack.prototype.peek = function(){
	return this.mystack[this.mystack.length-1]
}
