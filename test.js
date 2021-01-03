const assert = require('assert');
const { type } = require('os');
const { composition } = require('./composition');
const { getNumberPower } = require('./npower');
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

describe('data types limits', () => {
    it('should return 18,446,744,073,709,551,615', () => {
        const r = getNumberPower(2, 64) - 1n
        assert.strictEqual(typeof r, 'bigint')
        assert.strictEqual(r.toString()+"n", "18446744073709551615n");
    });

    it('should return 9,223,372,036,854,775,807', () => {
        const r = getNumberPower(2, 63) - 1n
        assert.strictEqual(typeof r, 'bigint')
        assert.strictEqual(r.toString()+"n", "9223372036854775807n");
    });

    it('should return 4,294,967,295', () => {
        const r = getNumberPower(2, 32) - 1n
        assert.strictEqual(typeof r, 'bigint')
        assert.strictEqual(r.toString()+"n", "4294967295n");
    });

    it('should return 2,147,483,647', () => {
        const r = getNumberPower(2, 31) - 1n
        assert.strictEqual(typeof r, 'bigint')
        assert.strictEqual(r.toString()+"n", "2147483647n");
    });

    it('should return 65,535', () => {
        const r = getNumberPower(2, 16) - 1n
        assert.strictEqual(typeof r, 'bigint')
        assert.strictEqual(r.toString()+"n", "65535n");
    });

    it('should return 32,767', () => {
        const r = getNumberPower(2, 15) - 1n
        assert.strictEqual(typeof r, 'bigint')
        assert.strictEqual(r.toString()+"n", "32767n");
    });

    it('should return 255', () => {
        const r = getNumberPower(2, 8) - 1n
        assert.strictEqual(typeof r, 'bigint')
        assert.strictEqual(r.toString()+"n", "255n");
    });

    it('should return 127', () => {
        const r = getNumberPower(2, 7) - 1n
        assert.strictEqual(typeof r, 'bigint')
        assert.strictEqual(r.toString(), "127");
    });

    it('MAX_SAFE_INTEGER should return 2^53-1=9007199254740991', () => {
        const r = getNumberPower(2, 53) - 1n
        assert.strictEqual(typeof r, 'bigint')
        assert.strictEqual(typeof Number.MAX_SAFE_INTEGER, 'number')
        assert.strictEqual(r.toString(), "9007199254740991");
        assert.strictEqual(r.toString(), Number.MAX_SAFE_INTEGER.toString());
    });

    it('test mimimum signed values', () => {
        let r = -getNumberPower(2, 7)
        assert.strictEqual(typeof r, 'bigint')
        assert.strictEqual(r, -128n);
        assert.strictEqual(r, ~(2n<<6n) + 1n);

        r = -(getNumberPower(2, 31))
        assert.strictEqual(typeof r, 'bigint')
        assert.strictEqual(r, -2147483648n);
        assert.strictEqual(r, ~(2n<<30n)+1n);
        assert.strictEqual(r.toString(), (2<<30).toString());

        r = -(getNumberPower(2, 63))
        assert.strictEqual(typeof r, 'bigint')
        assert.strictEqual(r.toString()+"n", "-9223372036854775808n");
        assert.strictEqual(r, ~(2n<<62n) + 1n);
        assert.strictEqual(r.toString(2), "-1000000000000000000000000000000000000000000000000000000000000000");
    });
});

describe('Googol', () => {
    it('should return 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 1 with 100 zeros length', () => {
        const r = getNumberPower(10, 100)
        assert.strictEqual(typeof r, 'bigint')
        assert.strictEqual(r.toString()+"n", "10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n");
    });
});