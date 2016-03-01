from wordlist import *
import time
import re

def oneDifferent(word1,word2):
    '''
    return true if the words are different by exactly one character otherwise false
    assume that the words are the same length.
    '''
    diffs = 0
    for i in range(len(word1)):
        if word1[i] != word2[i]:
            diffs += 1
    if diffs == 1:
        return True
    else:
        return False

def oneDifferent(word1,word2):
    '''
    return true if the words are different by exactly one character otherwise false
    assume that the words are the same length.
    '''
    diffs = 0
    i = 0
    wlen = len(word1)
    while i < wlen and diffs <= 1:
        if word1[i] != word2[i]:
            diffs += 1
        i += 1
    return diffs == 1

def makeRegex(word):
    '''
    Using this regular expression, which is compiled once at the start 
    of findAllOneDifferent, is a  nice speedup over using either of the
    oneDifferent methods defined above.
    '''
    pat = r''
    for i in range(len(word)):
        pat = pat + r'(' + word[:i] + r'\w' + word[i+1:] + r')|'
    return pat[:-1]

used = set()

def findAllOneDifferent(word,wlist,used):
    pat = re.compile(makeRegex(word))
    res = [w for w in wlist if pat.match(w) and w not in used]

#    return sorted(res, key=goalDiff)
    return res


def createStacks(currentStack,queue,used,goal,wlist):
    newWords = findAllOneDifferent(currentStack[0],wlist,used)
    for i in newWords:
        newStack = currentStack[:]
        newStack.insert(0,i)
        used.add(i)
        if i == goal:
            return newStack
        else:
            queue.append(newStack)

def goalDiff(w):
    ct = 0
    for i in range(len(w)):
        if w[i] == end[i]:
            ct += 1
    return len(w) - ct

#print findAllOneDifferent('oil',threeLetterWords,used)

start = 'stone'
end = 'water'
used.add(start)

queue = []
wlist = {}
wlist[3] = threeLetterWords
wlist[4] = fourLetterWords
wlist[5] = fiveLetterWords

st_time = time.time()
res =createStacks([start],queue,used,end,wlist[5])
while not res:
    res = createStacks(queue.pop(0),queue,used,end,wlist[5])

et_time = time.time()
print(res)
print(et_time-st_time)

