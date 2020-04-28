const eqArrays = function(firstArray, secondArray) {
  let output = true;
  firstArray.forEach(function(element, i) {
    !checker(element,secondArray[i]) ? output = false : output;
  });
  return output;
};
    
const checker = function(firstVar, secondVar) {
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

const without = function(sourceArray, itemsToRemove) {
  let newArray = [];
  sourceArray.forEach(function(element, i) {
    checker(element, itemsToRemove[i]) ? newArray : newArray.push(element);
  });
  return newArray;
};


//testing


without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

assertEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"], true);
assertEqual((without([1, 2, 3], [1])),[2, 3], true);