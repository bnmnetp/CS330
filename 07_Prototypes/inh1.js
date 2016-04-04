var Point = {
  x: 0,
  y: 0,
  print: function () { console.log(this.x, this.y); }
};

var p = {x: 10, y: 20, __proto__: Point};
p.print(); // 10 20
