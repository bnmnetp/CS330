#!/usr/bin/env python3.4
class Foo:
    x = 10

    def __init__(self):
        self.y = 11

    def bar(self):
        return self.x * self.y

    def info(self):
        print(dir(self))
        for i in dir(self):
            print(i, type(getattr(self,i)))

f = Foo()
f.info()


def info(object, spacing=10, collapse=1):
    """Print methods and doc strings.

    Takes module, class, list, dictionary, or string."""
    methodList = [method for method in dir(object) if callable(getattr(object, method))]
    processFunc = collapse and (lambda s: " ".join(s.split())) or (lambda s: s)
    print "\n".join(["%s %s" %
                      (method.ljust(spacing),
                       processFunc(str(getattr(object, method).__doc__)))
                    for method in methodList])
