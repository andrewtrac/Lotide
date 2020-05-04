const eqArrays = require('./eqArrays')

  
const assertArraysEqual = function(firstArray, secondArray, expected) {
  let message = '';
  if (eqArrays(firstArray, secondArray) === expected) {
    message = `👍 Assertion Passed: [${eqArrays(firstArray, secondArray)}] === [${expected}]`;
    console.log(message);
  } else {
    message = `👎 Assertion Failed: [${eqArrays(firstArray, secondArray)}] !== [${expected}]`;
    console.log(message);
  }
};


module.exports = assertArraysEqual;