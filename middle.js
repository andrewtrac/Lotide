/* Pseudocode:
- Establish middle function with parameter as an array
- Create newArray variable as empty
- If length is one or two, do not proceed
- If length is odd, return array that's middle
- If length is even, return two array's that's middle
*/

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
  

const middlelizer = function(inputArray2) {
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

assertArraysEqual(middlelizer([1,2,3,4]),[2,3], true);




    

