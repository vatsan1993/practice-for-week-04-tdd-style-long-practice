// Your code here
const expect = require('chai').expect;
const Triangle = require('../problems/triangle.js');

describe('Testing Triangle class', () => {
  let triangle;
  let side1, side2, side3;
  let triangle2;
  before(() => {
    side1 = 11;
    side2 = 12;
    side3 = 13;
    triangle = new Triangle(side1, side2, side3);
    triangle2 = new Triangle(10, 20, 30);
  });
  it('Triangle - Should set the sides correctly', () => {
    expect(triangle).to.have.own.property('side1');
    expect(triangle).to.have.own.property('side2');
    expect(triangle).to.have.own.property('side3');
    expect(triangle.side1).to.be.equal(side1);
    expect(triangle.side2).to.be.equal(side2);
    expect(triangle.side3).to.be.equal(side3);
  });
  it('getPerimeter - Should give us perimeter of the triangle', () => {
    expect(triangle.getPerimeter()).to.be.equal(side1 + side2 + side3);
  });
  it('hasValidSideLengths - Should verify if the sides are valid', () => {
    expect(triangle.hasValidSideLengths()).to.be.true;
    expect(triangle2.hasValidSideLengths()).to.be.false;
  });

  it('validate - should set a new property based on the sides of triangle.', () => {
    triangle.validate();
    triangle2.validate();

    expect(triangle.isValid).to.be.true;
    expect(triangle2.isValid).to.be.false;
  });

  it('getValidTriangles - should give you an array containing valid triangles.', () => {
    let data = [triangle, triangle2];
    let validTriangles = Triangle.getValidTriangles(data);

    expect(validTriangles.length).to.be.equal(1);
    expect(validTriangles).to.include(triangle);
  });
});
