var Set = function() {}
Set.prototype.add = function(o) { this[o] = true; }
Set.prototype.remove = function(o) { delete this[o]; }
Set.prototype.contains = function(o) { return o in this; }

x = new Set()
x.add('x')
x.add('y')
x.add('x')
console.log(x.contains('x'));
console.log(x.contains('z'));
console.log('x' in x);