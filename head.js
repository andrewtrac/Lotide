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
  


  const head = function (array) {
      return array[0]
  }
  
assertEqual(head([]), 5);
assertEqual(head(["Hello"]), "Hello");
  