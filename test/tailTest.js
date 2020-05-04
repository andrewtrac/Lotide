const tail = require('../tail')
const assert = require('chai').assert

describe('#tail', () => {
    it("Returns '2' from an array of three elements", () => {
        const result = tail(["Hello", "Lighthouse", "Labs"]);
        assert.strictEqual(result.length, 2)
    })

    it("Returns 'Lighthouse' as the first element in an array.", () => {
        const result = tail(["Hello", "Lighthouse", "Labs"]);
        assert.strictEqual(result[0], 'Lighthouse')
    })

    it("Returns 'Labs' as the second element in an array.", () => {
        const result = tail(["Hello", "Lighthouse", "Labs"]);
        assert.strictEqual(result[1], 'Labs')
    })

    it('Return an array with the last two elements', () => {
        const result = tail(["Hello", "Lighthouse", "Labs"]);
        assert.deepEqual(result, ['Lighthouse', 'Labs'])
    })

})
