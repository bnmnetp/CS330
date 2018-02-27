oneAway = function(word,usedWords){
	wordLength = word.length;
	letterDifference = 0;
	passedWords = new Array()
	if (wordLength > 5 || wordLength < 3){
		return 'Word is too long';
	}

	if (wordLength == 3){
		for (index in threeLetterWords){
			letterDifference = 0;
			testWord = threeLetterWords[index];
			x = 0;
			if (usedWords.contains(testWord) == false){
				while (x < 3 && letterDifference < 2){
					if (word[x] != testWord[x]){
						letterDifference = letterDifference + 1;
					}
					x += 1;
				}
				if (letterDifference == 1){
					usedWords.add(testWord);
					passedWords.push(testWord);
				}
			}
		}
		return passedWords;
	}
	else if (wordLength == 4){
		for (index in fourLetterWords){
			letterDifference = 0;
			testWord = fourLetterWords[index];
			x = 0;
			if (usedWords.contains(testWord) == false){
				while (x < 4 && letterDifference < 2){
					if (word[x] != testWord[x]){
						letterDifference = letterDifference + 1;
					}
					x += 1;
				}
				if (letterDifference == 1){
					usedWords.add(testWord);
					passedWords.push(testWord);
				}
			}
		}
		return passedWords;
	}
	else if (wordLength == 5){
		for (index in fiveLetterWords){
			letterDifference = 0;
			testWord = fiveLetterWords[index];
			x = 0;
			if (usedWords.contains(testWord) == false){
				while (x < 5 && letterDifference < 2){
					if (word[x] != testWord[x]){
						letterDifference = letterDifference + 1;
					}
					x += 1;
				}
				if (letterDifference == 1){
					usedWords.add(testWord);
					passedWords.push(testWord);
				}
			}
		}
		return passedWords;
	}
	else{
		console.log('Error in word length');
		return 'Error in word length';
	}	
}
stop = function(){
	itemIndex = 666;
	console.log('Stopped');
}

function incrementallyProcess(workerCallback, data, chunkSize, timeout, completionCallback,store) {
  itemIndex = 0;
  (function() {
    var remainingDataLength = (data.length() - itemIndex);
    var currentChunkSize = (remainingDataLength >= chunkSize) ? chunkSize : remainingDataLength;
    if(data.length() != 0 && itemIndex != 666) {
      while(currentChunkSize--) {
        value = workerCallback(data);
				if (value[0]==0){
					store = "Failed"
					itemIndex = 666;
				}
				else if (value[0]==1) {
					itemIndex = 666;
					store = value[1].getArray();
				}
      }
		globalCount ++;
		if (globalCount == 20){
			globalCount = 0;
			td = document.getElementById('myTD')
			if (td.innerHTML=="Running" || td.innerHTML=="Running..."){
				td.innerHTML='Running.';
			}
			else if (td.innerHTML=="Running."){
				td.innerHTML='Running..';
			}
			else if (td.innerHTML=="Running.."){
				td.innerHTML='Running...';
			}
		}
      setTimeout(arguments.callee, timeout);
    } else if(completionCallback) {
      completionCallback(store);
    }
  })
	();
}

function appendToSelect(data) {     
  incrementallyProcess(function(data,words) {
		currentStack = data.dequeue();
		if (currentStack == undefined){
			return [0,0];
		}
		if (currentStack.peek() == endWord){
			return [1,currentStack];
		}
		else{
			currentWord = currentStack.peek();
			newWords = oneAway(currentWord,usedWords);
			holderArray = currentStack.getArray();
			for (i in newWords){
				newStack = new stack();
				newStack.setArray(holderArray);
				newStack.push(newWords[i]);
				data.enqueue(newStack);
			}
		}
		return [2,2];
  }, wordQueue, 10, 1, function(store){
			var end = new Date().getTime();
			var time = end - start;
			console.log('Execution time: ' + time);
			tableDir = document.getElementById('table');
			tableDir.innerHTML = "";
			wordArray = store;
			if (store == undefined){
				table = document.createElement("Table");
				tableDir.appendChild(table);
				table.border = '1';
				row = document.createElement("TR");
				td1 = document.createElement("TD");
				td1.appendChild(document.createTextNode('Stopped by user or word ladder impossible'));
				row.appendChild(td1);
				table.appendChild(row);
			}
			else{
			table = document.createElement("Table");
			tableDir.appendChild(table);
			table.border = '1';
			for (x in wordArray){
				row = document.createElement("TR");
				td1 = document.createElement("TD");
				td1.appendChild(document.createTextNode(wordArray[x]));
				row.appendChild(td1);
				table.appendChild(row);
			}
			holder = false;
			return 0;}
			});
}
main = function(){
	tableDir = document.getElementById('table');
	tableDir.innerHTML = "";
	table = document.createElement("Table");
	tableDir.appendChild(table);
	table.border = '1';
	row = document.createElement("TR");
	td1 = document.createElement("TD");
	var divIdName = 'myTD';
	td1.setAttribute('id',divIdName);
	td1.appendChild(document.createTextNode('Running'));
	row.appendChild(td1);
	table.appendChild(row);
	start = new Date().getTime();
	sText = document.getElementById('startingWord');
	eText = document.getElementById('endingWord');
	word = sText.value;
	endWord = eText.value;
	if (word.length != endWord.length){
			tableDir = document.getElementById('table');
			tableDir.innerHTML = "";
			table = document.createElement("Table");
			tableDir.appendChild(table);
			table.border = '1';
			row = document.createElement("TR");
			td1 = document.createElement("TD");
			td1.appendChild(document.createTextNode('Word lengths do not match'));
			row.appendChild(td1);
			table.appendChild(row);
			return 0;
	}
	if (word.length > 5 || endWord.length > 5 || word.length < 3 || endWord.length < 3){
		tableDir = document.getElementById('table');
			tableDir.innerHTML = "";
			table = document.createElement("Table");
			tableDir.appendChild(table);
			table.border = '1';
			row = document.createElement("TR");
			td1 = document.createElement("TD");
			td1.appendChild(document.createTextNode('Words must be between 3 and 5 letters long'));
			row.appendChild(td1);
			table.appendChild(row);
			return 0;
	}
	usedWords = new set();
	possibleWords = oneAway(word,usedWords);
	usedWords.add(word);
	wordQueue = new queue();
	for (x in possibleWords){
		currentStack = new stack();
		currentStack.push(word);
		currentStack.push(possibleWords[x]);
		usedWords.add(possibleWords[x]);
		wordQueue.enqueue(currentStack);
	}
	appendToSelect(wordQueue);
}
itemIndex = 0; //Used to stop the running
globalCount = 0;