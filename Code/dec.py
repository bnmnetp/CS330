
def foodecorator(f):
    print('about to wrap function')
    def wrap(*args, **kwargs):
        print('calling wrapped function')
        return f(*args, **kwargs)

    return wrap

@foodecorator
def foo(x,y,z=10):
    return x + y + z

#foo = foodecorator(foo)

print(foo(4,5))

class bardecorator:
    def __init__(self,f):
        self.fun = f

    def __call__(self, *args, **kwargs):
        print('hello')
        return self.fun(*args, **kwargs)


##@bardecorator
def bar(x):
    return x*x

bar = bardecorator(bar)
print(bar(10))


class decoratorWithArguments(object):

    def __init__(self, arg1, arg2, arg3):
        """
        If there are decorator arguments, the function
        to be decorated is not passed to the constructor!
        """
        print("Inside __init__()")
        self.arg1 = arg1
        self.arg2 = arg2
        self.arg3 = arg3

    def __call__(self, f):
        """
        If there are decorator arguments, __call__() is only called
        once, as part of the decoration process! You can only give
        it a single argument, which is the function object.
        """
        print("Inside __call__()")
        def wrapped_f(*args):
            print("Inside wrapped_f()")
            print("Decorator arguments:", self.arg1, self.arg2, self.arg3)
            return f(*args)
        return wrapped_f

@decoratorWithArguments("hello", "world", 42)
def sayHello(a1, a2, a3, a4):
    print('sayHello arguments:', a1, a2, a3, a4)

print("After decoration")

print("Preparing to call sayHello()")
sayHello("say", "hello", "argument", "list")
print("after first sayHello() call")
sayHello("a", "different", "set of", "arguments")
print("after second sayHello() call")


def static_var(varname, value):
    print('defining wrap function')
    def decorate(func):
        print('in decorate')
        def wrap(*args, **kwargs):
            print('in wrapped function')
            v = getattr(wrap,varname)
            v +=1
            setattr(wrap,varname,v)
            return func(*args,**kwargs)
        setattr(wrap, varname, value)
        return wrap
    return decorate

# equivalent to
# static_var('counter',0)(fact)
@static_var('counter',0)
def fact(n):
    if n < 1:
        return 1
    else:
        return n * fact(n-1)

print(fact(10))
print(fact.counter)
