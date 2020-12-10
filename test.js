const assert = require('assert');
const { composition } = require('./11111111x11111111');

describe('11111111x11111111=12345678987654321n', () => {
    it('should return 12345678987654321n', () => {
        r = composition(111111111, 111111111)
        assert.strictEqual(typeof r, 'bigint')
        assert.strictEqual(r.toString()+"n", "12345678987654321n");
    });
});
   