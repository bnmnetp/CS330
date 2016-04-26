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

@classdecorator('myparameter')
def newfunc(x,y):
    print("hello from newfunc")
    return x*y

print(newfunc)
print(newfunc(3,4))
print(newfunc.numCalls)

