class Rectangle {
  constructor(w, h) {
    this.width = w;
    this.height = h;
  }

  calcArea() {
    return this.width * this.height;
  }

  printArea() {
    console.log(`Area: ${this.calcArea()}`);
  }
}

let r = new Rectangle(4, 5);
console.log(r.width);
r.printArea();