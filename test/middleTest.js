const assert = require('chai').assert;
const middle = require('../middle')

  describe('#middle', () => {

    it('Returns the second and third element in an array with four elements', () => {
        assert.deepEqual(middle([1,2,3,4]),[2,3])
    })

    it('Returns the second element in a three element array', () => {
        assert.deepEqual(middle([1,2,3]),[2])
    })

  })
