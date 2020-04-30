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

/* Create a callback function that takes an object
Declare function
for in loop to loop through each key
Set a conditional statement to access the callback function to break the iteration
*/

const findKey = function(inputObject, callBackFunction) {
  for (let key in inputObject) {
    if (callBackFunction(inputObject[key])) {
      return key;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 5 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5), 'Ora');

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: -5 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === -5), 'Ora');


