function myMap(inputArray, callback) {
  // Your code here
  let newArr = [];
  for (let val of inputArray) {
    newArr.push(callback(val));
  }
  return newArr;
}

module.exports = myMap;
