const { expect } = require("chai");
const { mathEnforcer } = require("./04.mathEnforcer.js");

describe(`testing math calc methods obj`, () => {
  describe(`testing addFive method (floats allowed range +- 0.01)`, () => {
    it(`valid input positive Integer -> (0) -> 5`, () => {
      expect(mathEnforcer.addFive(0)).to.eq(5);
    });
    it(`valid input negative Integer -> (-1) -> 4`, () => {
      expect(mathEnforcer.addFive(-1)).to.eq(4);
    });
    it(`valid input float -> (0.1) -> 5.1`, () => {
      expect(mathEnforcer.addFive(0.1)).to.be.closeTo(5.1, 0.01);
    });
    it(`invalid input - not a number param -> ('a') -> undefined`, () => {
      expect(mathEnforcer.addFive("a")).to.be.undefined;
    });
  });

  describe(`testing subtractTen method`, () => {
    it(`valid input positive Integer -> (10) -> 0`, () => {
      expect(mathEnforcer.subtractTen(10)).to.eq(0);
    });
    it(`valid input negative Integer-> (-1) -> -11`, () => {
      expect(mathEnforcer.subtractTen(-1)).to.eq(-11);
    });
    it(`valid input float -> (10.1) -> 0.1`, () => {
      expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1, 0.01);
    });
    it(`invalid input - not a number param -> ('a') -> undefined`, () => {
      expect(mathEnforcer.subtractTen("a")).to.be.undefined;
    });
  });

  describe(`testing sum method`, () => {
    it(`valid input positive Integers -> (1,1) -> 2`, () => {
      expect(mathEnforcer.sum(1, 1)).to.eq(2);
    });
    it(`valid input negative Integers-> (-1,-1) -> -2`, () => {
      expect(mathEnforcer.sum(-1, -1)).to.eq(-2);
    });
    it(`valid input negative Int + positive Int-> (-1,1) -> 0`, () => {
      expect(mathEnforcer.sum(-1, 1)).to.eq(0);
    });
    it(`valid input float -> (1.1,2.2) -> 3.3`, () => {
      expect(mathEnforcer.sum(1.1, 2.2)).to.be.closeTo(3.3, 0.01);
    });
    it(`invalid input - 1st param not a number -> ('1', 1) -> undefined`, () => {
      expect(mathEnforcer.sum("1", 1)).to.be.undefined;
    });
    it(`invalid input - 2nd paramnot not a number  -> (1, '1') -> undefined`, () => {
      expect(mathEnforcer.sum(1, "1")).to.be.undefined;
    });
  });
});
