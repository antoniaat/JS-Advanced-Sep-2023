const {assert} = require('chai');
const {isOddOrEven} = require('./isOddOrEven.js');
describe("test with correct params", () => {
    it("must return ODD ", () => {
        assert.equal(isOddOrEven("123"), "odd");
    })
    it("must return EVEN ", () => {
        assert.equal(isOddOrEven("4356"), "even");
    })
    it("must return undefined ", () => {
        assert.equal(isOddOrEven([1]), undefined);
    })
})
