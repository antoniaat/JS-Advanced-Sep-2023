const {assert} = require('chai');
const {isOddOrEven} = require('./isOddOrEven.js');
describe("test with correct params", () => {
    it("should return ODD ", () => {
        assert.equal(isOddOrEven("123"), "odd");
    })
    it("should return EVEN ", () => {
        assert.equal(isOddOrEven("4356"), "even");
    })
    it("should return undefined ", () => {
        assert.equal(isOddOrEven([1]), undefined);
    })
})
