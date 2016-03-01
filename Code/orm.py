class ColumnType:
    pass

class Integer(ColumnType):
    def __init__(self,primary_key=False,null=True):
        self.pk = primary_key
        self.null = null

    def loctest(self):
        print(locals())
        print(globals())

    def __str__(self):
        ret = "integer "
        if not self.null:
            ret + " not null "
        if self.pk:
            ret += "primary key"
        ret += ","

        return ret

x = Integer()
x.loctest()


class Foo:
    __tablename__ = 'foo'
    x = Integer(primary_key=True)
    y = Integer()
    z  = 10

# blah_name = [ k for k,v in globals().items() if v is blah]
def variable_for_value(value):
    for n,v in globals().items():
        if v is value:
            return n
    return None

blah = Foo()
print("the name of ___ is ", variable_for_value(blah))

def makeTable(obj):
    tableName = getattr(obj,'__tablename__')
    if not tableName:
        tableName = variable_for_value(obj)
    print("create table %s (" % tableName)
    for name in dir(obj):
        if isinstance(getattr(Foo,name),ColumnType):
            print(name,getattr(Foo,name))

    print(");")
makeTable(Foo)



def foo():
    x = 10
    def bar():
        y = 11
        print(locals())
        print("in bar",dir())

    print("in foo", dir(bar))

    bar()

foo()
