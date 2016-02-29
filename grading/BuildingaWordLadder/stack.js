stack = function() {
	this.array = new Array();

	this.push = function(value){
		this.array.push(value);
	}

	this.pop = function(){
		return array.pop();
	}

	this.peek = function(){
		value = this.array.pop();
		this.array.push(value);
		return value;
	}
	
	this.getArray = function(){
		return this.array;
	}
	
	this.setArray = function(newArray){
		this.array = newArray.slice();
	}
}