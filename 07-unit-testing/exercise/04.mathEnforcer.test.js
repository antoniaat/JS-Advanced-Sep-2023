let {assert} = require('chai');
let {mathEnforcer} = require('./04.mathEnforcer');

describe('mathEnforcer.addFive', function () {
    describe('addFive',  () => {
        it('should return undefined if the first parameter is not a number', function () {
            assert.equal(mathEnforcer.addFive('a'), undefined);
            assert.equal(mathEnforcer.addFive({}), undefined);
            assert.equal(mathEnforcer.addFive([0, 2]), undefined);
        });
        it('should add 5 to the number if the first parameter is a number', function () {
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.equal(mathEnforcer.addFive(10), 15);
            assert.equal(mathEnforcer.addFive(2.1), 7.1);
        });
        it('should add 5 to the number if the first parameter negative number', function () {
            assert.equal(mathEnforcer.addFive(-5), 0);
            assert.equal(mathEnforcer.addFive(-10),-5);
            assert.equal(mathEnforcer.addFive(-5), 0);
        });
    });
    describe('subtractTen', () => {
        it('should return undefined if the first parameter is not a number', function () {
            assert.equal(mathEnforcer.subtractTen('a'), undefined);
            assert.equal(mathEnforcer.subtractTen({}), undefined);
        });
        it('should return num - 10 if the parameter is a number', function () {
            assert.equal(mathEnforcer.subtractTen(10), 0);
            assert.equal(mathEnforcer.subtractTen(12), 2);
            assert.equal(mathEnforcer.subtractTen(12.5), 2.5);
        });
        it('should return num - 10 if the parameter is a  negative number', function () {
            assert.equal(mathEnforcer.subtractTen(-10), -20);
            assert.equal(mathEnforcer.subtractTen(-12), -22);
            assert.equal(mathEnforcer.subtractTen(-12.1), -22.1);
        });
    });
    describe('sum', () => {
        it('should return undefined if the first or second parameter is not a number', function () {
            assert.equal(mathEnforcer.sum('a', 5), undefined);
            assert.equal(mathEnforcer.sum(3, null), undefined);
        });
        it('should return undefined if the parameters are not numbers', function () {
            assert.equal(mathEnforcer.sum('a', 'b'), undefined);
            assert.equal(mathEnforcer.sum(null, null), undefined);
        });
        it('should return the sum of the two numbers if both parameters are numbers', function () {
            assert.equal(mathEnforcer.sum(5, 10), 15);
            assert.equal(mathEnforcer.sum(10, 5), 15);
            assert.equal(mathEnforcer.sum(2.1, 5.0), 7.1);
        });
        it('should return the sum of the two numbers if both parameters are negative numbers', function () {
            assert.equal(mathEnforcer.sum(-5, -10), -15);
            assert.equal(mathEnforcer.sum(-10, -5), -15);
            assert.equal(mathEnforcer.sum(-2.1, -5.0), -7.1);
        });
    });
});
