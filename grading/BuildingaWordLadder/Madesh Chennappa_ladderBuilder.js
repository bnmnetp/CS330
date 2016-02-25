// implementation of Stack Class
// Class Methods: push, pop, peek, print, clone
Stack = function() {
   this.myStack = new Array()
}

Stack.prototype.push = function (x) {
   this.myStack.push(x)
}

Stack.prototype.pop = function () {
   return this.myStack.pop()
}

Stack.prototype.peek = function () {
   return this.myQueue[(this.myQueue.length)-1]
}

Stack.prototype.print = function () {
   return this.myStack.toString()
}

Stack.prototype.clone = function () {
   newStack = new Stack()
	for (var i = 0; i < this.myStack.length; i++){
			newStack.push(this.myStack[i])
	}
   return newStack
}

// implementation of Queue Class
// Class Methods: enqueue, dequeue, peek, print, length
Queue = function() {
   this.myQueue = new Array()
}

Queue.prototype.enqueue = function (x) {
   this.myQueue.push(x)
}

Queue.prototype.dequeue = function () {
   this.myQueue.shift()
}

Queue.prototype.peek = function () {
   return this.myQueue[(this.myQueue.length)-1]
}

Queue.prototype.print = function () {
   return this.myQueue.toString()
}

Queue.prototype.length = function () {
   return this.myQueue.length
}

// implementation of Set Class
// Class Methods: add, contains, print
Set = function() {
   this.mySet = new Array()
}

Set.prototype.add = function (x) {
   this.mySet.push(x)
}

Set.prototype.contains = function (x) {
   return this.mySet.indexOf(x) > -1
}

Set.prototype.print = function () {
   return this.mySet.toString()
}

// wordBuilder function
wordBuilder = function(){
	var checkLength = lengthCheck()
	var myQueue = new Queue()
	var myStack = new Stack()
   var Start = document.forms.wordform.start.value
   var End = document.forms.wordform.end.value
   var Length = document.forms.wordform.number.value
   var Table =  document.getElementById("table")
	myStack.push(Start)

	if (!(checkLength)){
		alert("The length are not equal")
		return false
	}

   foundWords = new Set()
	foundWords.add(Start)

	var path = findLetter(myStack, myQueue, Start, End, Length)
	if (path != ""){
		while (path.peak() != undefined){
			var jump = path.pop()
         //Table.innerHTML = jump
         Table.appendChild(jump) 
		}
	}
	else {
		alert("The WordLadder was not found for these words.")
	}
}

// checking to see if the starting and ending word are of same length
lengthCheck = function(){
	var len = document.forms.wordform.number.value
	var start = document.forms.wordform.start.value
	var end = document.forms.wordform.end.value
	return end.length == len && start.length == len
}

