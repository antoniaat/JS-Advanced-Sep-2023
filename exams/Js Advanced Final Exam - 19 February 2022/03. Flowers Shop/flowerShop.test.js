const flowerShop = require('./flowerShop');
const expect = require('chai').expect;

describe("Tests flowerShop object functionallity", function () {
    describe("test calcPriceOfFlowers method", function () {
        it("should return the multiplied price and quantity", function () {
            expect(flowerShop.calcPriceOfFlowers('roses', 5, 10)).to.equal('You need $50.00 to buy roses!');
        });
        it("should validate input", function () {
            expect(() => { flowerShop.calcPriceOfFlowers(6, 5, 10) }).to.throw("Invalid input!");
        });
    });

    describe("test checkFlowersAvailable method", function () {
        it("should work if the flower is present in the array", function () {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal('The Rose are available!');
        });
        it("should work if the flower is not present in the array", function () {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Tulip", "Lily", "Orchid"])).to.equal('The Rose are sold! You need to purchase more!');
        });
    });

    describe("test sellFlowers method", function () {
        it("should valdiate input", function () {
            expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], '3') }).to.throw("Invalid input!");
        });
        it("should remove an element from the array that is located on the space specified as a parameter", function () {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal('Rose / Orchid');
        });
    })
});