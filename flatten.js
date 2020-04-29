/* Pseudocode
declare function as a flatten
iterate through the elements
push elements in to new array
if element is array, move in to nested loop
pushed nested array elements in to new array
*/

let flatten = function(array) {
  let newArray = [];
  array.forEach(function(element) {
    if (Array.isArray(element)) {
      element.forEach(function(nestedElement) {
        newArray.push(nestedElement);
      });
    } else {
      newArray.push(element);
    }
  });
  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));