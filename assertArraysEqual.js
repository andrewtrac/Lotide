let eqArrays = function(firstArray, secondArray) {
  let output = true;
  firstArray.forEach(function(element, i) {
    (element !== secondArray[i]) ? output = false : output;
  });
  return output;
};

  
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

assertArraysEqual([1, 2, 3], [1, 2, 3], true);
assertArraysEqual([1, 2, 3], [3, 2, 1], false);