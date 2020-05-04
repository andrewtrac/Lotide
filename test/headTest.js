/*const assertEqual = require('../assertEqual')
const head = require('../head')

assertEqual(head(["Hello"]), "Hello");
*/

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns undefined for an empty array", () => {
      assert.strictEqual(head([]), undefined)
  })

  it("returns 'Hello' from the string, 'Hello'", () => {
      assert.strictEqual(head(['Hello', '1']), 'Hello')
  })

});