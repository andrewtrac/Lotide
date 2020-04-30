const words = ["ground", "control", "to", "major", "tom"]

const map = function (array, callback) {
  const results = []
    for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[2]);

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


assertArraysEqual(results1, ['g','c','t','m','t'], true)
assertArraysEqual(results2, ['r','o','o','a','o'], true)
assertArraysEqual(results3, ['o','n','o ','a','o'], false)
console.log(results2)