let {assert} = require('chai');
let {lookupChar} = require('./03.charLookup.js');

describe('lookupChar', function () {
    it('should return the character at the given index', function () {
        assert.equal(lookupChar('abcd', 0), 'a');
        assert.equal(lookupChar('abcd', 1), 'b');
    });
    it('should return undefined if the index is out of bounds', function () {
        assert.equal(lookupChar('abcd', 5), "Incorrect index");
        assert.equal(lookupChar('abcd', -1),"Incorrect index");
    });
    it('should return undefined if the first parameter is not a string', function () {
        assert.equal(lookupChar(123, 0), undefined);
        assert.equal(lookupChar(null, 0), undefined);
    });
    it('should return undefined if the second parameter is not a number', function () {
        assert.equal(lookupChar('abcd', 'a'), undefined);
        assert.equal(lookupChar('abcd', null), undefined);
    });
    it('should return undefined if the index is floating point number', function () {
        assert.equal(lookupChar('abcd', 1.5), undefined);
        assert.equal(lookupChar('abcd', 2.4), undefined);
    });
})