const assertEqual = require('./assertEqual')

const eqArrays = function (firstArray, secondArray) {
  let output = true
  firstArray.forEach(function(element, i) {
    !checker(element,secondArray[i]) ? output = false : output 
    })
  return output
}

const checker = function (firstVar, secondVar) {
    if (firstVar === secondVar) {
        return true;
    } else {
        return false;
    }
}

  
  module.exports = eqArrays;
