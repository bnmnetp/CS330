Set = function(){
       this.set = new Array()
}

Set.prototype.add = function(x){
       this[x] = true;
}

Set.prototype.isEmpty = function(){
       if (this.set == []){
               return true
       } else return false
}

Set.prototype.contains = function(a) {
       var contained = false;
       if (a in this){
               contained = true;
       }
       return contained
}
