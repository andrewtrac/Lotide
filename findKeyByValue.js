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

/* Pseudocode
Create function findKeyByValue
define output as a string
create a for of loop to iterate through object keys
Check if object key's value matches second parameter
Return the key's name as a string
*/

const findKeyByValue = function(objectBeingScanned, valueInput) {
  let outputKey = undefined;
  for (let key in objectBeingScanned) {
    if (objectBeingScanned[key] === valueInput) {
      outputKey = key;
    }
  }
  return outputKey;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
};
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
