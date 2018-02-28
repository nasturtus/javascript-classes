class SimpleCalculator {
  constructor(n) {
    if (arguments.length === 0) {
      this.value = 0;
    } else {
      this.value = n;
    }
  }

  add(n) {
    this.value += n;
    return this;
  }

  subtract(n) {
    this.value -= n;
    return this;
  }

  multiply(n) {
    this.value *= n;
    return this;
  }

  divide(n) {
    this.value /= n;
    return this;
  }
}

var calculator = new SimpleCalculator();
console.log(
  calculator
    .add(12)
    .multiply(2)
    .divide(2)
);

console.log(
  calculator
    .add(100)
    .multiply(2)
    .divide(2)
);
