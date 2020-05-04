const assertEqual = require('../assertEqual')
const head = require('../head')
const tail = require('../tail')


// Testing Assert Equal

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// Testing Head

assertEqual(head([]), 5);
assertEqual(head(["Hello"]), "Hello");

// Testing Tail

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3);
    