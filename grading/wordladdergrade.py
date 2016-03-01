from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait # available since 2.4.0
from selenium.webdriver.support import expected_conditions as EC # available since 2.26.0
import re

# Create a new instance of the Firefox driver
driver = webdriver.Firefox()

# go to a page by URL
done = ["http://knuth.luther.edu/~alcilo01/ladder.html","http://knuth.luther.edu/~hedrsa01/wordladder","http://knuth.luther.edu/~dontis01/wordladder/","knuth.luther.edu/~orteth01/wordladder/wordladder.html","http://knuth.luther.edu/~hrusza01/WordLadder.html","knuth.luther.edu/~vancti01/wordladder.html","http://knuth.luther.edu/~nguymi01/wordladder/backup2/temp.html","http://knuth.luther.edu/~tinger01/wordladder/","http://knuth.luther.edu/~aschza01/wordladder.cgi","http://knuth.luther.edu/~richco01/wordLadder/wordLadder.html","http://knuth.luther.edu/~mcrosa01/wordladder","http://knuth.luther.edu/~dotser02/wordladder.html","http://knuth.luther.edu/~gerisc01/ladder.html",]
urls = ["knuth.luther.edu/~orteth01/wordladder/wordladder.html","http://knuth.luther.edu/~andejo18/js/wordladder.html","knuth.luther.edu/~rubima01/wordladder.html","http://knuth.luther.edu/~smitau01/wordLadder.html","http://knuth.luther.edu/~nowoja01/wordladder/"
]

def testLadder(url,start,end,wlen,wt):
    name = re.match(r'http://.*/~(.*?)/.*',url).group(1)
    print "start: %s end: %s for: %s" % (start, end, name)
    driver.get(url)
    wld = {3:"three",4:"four",5:"five"}

    inputs = driver.find_elements_by_tag_name("input")

    n = 0
    go = None
    for i in inputs:
        if i.get_attribute("type") == "text":
            if n == 0:
                i.send_keys(start)
                n += 1
            else:
                i.send_keys(end)
        if i.get_attribute("type") == "submit" or i.get_attribute("type") == "button" :
            go = i

    if not go:
        button = driver.find_element_by_tag_name("button")
        if button:
            go = button

    options = driver.find_elements_by_tag_name("option")
    for o in options:
        if str(wlen) in o.get_attribute("value") or wld[wlen] in o.get_attribute("value"):
            o.click()
    if go:
        go.click()

    else:
        print "couldn't find the go button"

    found = False
    try:
        WebDriverWait(driver,wt).until(EC.presence_of_element_located((By.TAG_NAME,"tr")))
        print "found it"
        found = True
        rows = driver.find_elements_by_tag_name("tr")
    except:
        print "no table here"

    if not found:
        rows = driver.find_elements_by_tag_name("li")
        if rows:
            found = True
    if not found:
        rows = driver.find_elements_by_tag_name("p")
        if rows:
            found = True
    if not found:
        rows = driver.find_elements_by_tag_name("span")
        if rows:
            found = True
    if not found:
        rows = driver.find_elements_by_tag_name("h3")
        if rows:
            found = True

    for r in rows:
        print r.text

    if not found:
        raise ValueError("timed out")

for url in urls:
    try:
        testLadder(url,"oil","owl",3,2)
        testLadder(url,"oil","own",3,5)
        testLadder(url,"oil","gas",3,5)
        testLadder(url,"pail","pain",4,30)
        testLadder(url,"bread","break",5,30)
        testLadder(url,"pail","pale",4,30)
        testLadder(url,"bread","brand",5,30)
        testLadder(url,"zany","pope",4,30)
        testLadder(url,"bread","brake",5,30)
        testLadder(url,"bread","toast",5,30)
        print "-----------------------"
    except:
        print "taking too long, skipping rest of tests"
        print "-----------------------"

driver.quit()