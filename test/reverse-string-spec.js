// Your code here
var expect = require('chai').expect;
const reverseString = require('../problems/reverse-string.js');
describe('reverseString', function () {
  it('should reverse a string.', function () {
    let string1 = 'fun';
    let expected = 'nuf';

    let actual = reverseString(string1);
    expect(actual).to.equal(expected);
  });
  it('should throw and error of the data is not a string', function () {
    let string1 = 10;
    expect(function () {
      reverseString(string1);
    }).to.throw();
  });
});
