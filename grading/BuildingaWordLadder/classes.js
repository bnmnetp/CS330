Stack = function(newArray) {
	if (newArray == undefined) {
		var stack = new Array()
	}
	else {
		var stack = newArray
	}
	

this.push = function(word) {
	stack.push(word)
}

this.pop = function() {
	if (stack.length != 0) {
		return stack.pop()
	}
	else {
		console.log("Stack is Empty")
	}
}

this.peek = function() {
	if (stack.length != 0) {
		return stack[stack.length-1]
	}
}

this.length = function() {
	return stack.length
}

this.clone = function() {
	var clone = new Array()
	for (var i=0;i<stack.length;i++) {
		clone.push(stack[i])
	}
	cloneStack = new Stack(clone)
	return cloneStack
}

this.reverse = function() {
	stack = stack.reverse()
}

}


Queue = function() {
	var queue = new Array()
	
	this.enqueue = function(word) {
		queue.push(word)
	}

	this.dequeue = function() {
		if (queue.length != 0) {
			return queue.shift()
		}
		else {
			console.log("Queue is Empty")
		}
	}

	this.peek = function() {
		if (Queue.length != 0) {
			return queue[0]
		}
	}

	this.length = function() {
		return queue.length
	}
}


Set = function() {
	
	this.addWord = function(addword) {
		this[addword] = 1
	}

	this.contains = function(questionableWord) {
		return questionableWord in this
	}

	this.sizeOfSet = function() {
		numElements = 0
		for (var key in this) {
			numElements++
		}
		return (numElements - 3)
	}
}

