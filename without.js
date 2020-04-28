const eqArrays = function(firstArray, secondArray) {
  let output = true;
  firstArray.forEach(function(element, i) {
    !checker(element,secondArray[i]) ? output = false : output;
  });
  return output;
};
    
const checker = function(firstVar, secondVar) {
  return (firstVar === secondVar) 
};
    
const assertEqual = function(firstArray, secondArray, expected) {
  if (eqArrays(firstArray, secondArray) === expected) {
    console.log(`👍 Assertion Passed: [${eqArrays(firstArray, secondArray)}] === [${expected}]`)
  } else {
    console.log(`👎 Assertion Failed: [${eqArrays(firstArray, secondArray)}] !== [${expected}]`);
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

// research reduce function and map 
// look in to asycronous order