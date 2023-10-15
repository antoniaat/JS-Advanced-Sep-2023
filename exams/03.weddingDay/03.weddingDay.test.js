const { expect } = require("chai");
const weddingDay = require("./03.weddingDay/03.weddingDay.js");

describe("Main Test", function () {
  describe("test1", () => {
    it("case1", () => {
      expect(weddingDay.pickVenue(150, 100, "Varna")).to.equal(
        "This venue meets the requirements, with capacity of 150 guests and 100$ cover."
      );
    });
    it("case2", () => {
      expect(weddingDay.pickVenue(200, 120, "Varna")).to.equal(
        "This venue meets the requirements, with capacity of 200 guests and 120$ cover."
      );
    });
    it("case3", () => {
      expect(weddingDay.pickVenue(1, 100, "Varna")).to.equal(
        "This venue does not meet your requirements!"
      );
    });
    it("case4", () => {
      expect(() => {
        weddingDay.pickVenue(170, 100, "");
      }).to.throw("Invalid Information!");
    });
  });

  describe("test2", () => {
    it("case1", () => {
      expect(() => {
        weddingDay.pickVenue("abc", 100, "Varna");
      }).to.throw("Invalid Information!");
    });
    it("case2", () => {
      expect(() => {
        weddingDay.pickVenue(170, "abc", "Varna");
      }).to.throw("Invalid Information!");
    });
    it("case3", () => {
      expect(() => {
        weddingDay.otherSpendings("flowers", ["pictures"], true);
      }).to.throw("Invalid Information!");
    });
    it("case4", () => {
      expect(() => {
        weddingDay.otherSpendings(["flowers"], "pictures", true);
      }).to.throw("Invalid Information!");
    });
  });

  describe("test3", () => {
    it("case1", () => {
      expect(() => {
        weddingDay.otherSpendings(["flowers"], ["pictures"]);
      }).to.throw("Invalid Information!");
    });
    it("case2", () => {
      expect(
        weddingDay.otherSpendings(
          ["flowers", "Fabric drapes and curtains"],
          ["pictures", "video"],
          false
        )
      ).to.equal("You spend 2900$ for wedding decoration and photography!");
    });
    it("case3", () => {
      expect(
        weddingDay.otherSpendings(
          ["flowers", "Fabric drapes and curtains"],
          ["pictures", "video"],
          true
        )
      ).to.equal(
        "You spend 2465$ for wedding decoration and photography with 15% discount!"
      );
    });
    it("case4", () => {
      expect(weddingDay.tableDistribution(5, 10)).to.equal(
        "There is only 1 people on every table, you can join some tables."
      );
    });
  });

  describe("test4", () => {
    it("case1", () => {
      expect(weddingDay.tableDistribution(25, 5)).to.equal(
        "There is only 5 people on every table, you can join some tables."
      );
    });
    it("case2", () => {
      expect(weddingDay.tableDistribution(36, 6)).to.equal(
        "You have 6 tables with 6 guests on table."
      );
    });
    it("case3", () => {
      expect(() => {
        weddingDay.tableDistribution("abc", 10);
      }).to.throw("Invalid Information!");
    });
    it("case4", () => {
      expect(() => {
        weddingDay.tableDistribution(10, "abc");
      }).to.throw("Invalid Information!");
    });
  });
});
