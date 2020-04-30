/*We will be implementing a function quite similar to this one, but isn't present in their library: takeUntil.

It will take in two parameters as well:
The array to work with
The callback (which Lodash calls "predicate")

The function will return a "slice of the array with elements taken from the beginning." 
It should keep going until the callback/predicate returns a truthy value.
*/

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
 

const takeUntil = function(inputArray, callback) {
  let outputArray = []
  for(let item of inputArray) {
      if(callback(item)) {
      break;
      }  
      outputArray.push(item)
  }
  return outputArray
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

    
assertArraysEqual(takeUntil(data1, x => x < 0),[1, 2, 5, 7, 2], true);