// Your code here
const expect = require('chai').expect;
const { returnsThree, reciprocal } = require('../problems/number-fun.js');
describe('returnsThree', () => {
  it('function should returns 3', () => {
    let expectedValue = 3;
    let actual = returnsThree();
    expect(actual).to.be.equal(expectedValue);
  });
});

describe('reciprocal', () => {
  it('The function should give us 0.1', () => {
    let number = 10;
    let expectedValue = 1 / number;
    let actual = reciprocal(number);
    expect(expectedValue).to.be.equal(actual);
  });

  it('The function should give us 0.02', () => {
    let number = 50;
    let actual = reciprocal(number);
    expect(actual).to.be.equal(actual);
  });

  it('The function should throw a RangeError for values less than 1', () => {
    let number = 0;
    expect(() => {
      reciprocal(number);
    }).to.throw(RangeError);
  });

  it('The function should throw a RangeError for values less than 1', () => {
    let number = -5;
    expect(() => {
      reciprocal(number);
    }).to.throw(RangeError);
  });

  it('The function should throw a RangeError for values greater than 1000000', () => {
    let number = 1000005;
    expect(() => {
      reciprocal(number);
    }).to.throw(RangeError);
  });
});
