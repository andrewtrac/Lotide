const eqArrays = function(firstArray, secondArray) {
  let output = true;
  if (firstArray.length !== secondArray.length) {
    output = false;
  } else {
    firstArray.forEach(function(element, i) {
      (element !== secondArray[i]) ? output = false : output;
    });
  }
  return output;
};
  
const assertEqual = function(actual, expected) {
  let message = '';
  if (actual === expected) {
    message = `👍 Assertion Passed: [${actual}] === [${expected}]`;
    console.log(message);
  } else {
    message = `👎 Assertion Failed: [${actual}] !== [${expected}]`;
    console.log(message);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  let outcome = true;
  if (!object1Keys.length === object2Keys.length) {
    outcome = false;
  } else {
    for (let key of object1Keys) {
      if (Array.isArray(object1[key])) {
        outcome = eqArrays(object1[key], object2[key]);
      } else if (!object1[key] === object2[key]) {
        outcome = false;
      }
    }
  }
  return outcome;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let message = '';
  if (inspect(actual) === inspect(expected)) {
    message = `👍 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`;
    console.log(message);
  } else {
    message = `👎 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`;
    console.log(message);
  }
};

assertObjectsEqual({a:3}, {a:3});

 