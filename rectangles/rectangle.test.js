var Rectangle = require("./Rectangle");

test.only("Rectangle.getArea() should return 8 for values 2 and 4", function() {
  var r = new Rectangle(2, 4);
  expect(r.getArea()).toEqual(8);
});

test.only("Rectangle.getArea() should return 50 for values 5 and 10", function() {
  var r = new Rectangle(5, 10);
  expect(r.getArea()).toEqual(50);
});

test.only("Rectangle.getPerimeter() should return 12 for values 2 and 4", function() {
  var r = new Rectangle(2, 4);
  expect(r.getPerimeter()).toEqual(12);
});

test.only("Rectangle.getPerimeter() should return 30 for values 5 and 10", function() {
  var r = new Rectangle(5, 10);
  expect(r.getPerimeter()).toEqual(30);
});
