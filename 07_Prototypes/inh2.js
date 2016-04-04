function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype = {
  print: function () { console.log(this.x, this.y); }
};

var p = new Point(10, 20);
p.print(); // 10 20
