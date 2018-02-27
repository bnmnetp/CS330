Word = function(myWord,goalWord) {
	var word = myWord

	if (goalWord == undefined) {
		var goal = ""
	}

	else {
		var goal = goalWord
	}

	this.intRep = function() {
		temp = word.length
		for (var i=0; i < word.length; i++) {
			if (word.charAt(i) == goal.charAt(i)) {
				temp--
			}
		}
		return temp
	}

	this.toString = function() {
		return myWord
	}

	this.getGoal = function() {
		return goal
	}
}
