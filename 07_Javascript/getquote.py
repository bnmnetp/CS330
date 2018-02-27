import requests
#sb2b3jk

quotestr = "http://download.finance.yahoo.com/d/quotes.csv?s=AAPL+MSFT&f=sbpo"

r = requests.get(quotestr)

print(r.status_code)
print(r.text)
