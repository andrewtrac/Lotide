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
  



/* Pseudocode
Define the letterPositions
iterate through the sentence for each letter
Check to see if the object has the existing letter, if not, create one
Input the index in to the key (push in to the data structure as an array?)
Return results 
*/


const letterPositions = function(sentence) {
  const results = {};
  for(let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      results
    } else if (results[sentence[i]]) {
      results[sentence[i]].push(i)
    } else {
      results[sentence[i]] = [i]
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1], true);