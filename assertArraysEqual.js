let eqArrays = function(firstArray, secondArray) {
  let output = true;
  firstArray.forEach(function(element, i) {
    !checker(element,secondArray[i]) ? output = false : output;
  });
  return output;
};
  
let checker = function(firstVar, secondVar) {
  if (firstVar === secondVar) {
    return true;
  } else {
    return false;
  }
};
  
const assertEqual = function(firstArray, secondArray, expected) {
  let message = '';
  if (eqArrays(firstArray, secondArray) === expected) {
    message = `👍 Assertion Passed: [${eqArrays(firstArray, secondArray)}] === [${expected}]`;
    console.log(message);
  } else {
    message = `👎 Assertion Failed: [${eqArrays(firstArray, secondArray)}] !== [${expected}]`;
    console.log(message);
  }
};

assertEqual([1, 2, 3], [1, 2, 3], true);
assertEqual([1, 2, 3], [3, 2, 1], false);