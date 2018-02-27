def foodecorator(myfunc):
    print('about to wrap {}'.format(myfunc))
    def wrapper(*args, **kwargs):
        print('about to call wrapped function')
        return myfunc(*args,**kwargs)

    return wrapper

@foodecorator
def foo(a,b):
    print("hello from foo")
    return a+b

#foo = foodecorator(foo)
print(foo)
print('about to call foo')
print(foo(4,5))


class classdecorator:

    def __init__(self, myfunc):
        print("starting decorator process")
        self.numCalls = 0
        self.func = myfunc

    def __call__(self, *args, **kwargs):
        self.numCalls += 1
        return self.func(*args, **kwargs)

@classdecorator
def newfunc(x,y):
    print("hello from newfunc")
    return x*y

print(newfunc)
print(newfunc(3,4))
print(newfunc.numCalls)



class memoizer:

    def __init__(self, thefunc):
        self.fun = thefunc
        self.argdict = {}

    def __call__(self, *args, **kwargs):
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
        return fib(n-1) + fib(n - 2)

for i in range(40):
    print(i, fib(i), fib.numCalls)


def bardecorator(x,y):
    print("decorating with parameters is fun!")
    def outerwrap(fun):
        print("outerwrap takes f as a parameter x={} and y={}".format(x,y))
        def wrap(*args, **kwargs):
            print("captured x = {} and y = {}".format(x,y))
            return fun(*args,**kwargs)
        return wrap
    return outerwrap

@bardecorator(20,30)
def bar(a,b,c):
    return a * b * c

print("about to call bar")
print(bar)
bar(3,4,5)
