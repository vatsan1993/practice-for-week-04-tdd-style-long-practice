class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `${this.name}, Hello!`;
  }
  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }
  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }
  update(obj) {
    let keys = Object.keys(obj);
    if (typeof obj !== 'object') {
      throw new TypeError('The value has to be an object');
    } else if (keys.includes('name') && keys.includes('age')) {
      this.name = obj.name;
      this.age = obj.age;
    } else {
      throw new TypeError('The obj should have name and age props');
    }
  }
  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (err) {
      return false;
    }
  }
  static greetAll(data) {
    let arr = [];
    for (let person of data) {
      arr.push(person.sayHello());
    }
    return arr;
  }
}

module.exports = Person;
