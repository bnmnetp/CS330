set = function(){

	this.contains = function(word){
		if (this[word] != undefined){
			return true;
		}
		return false;
	}
	
	this.add = function(word){
		this[word] = word
	}
}