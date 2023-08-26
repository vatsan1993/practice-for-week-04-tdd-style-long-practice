// Your code here
class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
  hasValidSideLengths() {
    return (
      this.side1 + this.side2 > this.side3 &&
      this.side1 + this.side3 > this.side2 &&
      this.side2 + this.side3 > this.side1
    );
  }
  validate() {
    this.isValid = this.hasValidSideLengths();
  }
  static getValidTriangles(triangles) {
    let arr = [];
    for (let triangle of triangles) {
      triangle.validate();
      if (triangle.isValid) {
        arr.push(triangle);
      }
    }
    return arr;
  }
}

class Scalene extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    this.isValidTriangle = super.hasValidSideLengths();
  }
  isScalene() {
    return (
      this.isValidTriangle &&
      this.side1 != this.side2 &&
      this.side2 != this.side3 &&
      this.side3 != this.side1
    );
  }
  //   validate() {
  //     this.isValidScalene = this.isScalene();
  //   }
}
module.exports = {
  Triangle,
  Scalene,
};
