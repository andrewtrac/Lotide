function eqArrays(firstArray, secondArray) {
  let output = true
  firstArray.forEach(function(element, i) {
    !checker(element,secondArray[i]) ? output = false : output 
    })
  return output
}

function checker(firstVar, secondVar) {
    if (firstVar === secondVar) {
        return true;
    } else {
        return false;
    }
}

/* Ternary operators
You may be asking yourself: so what's up with the ?s and :s anyway?
output === "" ? num : output is using JavaScript's ternary operator. Check out the MDN docs to learn more about it. */


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
  
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);  
  
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);  
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);  
  
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);