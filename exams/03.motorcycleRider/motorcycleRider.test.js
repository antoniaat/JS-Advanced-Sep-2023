const { expect } = require("chai");
const motorcycleRider = require("../motorcycleRider.js");

describe("Main Test", function () {
  describe("test1", () => {
    it("case1", () => {
      expect(motorcycleRider.licenseRestriction("AM")).to.equal(
        "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."
      );
    });
    it("case2", () => {
      expect(motorcycleRider.licenseRestriction("A1")).to.equal(
        "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."
      );
    });
    it("case3", () => {
      expect(motorcycleRider.licenseRestriction("A2")).to.equal(
        "Motorcycles with maximum power of 35KW. and the minimum age is 18."
      );
    });
    it("case4", () => {
      expect(motorcycleRider.licenseRestriction("A")).to.equal(
        "No motorcycle restrictions, and the minimum age is 24."
      );
    });
  });

  describe("test2", () => {
    it("case1", () => {
      expect(() => {
        motorcycleRider.licenseRestriction("B");
      }).to.throw("Invalid Information!");
    });
    it("case2", () => {
      expect(
        motorcycleRider.motorcycleShowroom(["125", "250", "600"], 125)
      ).to.equal("There are 1 available motorcycles matching your criteria!");
    });
    it("case3", () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom([], 125);
      }).to.throw("Invalid Information!");
    });
    it("case4", () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom("125", 125);
      }).to.throw("Invalid Information!");
    });
  });

  describe("test3", () => {
    it("case1", () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom(["125", "250", "600"], "125");
      }).to.throw("Invalid Information!");
    });
    it("case2", () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom(["125", "250", "600"], 49);
      }).to.throw("Invalid Information!");
    });
    it("case3", () => {
      expect(() => {
        motorcycleRider.motorcycleShowroom(["125", "250", "600"], 0);
      }).to.throw("Invalid Information!");
    });
    it("case4", () => {
      expect(
        motorcycleRider.otherSpendings(["helmet"], ["engine oil"], true)
      ).to.equal(
        "You spend $243.00 for equipment and consumables with 10% discount!"
      );
    });
  });

  describe("test4", () => {
    it("case1", () => {
      expect(
        motorcycleRider.otherSpendings(["helmet"], ["engine oil"], false)
      ).to.equal("You spend $270.00 for equipment and consumables!");
    });
    it("case2", () => {
      expect(
        motorcycleRider.otherSpendings(
          ["helmet", "jacket"],
          ["engine oil", "oil filter"],
          false
        )
      ).to.equal("You spend $300.00 for equipment and consumables!");
    });
    it("case3", () => {
      expect(
        motorcycleRider.otherSpendings(
          ["helmet", "jacket"],
          ["engine oil", "oil filter"],
          true
        )
      ).to.equal(
        "You spend $270.00 for equipment and consumables with 10% discount!"
      );
    });
    it("case4", () => {
      expect(() => {
        motorcycleRider.otherSpendings(["helmet"], ["engine oil"]);
      }).to.throw("Invalid information!");
    });
  });

  describe("test5", () => {
    it("case1", () => {
      expect(() => {
        motorcycleRider.otherSpendings(["helmet"], ["engine oil"], "");
      }).to.throw("Invalid information!");
    });
    it("case2", () => {
      expect(() => {
        motorcycleRider.otherSpendings("helmet", ["engine oil"], true);
      }).to.throw("Invalid information!");
    });
    it("case3", () => {
      expect(() => {
        motorcycleRider.otherSpendings(["helmet"], "engine oil", false);
      }).to.throw("Invalid information!");
    });
    it("case4", () => {
      expect(func).to.equal("text");
    });
  });
});
