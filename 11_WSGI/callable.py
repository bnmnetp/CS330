def callme(a,b):
    print(a,b)

print(callme)
callme(3,4)


class Maybe:
    def __call__(self,a,b):
        print(a,b)


callme = Maybe()

callme(7,8)


# gunicorn module:obj   (hellhero:app)
