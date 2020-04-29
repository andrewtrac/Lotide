//  http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html

const assertEqual = function(actual, expected) {
    console.log("assertEqual -> expected", expected)
    console.log("assertEqual -> actual", actual)
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
Declare the countLetters function
Create object as a placeholder for the keys and values
Iterate through the string of letters
If there's a space, skip
If there's a letter, and the letter has not been created, create the letter as a key
If it has been created, count the letter.
Return object */

const countLetters = function(inputString) {
 let numberOfLetters = {} 
 for (let letter of inputString) {
   if (letter === ' ') {
     numberOfLetters
   } else if (numberOfLetters[letter]) {
     numberOfLetters[letter] += 1
   } else {
     numberOfLetters[letter] = 1
   }
 }
 return numberOfLetters
}


console.log(countLetters('aa'))
