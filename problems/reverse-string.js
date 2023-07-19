module.exports = function reverseString(string) {
  // Your code here
  if (typeof string !== 'string') {
    throw new Error(
      'This function needs a string. But a different type of data provided.'
    );
  }
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    let char = string[i];
    reverse += char;
  }

  return reverse;
};
