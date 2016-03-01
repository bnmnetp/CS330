function getwords() {
var inputwords = new Array()
var one = document.myform.first.value
inputwords[0] = document.myform.first.value
inputwords[1] = document.myform.last.value
return inputwords
}

var warray = getwords()
console.log(warray)

//var teststack = new Stack()
//teststack.push(33)
//console.log(teststack)
//console.log(threeLetterWords)



function main() {
var warray = getwords()
var wordlength = document.myform.wordlength.value

alert(warray[0] + "/" + warray[1])
console.log(warray)
console.log(lengthcheck())
}




function findwords(aword, allwords) {
    var successorwords = new Stack()
    var msg = ""

    for (var i = 0; i < aword.length; ++i) {
        for (var ch = 'a'.charCodeAt(0); ch <= 'z'.charCodeAt(0); ++ch) {
            /* Build the new word. */
            var possibleword = aword.substring(0, i) + String.fromCharCode(ch) + aword.substring(i + 1)

            /* See if it's a word. */
            if (allwords[possibleword] !== undefined)
                successorwords.push(possibleword)
        }
    }
    return successorwords
}

var testresult = findwords("bow",threeLetterWords)
console.log(testresult)




function lengthcheck() {

var warray = getwords()
wordlength1 = warray[0].length
wordlength2 = warray[1].length
var wordlength = document.myform.wordlength.value

if (wordlength1!=wordlength2 || wordlength1!=wordlength)
{alert("words are not the same length as the one selected, retry")}
else
{return true}

}




