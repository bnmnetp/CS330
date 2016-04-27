import random

wordFile = open("popular_words.dat",'r')
wordlist = wordFile.readlines()

def altscore(word):
   score = 0.0
   leftHand = "asdfgzxcvbqwert"
   rightHand = "lkjhpoiuymn"
   for i in range(len(word)-1):
       if word[i] in leftHand and word[i+1] in rightHand:
           score += 1
       elif word[i] in rightHand and word[i+1] in leftHand:
           score += 1
       elif word[i] == word[i+1]:
           score += 1

   return score / (len(word)-1)

#goodwords = [word[:-1] for word in wordlist if altscore(word) >= 0.7]

def makePassword(goodwords,maxLen):
    done = False
    while not done:
        passlist = []
        for i in range(4):
            passlist.append(goodwords[random.randrange(len(goodwords))])
        wlen = len("".join(passlist))
        if wlen <= maxLen and wlen > 10:
            done = True
            passlist.append(wlen)
    return passlist

def wordFilter(word,minl,maxl,alt):
    w = word[:-1]
    if len(w) >= minl and len(w) <= maxl:
        if alt:
            return altscore(w) >= 0.7
        else:
            return True
    return False

def makePasswordList(minLen,maxLen,maxPw,alt):
    goodwords = [word[:-1] for word in wordlist
                     if wordFilter(word,minLen,maxLen,alt)]

    wlist = []
    for i in range(10):
        wlist.append(makePassword(goodwords,maxPw))
    return wlist

def doLetterSubs(pwlist):
    for row in pwlist:
        i = 0
        done = False
        while i < len(row)-1 and not done:
            newword = row[i].replace('e','3')
            newword = newword.replace('o','0')
            if newword != row[i]:
                row[i] = newword
                done = True
            i += 1



if __name__ == '__main__':
    print(makePasswordList(4,7,25,True))