// finding the word with one letter difference
findLetter = function(pStack, myQueue, start, end, len){

	var alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

	if (len == 3){
		//three letter words
		var temp = ""

		for (i in alphabets){
			temp = alphabets[i] + start[1] + start[2]
			if ((threeLetterWords.indexOf(temp) > -1) && (!(foundWords.contains(temp)))){
				var tStack = pStack.clone()
				tStack.push(temp)
				foundWords.add(temp)
				myQueue.enqueue(tStack)
            console.log(tStack)
            console.log(myQueue)
            console.log(foundWords)
            console.log("Inside the three words if loop 01")
			}
			temp = start[0] + alphabets[i] + start[2]
			if ((threeLetterWords.indexOf(temp) > -1) && (!(foundWords.contains(temp)))){
				var tStack = pStack.clone()
				tStack.push(temp)
				foundWords.add(temp)
				myQueue.enqueue(tStack)
            console.log(tStack)
            console.log(myQueue)
            console.log(foundWords)
            console.log("Inside the three words if loop 02")
			}
			temp = start[0] + start[1] + alphabets[i]
			if ((threeLetterWords.indexOf(temp) > -1) && (!(foundWords.contains(temp)))){
				var tStack = pStack.clone()
				tStack.push(temp)
				foundWords.add(temp)
				myQueue.enqueue(tStack)
            console.log(tStack)
            console.log(myQueue)
            console.log(foundWords)
            console.log("Inside the three words if loop 03")
			}
		}
		
		for (var x = 0; x < myQueue.length(); x++){
			var fStack = myQueue.dequeue()
			var foundWord = fStack.peek()

			if (foundWord == end){
				fStack.reverse()
            console.log("found the Word")
				return fStack
			}
			else{
            console.log("did not found the Word")
				return findLetter(fStack, myQueue, foundWord, end, len)
			}
		}
	}
	else {
	if (len == 4){
      // four letter words
		var temp = ""
		
		for (i in alphabets){
			temp = alphbets[i] + start[1] + start[2] + start[3]
			if ((fourLetterWords.indexOf(temp) > -1) && (!(foundWords.contains(temp)))){
				var tStack = pStack.clone()
				tStack.push(temp)
				foundWords.add(temp)
				myQueue.enqueue(tStack)
            console.log(tStack)
            console.log(myQueue)
            console.log(foundWords)
            alert("Inside the four words if loop")
			}
			temp = start[0] + alphabets[i] + start[2] + start[3]
			if ((fourLetterWords.indexOf(temp) > -1) && (!(foundWords.contains(temp)))){
				var tStack = pStack.clone()
				tStack.push(temp)
				foundWords.add(temp)
				myQueue.enqueue(tStack)
            console.log(tStack)
            console.log(myQueue)
            console.log(foundWords)
            alert("Inside the four words if loop")
			}
			temp = start[0] + start[1] + alphabets[i] + start[3]
			if ((fourLetterWords.indexOf(temp) > -1) && (!(foundWords.contains(temp)))){
				var tStack = pStack.clone()
				tStack.push(temp)
				foundWords.add(temp)
				myQueue.enqueue(tStack)
            console.log(tStack)
            console.log(myQueue)
            console.log(foundWords)
            alert("Inside the four words if loop")
			}
			temp = start[0] + start[1] + start[2] + alphabets[i]
			if ((fourLetterWords.indexOf(temp) > -1) && (!(foundWords.contains(temp)))){
				var tStack = pStack.clone()
				tStack.push(temp)
				foundWords.add(temp)
				myQueue.enqueue(tStack)
            console.log(tStack)
            console.log(myQueue)
            console.log(foundWords)
            alert("Inside the four words if loop")
			}
		}
		
		for (var x = 0; x < myQueue.length(); x++){
			var fStack = myQueue.dequeue()
			var foundWord = fStack.peek()

			if (foundWord == end){
				fStack.reverse()
				return fStack
			}
			else{
				return findLetter(fStack, myQueue, foundWord, end, len)
			}
		}
	}
	else {
      // five letter words
		var temp = ""		
		for (i in alphabets){
			temp = alphabets[i] + start[1] + start[2] + start[3] + start[4]
			if ((fiveLetterWords.indexOf(temp) > -1) && (!(foundWords.contains(temp)))){
				var tStack = pStack.clone()
				tStack.push(temp)
				foundWords.add(temp)
				myQueue.enqueue(tStack)
            console.log(tStack)
            console.log(myQueue)
            console.log(foundWords)
            alert("Inside the five words if loop")
			}
			temp = start[0] + alphabets[i] + start[2] + start[3] + start[4]
			if ((fiveLetterWords.indexOf(temp) > -1) && (!(foundWords.contains(temp)))){
				var tStack = pStack.clone()
				tStack.push(temp)
				foundWords.add(temp)
				myQueue.enqueue(tStack)
            console.log(tStack)
            console.log(myQueue)
            console.log(foundWords)
            alert("Inside the five words if loop")
			}
			temp = start[0] + start[1] + alphabets[i] + start[3] + start[4]
			if ((fiveLetterWords.indexOf(temp) > -1) && (!(foundWords.contains(temp)))){
				var tStack = pStack.clone()
				tStack.push(temp)
				foundWords.add(temp)
				myQueue.enqueue(tStack)
            console.log(tStack)
            console.log(myQueue)
            console.log(foundWords)
            alert("Inside the five words if loop")
			}
			temp = start[0] + start[1] + start[2] + alphabets[i] + start[4]
			if ((fiveLetterWords.indexOf(temp) > -1) && (!(foundWords.contains(temp)))){
				var tStack = pStack.clone()
				tStack.push(temp)
				foundWords.add(temp)
				myQueue.enqueue(tStack)
            console.log(tStack)
            console.log(myQueue)
            console.log(foundWords)
            alert("Inside the five words if loop")
			}
			temp = start[0] + start[1] + start[2] + start[3] + alphabets[i]
			if ((fiveLetterWords.indexOf(temp) > -1) && (!(foundWords.contains(temp)))){
				var tStack = pStack.clone()
				tStack.push(temp)
				foundWords.add(temp)
				myQueue.enqueue(tStack)
            console.log(tStack)
            console.log(myQueue)
            console.log(foundWords)
            alert("Inside the five words if loop")
			}
		}
		
		for (var x = 0; x < myQueue.length(); x++){

			var fStack = myQueue.dequeue()
			var foundWord = fStack.peek()

			if (foundWord == end){
				fStack.reverse()
            console.log("found the Word")
				return fStack
			}
			else{
            console.log("did not find the word")
				return findLetter(fStack, myQueue, foundWord, end, len)
			}
		}
	}
	}
	return false	
}




