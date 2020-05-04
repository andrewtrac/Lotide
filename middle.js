const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

const middle = function(inputArray2) {
  let newArray = [];
  if (inputArray2.length < 3) {
    return newArray;
  } else if (inputArray2.length % 2 === 0) {
    newArray.push(inputArray2[inputArray2.length / 2 - 1]);
    newArray.push(inputArray2[inputArray2.length / 2]);
  } else {
    newArray.push((inputArray2[Math.floor(inputArray2.length / 2)]));
  }
  return newArray;
};

module.exports = middle




    

