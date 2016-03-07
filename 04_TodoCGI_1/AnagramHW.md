# Anagram Generator Assignment

To get some practice writing your own CGI script, you will write a web application that will generate a table of anagrams.  You will have a simple form that allows you to type in a word, and on the server side you will need to generate a list of legal anagrams for the given word.  You have a couple of options for this:

1.  Given the word generate all possible permutations of the letters in the given word (O(n!))  Then filter the list so that it includes only 'real' words from some large dictionary of legal words.  `/usr/share/dict/words` is one source.  There are others.  In this case you might choose to display all the words and highlight the real words, or maybe a table of words and a table of non-words.

```
def anagrams(s):
  if s == "":
    return [s]
  else:
    ans = []
    for w in anagrams(s[1:]):
      for pos in range(len(w) +1):
        ans.append(w[:pos]+s[0]+w[pos:])
  return ans

```

Or, you can look at `itertools.permutations`

2.  Given a large dictionary of words, and a starting word, find all of the words in the dictionary that are anagrams Of the starting word.  [See here for anagram detection algorithms](http://interactivepython.org/runestone/static/pythonds/AlgorithmAnalysis/AnAnagramDetectionExample.html)

You should do this as a CGI script, in a single Python file.  Make the path to the dictionary you use easy to change by using a single constant at the start of your script.
