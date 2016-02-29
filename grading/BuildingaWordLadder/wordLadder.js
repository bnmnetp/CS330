
generateTable = function(wordStack) {
	var table = document.getElementById("display")
	resultLength = wordStack.length()
	wordStack.reverse()
	for (var i=0;i<resultLength;i++) {
		var tr = document.createElement("tr")
		table.appendChild(tr)
		var tdIterate = document.createElement("td")
		tdIterate.innerHTML = i
		var td = document.createElement("td")
		td.innerHTML = wordStack.pop()
		tr.appendChild(tdIterate)
		tr.appendChild(td)
	}
	
}


function clearTable() {
	try {
		var table = document.getElementById("display");
		var rowCount = table.rows.length;

		for(var i=0; i<rowCount; i++) {
			var row = table.rows[i];
			table.deleteRow(i);
			rowCount--;
			i--;
		}
	} catch(e) {
		alert(e);
	}
}




checkInput = function() {
	startWord = document.forms.wordladder.Start.value
	startWord = startWord.toLowerCase()
	endWord = document.forms.wordladder.End.value
	endWord = endWord.toLowerCase()
	wordLength = document.forms.wordladder.wordLength.value

	if (startWord == "" && endWord == "") {
		alert("Please pick a starting and ending word")
		return false
	}

	if (startWord.indexOf("'") != -1 || endWord.indexOf("'") != -1) {
		alert("Remember words can't contain apostrophes")
		return false
	}

	if (startWord == "") {
		alert("Please pick a starting word")
		return false
	}
	if (endWord == "") {
		alert("Please pick a starting word")
		return false
	}

	if (startWord.length == wordLength && endWord.length == wordLength) {
		initialize(startWord,endWord)
	}
	else {
		alert("Clearly you didn't read the directions since your word lengths don't match the size you selected")
		return false
	}
}//wordladder

initialize = function(start,end) {
	startWordStack = new Stack()
	wordLadderQueue = new Queue()
	usedWords = new Set()

	if (start == undefined && end == undefined) {
		startWord = document.forms.wordladder.Start.value
		endWord = document.forms.wordladder.End.value
		wordLength = startWord.length
	}
	else {
		startWord = start
		endWord = end
		wordLength = startWord.length
	}

	availableWordList = new Array()
	usedWords.addWord(startWord)
	startWordStack.push(startWord)
	wordLadderQueue.enqueue(startWordStack)

	if (wordLength == 3) {
		availableWordList = threeLetterWords
	}
	else if (wordLength == 4) {
		availableWordList = fourLetterWords
	}
	else {
		availableWordList = fiveLetterWords
	}

	return wordLadder(wordLadderQueue, endWord, availableWordList, wordLength, usedWords)
}

wordLadder = function(WLQueue, endWord, availableWordList, wordLength, usedWords) {

	

	nextStack = WLQueue.dequeue()
	nextWord = nextStack.peek()
	WLQueue.enqueue(nextStack)

	while (WLQueue.length() !=0 && nextWord != endWord) {

		nextStack = WLQueue.dequeue()
		nextWord = nextStack.peek()
		

		
		if (nextWord == endWord) {
			finalResult = nextStack
			resultLength = finalResult.length()
			clearTable()
			generateTable(finalResult)
			return
		}

	
		regExprList = new Array()
		for (var i=0;i<wordLength;i++) {
	
			frontOfWord = nextWord.substr(0,i)
			endOfWord = nextWord.substr(i+1)
			regString = frontOfWord + "[a-z]" + endOfWord
			regExpr = new RegExp(regString)
			//console.log(regExpr)
			regExprList.push(regExpr)
		}

		WLQueue = findNextWords(availableWordList, nextStack, regExprList, wordLength, WLQueue, usedWords)
	}

}


findNextWords = function(wordList, wordStack, regExprList,wordLength,wordLadderQueue, usedWords) {
	
	for (var i=0;i<wordList.length;i++) {
		for (var j=0;j<wordLength;j++) {
			
			matches = availableWordList[i].match(regExprList[j])
			if (matches != null) {
				
				if (!usedWords.contains(matches[0])) {
					
					myNewStack = wordStack.clone()
					myNewStack.push(matches[0])
					usedWords.addWord(matches[0])
					wordLadderQueue.enqueue(myNewStack)
				}
			}
		}
	}
	return wordLadderQueue
}



