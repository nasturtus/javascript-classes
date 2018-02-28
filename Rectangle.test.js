var Rectangle = require("./Rectangle");

test.only("Rectangle.getArea(2, 4) should return 8", function() {
  var r = new Rectangle(2, 4);
  expect(r.getArea()).toEqual(8);
});

test.only("Rectangle.getArea(5, 10) should return 50", function() {
  var r = new Rectangle(5, 10);
  expect(r.getArea()).toEqual(50);
});
