function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  if (n < 1 || n > 1000000) {
    throw new RangeError('Values out of Range');
  }
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal,
};
