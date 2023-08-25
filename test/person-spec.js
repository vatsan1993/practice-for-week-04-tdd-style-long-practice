// Your code here
const expect = require('chai').expect;

const Person = require('../problems/person');

describe('Testing Person Class', () => {
  let person;
  let person2;
  before(() => {
    person = new Person('Max', 20);
    person2 = new Person('Jake', 20);
  });

  it('constructor - the name and the age are properly set.', () => {
    let expectedName = 'Max';
    let expectedAge = 20;
    let actualName = person.name;
    let actualAge = person.age;
    expect(actualName).to.be.equal(expectedName);
    expect(actualAge).to.be.equal(expectedAge);
  });

  it('sayHello - should return name of the person with greetings', () => {
    let expected = 'Max, Hello!';
    let actual = person.sayHello();
    expect(actual).to.be.equal(expected);
  });

  it('visit - should return  who visits who', () => {
    let expected = 'Max visited Jake';
    let actual = person.visit(person2);
    expect(actual).to.equal(expected);
  });

  it('switchVisit - should return the otherPerson visiting the first person ', () => {
    let expected = 'Jake visited Max';
    let actual = person.switchVisit(person2);
    expect(actual).to.equal(expected);
  });
  it('update - should update the details', () => {
    person.update({ name: 'Bill', age: 21 });
    let expectedName = 'Bill';
    let expectedAge = 21;
    expect(person.name).to.be.equal(expectedName);
    expect(person.age).to.be.equal(expectedAge);
  });
  it('update - should throw an error if the data is not an object', () => {
    expect(() => {
      person.update('bill');
    }).to.throw(TypeError);
  });

  it('update - should throw an error if name or age doesnt exit', () => {
    expect(() => {
      person.update({ name: 'Bill' });
    }).to.throw(TypeError);
  });

  it('tryUpdate - should return true for valid object', () => {
    const result = person.tryUpdate({ name: 'Brock', age: 22 });
    expect(result).to.be.true;
  });

  it('tryUpdate - should return false for invalid data in object', () => {
    const result = person.tryUpdate({ age: 22 });
    expect(result).to.be.false;
  });

  it('tryUpdate - should return false non object values', () => {
    const result = person.tryUpdate('james');
    expect(result).to.be.false;
  });

  it('greetAll - should return an array with all greetings', () => {
    let data = [person, person2];
    let result = Person.greetAll(data);
    expect(result).to.include('Brock, Hello!');
    expect(result).to.include('Jake, Hello!');
  });
});
