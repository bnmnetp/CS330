def foodecorator(f):
    print('about to wrap function')
    def wrap(*args, **kwargs):
        print('calling wrapped function')
        return f(*args, **kwargs)

    return wrap

def foo(x,y,z=10):
    return x + y + z

foo = foodecorator(foo)

print(foo(10,20,30))

def bardecorator(x,y):
    print("decorating with parameters")
    def outerwrap(f):
        print("outerwrap only takes f")
        def wrap(*args, **kwargs):
            print("captured x = {} and y = {}".format(x,y))
            return f(*args, **kwargs)

        return wrap
    return outerwrap

@bardecorator(20,30)
def bar(a,b,c):
    return a*b*c

print('bar is defined')
#bar = bardecorator(10,20)(bar)
print('bar is now decorated',bar)
print('calling bar')
print(bar(2,3,4))

class classdecorator:
    def __init__(self,thefunc):
        print('class decorating')
        self.numCalls = 0
        self.fun = thefunc

    def __call__(self, *args, **kwargs):
        self.numCalls += 1
        return self.fun(*args,**kwargs)


@classdecorator
def baz(a,b):
    return a+b

for i in range(20):
    baz(i,20)

print("baz was called {} times".format(baz.numCalls))

@classdecorator
def fact(n):
    if n <= 1:
        return 1
    return n * fact(n-1)

print(fact(100))
print(fact.numCalls)



class memoizer:
    def __init__(self,thefunc):
        self.argdict = {}
        self.fun = thefunc

    def __call__(self,*args, **kwargs):
        if args in self.argdict:
            return self.argdict[args]
        else:
            res = self.fun(*args,**kwargs)
            self.argdict[args] = res
            return res
@classdecorator
@memoizer
def fib(n):
    if n <= 1:
        return 1
    else:
        return fib(n-1)+fib(n-2)

for i in range(30):
    print(i, fib(i))
    print(fib.numCalls)
