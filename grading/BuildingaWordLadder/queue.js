queue = function() {
	this.array = new Array()

	this.enqueue = function(item){
		this.array.unshift(item)
	}
	
	this.dequeue = function(){
		return this.array.pop()
	}
	
	this.peek = function(){		
		 value = this.array.pop()
		 this.array.push()
		 return value;
	}
	
	this.length = function(){
		return this.array.length
	}
	
	this.printStacks = function(){
		for (x in this.array){
			console.log(this.array[x])
		}
	}
}