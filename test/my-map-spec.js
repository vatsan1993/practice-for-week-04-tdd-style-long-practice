// Your code here
const expect = require('chai').expect;
const myMap = require('../problems/my-map.js');
describe('mymap testing', () => {
  it('testing add 10 map - should give us a new array with values added with 10', () => {
    let arr = [1, 2, 3];
    let newArr = myMap(arr, (val) => val + 10);
    expect(Array.isArray(newArr)).to.be.true;
    expect(newArr).to.not.equal(arr);
    for (let i = 0; i < arr.length; i++) {
      expect(newArr[i]).to.equal(arr[i] + 10);
    }
  });
  it('testing multiply 10 map - should give us a new array with values multiply with 10', () => {
    let arr = [1, 2, 3];
    let newArr = myMap(arr, (val) => val * 10);
    expect(Array.isArray(newArr)).to.be.true;
    expect(newArr).to.not.equal(arr);
    for (let i = 0; i < arr.length; i++) {
      expect(newArr[i]).to.equal(arr[i] * 10);
    }
  });
});
