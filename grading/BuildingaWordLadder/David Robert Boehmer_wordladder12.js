Stack=function(){
   this.mystack = new Array()
}
Stack.prototype.push=function(x){
   this.mystack.push(x)
}
Stack.prototype.pop=function(){
   return this.mystack.pop()
}
Stack.prototype.copy=function(){
   newstack = new Stack();
   var newstackarray = new Array()
   for(var i=0;i<this.mystack.length;i++){
      newstackarray.push(this.mystack[i])
   }
   newstack.mystack= newstackarray;
   return (newstack);
}

Que=function(){
   this.myque = new Array()
}
Que.prototype.enque=function(x){
   this.myque.push(x)
}
Que.prototype.deque=function(){
   return this.myque.shift()
}

Set=function(){
}
Set.prototype.add1=function(x){
    this[x] = true; 
}
Set.prototype.contains=function(x){
   var contained = false;
   if (x in this){
      contained = true;
   }
   return (contained);
}


printerror = function(fm) {
   //removetable();
   var istext = true;
   var notistext = false;
   var boxes = fm.elements;
   var firstword = boxes[0].value;
   var secondword = boxes[1].value;
   var wordlengthstring = boxes[2].value;
   var wordlengthval = 0;
   if (wordlengthstring[0]=="T"){
      wordlengthval = 3;
   }
   else{
      if(wordlengthstring[0]=="F"  && wordlengthstring[1]=="o"){
         wordlengthval = 4;
      }
      else{
         wordlengthval = 5;
      }
   }
      
   if (firstword=="" && secondword==""){
      istext = false;
      notistext = true;
   }
   if (notistext){
      alert("Please enter words");
   }
   else{
      if (firstword.length != secondword.length){
         alert("Please enter words of the same length");
      }
      else{
         if(firstword.length !=wordlengthval){
            alert("Please enter words of the correct length");
         }
         else{
            wordladdergenerator(firstword,secondword);
         }   
      }
   }
   
   return(false);
}

wordladdergenerator = function(firstword,secondword){
   var wordlength = firstword.length;
   var solution = false;
   var finished = false;
   if(wordlength == 3){
      worddictionary=threeLetterWords;
   }
   if(wordlength == 4){
      worddictionary=fourLetterWords;
   }
   if(wordlength == 5){
      worddictionary=fiveLetterWords;
   }
   myque = new Que();
   mystack = new Stack();
   myset = new Set();
   mystack.push(firstword)
   myque.enque(mystack)
   myset.add1(firstword)
   while (solution==false && finished==false){
      stack = myque.deque()
      if (stack == undefined){
         finished = true;
         alert("No wordladder is possible with these words")
      }
      else{
         topofstack = stack.pop()
         if (topofstack == secondword){
            solution=true;
            stack.push(topofstack)
            addtable(stack.mystack)
         }
         else{
            stack.push(topofstack)
            for(i in worddictionary){
               comparestring = worddictionary[i]
               if (myset.contains(comparestring)==false){
                  totaldifferent=0;
                  for(var a=0; a<(comparestring.length+1); a++){
                     if(comparestring[a] != topofstack[a]){
                        totaldifferent = totaldifferent+1;
                     }
                  }
                  if(totaldifferent == 1){
                     myset.add1(comparestring)
                     stackcopy = stack.copy();
                     stackcopy.push(comparestring);
                     myque.enque(stackcopy);
                  }
               }
            }
         }
      }
   }
}

addtable = function(array){
   var table1 = document.createElement('table');
   var caption = table1.createCaption();
   caption.innerHTML = "Wordladder";
   for(var i=0;i<array.length;i++){
      var newrow = table1.insertRow(-1);
      var cell2 = newrow.insertCell(-1);
      cell2.innerHTML = array[i];
   }
   document.body.appendChild(table1);
}

removetable = function(){
   //if (document.getElementById("table1") != null){
     // alert('hello')
     // for(var i = document.getElementById("table1").rows.length; i > 0;i--)
    //  {  
    //     document.getElementById("table1").deleteRow(i -1);
    //  }
  // }
}










