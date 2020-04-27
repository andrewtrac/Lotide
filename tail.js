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
  
const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);