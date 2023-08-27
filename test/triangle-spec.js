// Your code here
const expect = require('chai').expect;
const { Triangle, Scalene, Isosceles } = require('../problems/triangle.js');

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

describe('Testing Scalene Class', () => {
  let scalene;
  let side1, side2, side3;
  let scalene2;
  before(() => {
    side1 = 11;
    side2 = 12;
    side3 = 13;
    scalene = new Scalene(side1, side2, side3);
    scalene2 = new Scalene(10, 10, 10);
  });
  it('Scalene - should set the properties correctly', () => {
    expect(scalene).to.have.own.property('side1');
    expect(scalene).to.have.own.property('side2');
    expect(scalene).to.have.own.property('side3');
    expect(scalene).to.have.own.property('isValidTriangle');
    expect(scalene.side1).to.be.equal(side1);
    expect(scalene.side2).to.be.equal(side2);
    expect(scalene.side3).to.be.equal(side3);
    expect(scalene.isValidTriangle).to.be.true;
  });
  it('isIsosceles- should check of the triangle is scalene or not', () => {
    expect(scalene.isScalene()).to.be.true;
    expect(scalene2.isScalene()).to.be.false;
  });

  it('validate - sets a new property based on if its a scalene', () => {
    scalene.validate();
    scalene2.validate();
    // expect(scalene).to.have.own.property('validate');
    expect(scalene.isValidScalene).to.be.true;
    expect(scalene2.isValidScalene).to.be.false;
  });
});

describe('Testing Isosceles Class', () => {
  let isosceles;
  let side1, side2, side3;
  let isosceles2;
  before(() => {
    side1 = 11;
    side2 = 12;
    side3 = 12;
    isosceles = new Isosceles(side1, side2, side3);
    isosceles2 = new Isosceles(10, 10, 10);
  });
  it('Isosceles - should set the properties correctly', () => {
    expect(isosceles).to.have.own.property('side1');
    expect(isosceles).to.have.own.property('side2');
    expect(isosceles).to.have.own.property('side3');
    expect(isosceles).to.have.own.property('isValidTriangle');
    expect(isosceles.side1).to.be.equal(side1);
    expect(isosceles.side2).to.be.equal(side2);
    expect(isosceles.side3).to.be.equal(side3);
    expect(isosceles.isValidTriangle).to.be.true;
  });
  it('isScalene - should check of the triangle is scalene or not', () => {
    expect(isosceles.isIsosceles()).to.be.true;
    expect(isosceles2.isIsosceles()).to.be.false;
  });

  it('validate - sets a new property based on if its a scalene', () => {
    isosceles.validate();
    isosceles2.validate();
    // expect(scalene).to.have.own.property('validate');
    expect(isosceles.isValidIsosceles).to.be.true;
    expect(isosceles2.isValidIsosceles).to.be.false;
  });
});
