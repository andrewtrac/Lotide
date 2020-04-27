const assertEqual = function(actual, expected) {
  let message = '';
  if (actual === expected) {
    message = '👍 Assertion Passed: [' + actual + '] === [' + expected + ']';
    console.log(message);
  } else {
    message = '👎 Assertion Failed: [' + actual + '] !=== [' + expected + ']';
    console.log(message);
  }

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, '1');



