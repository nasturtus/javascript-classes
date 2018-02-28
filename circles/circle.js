class Rectangle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    //  return Math.fround(Math.PI * this.radius * this.radius)
    return parseFloat((Math.PI * this.radius * this.radius).toFixed(1));
  }

  perimeter() {
    return parseFloat((2 * Math.PI * this.radius).toFixed(1));
  }
}

module.exports = Rectangle;
