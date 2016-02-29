
class MyClass:
    def __init__(self, name ):
        self.ivar1 = name


    def __call__(self, x, y):
        print("Hello: %s " % self.ivar1, 'lskdfjkkkkkkk')
        print("the sum is %d " % (x+y))


foo = MyClass('brad')

foo(2,9)
