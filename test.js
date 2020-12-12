const assert = require('assert');
const { composition } = require('./12345678987654321');
const { checkUniqueMagicNumbers } = require('./m');

describe('11111111x11111111=12345678987654321n', () => {
    it('should return 12345678987654321n', () => {
        const r = composition(111111111, 111111111)
        assert.strictEqual(typeof r, 'bigint')
        assert.strictEqual(r.toString()+"n", "12345678987654321n");
    });
});

describe('check unique Magic number (programming)', () => {
    it('should return 42, 42, 42', () => {
        const r = Promise.resolve(checkUniqueMagicNumbers()).then(
            result => {
                assert.strictEqual(result.count, 42);
                assert.strictEqual(result.keysLen, 42);
                assert.strictEqual(result.valuesLen, 42);
            },
            error => console.error("Rejected: " + error)
        );
        
        assert.notStrictEqual(r, undefined)
    });
});