var Circle = require("./Circle");

test.only("Circle.area() should return 3.1 for radius => 1", function() {
  var c = new Circle(1);
  expect(c.area()).toEqual(3.1);
});

test.only("Circle.area() should return 12.6 for radius => 2", function() {
  var c = new Circle(2);
  expect(c.area()).toEqual(12.6);
});

test.only("Circle.area() should return 28.3 for radius => 3", function() {
  var c = new Circle(3);
  expect(c.area()).toEqual(28.3);
});

test.only("Circle.perimeter() should return 6.3 for radius => 1", function() {
  var c = new Circle(1);
  expect(c.perimeter()).toEqual(6.3);
});

test.only("Circle.perimeter() should return 12.6 for radius => 2", function() {
  var c = new Circle(2);
  expect(c.perimeter()).toEqual(12.6);
});

test.only("Circle.perimeter() should return 18.9 for radius => 3", function() {
  var c = new Circle(3);
  expect(c.perimeter()).toEqual(18.8);
});
