const { expect } = require("chai");
const movieTheater = require("./03.movieTheater.js");

describe("Main Test", function () {
  describe("test1", () => {
    it("case1", () => {
      expect(movieTheater.ageRestrictions("G")).to.equal(
        "All ages admitted to watch the movie"
      );
    });
    it("case2", () => {
      expect(movieTheater.ageRestrictions("PG")).to.equal(
        "Parental guidance suggested! Some material may not be suitable for pre-teenagers"
      );
    });
    it("case3", () => {
      expect(movieTheater.ageRestrictions("R")).to.equal(
        "Restricted! Under 17 requires accompanying parent or adult guardian"
      );
    });
    it("case4", () => {
      expect(movieTheater.ageRestrictions("NC-17")).to.equal(
        "No one under 17 admitted to watch the movie"
      );
    });
  });
  describe("test2", () => {
    it("case1", () => {
      expect(movieTheater.ageRestrictions("abc")).to.equal(
        "There are no age restrictions for this movie"
      );
    });
    it("case2", () => {
      expect(movieTheater.moneySpent(1, ["Nachos"], ["Soda"])).to.equal(
        "The total cost for the purchase is 23.50"
      );
    });
    it("case3", () => {
      expect(movieTheater.moneySpent(1, ["Nachos"], ["Water"])).to.equal(
        "The total cost for the purchase is 22.50"
      );
    });
    it("case4", () => {
      expect(movieTheater.moneySpent(2, ["Popcorn"], ["Water"])).to.equal(
        "The total cost for the purchase is 36.00"
      );
    });
  });
  describe("test3", () => {
    it("case1", () => {
      expect(
        movieTheater.moneySpent(2, ["Popcorn", "Nachos"], ["Soda", "Water"])
      ).to.equal("The total cost for the purchase is 44.50");
    });
    it("case2", () => {
      expect(movieTheater.moneySpent(5, ["Popcorn"], ["Water"])).to.equal(
        "The total cost for the purchase with applied discount is 64.80"
      );
    });
    it("case3", () => {
      expect(() => {
        movieTheater.moneySpent("5", ["Popcorn"], ["Water"]);
      }).to.throw("Invalid input");
    });
    it("case4", () => {
      expect(() => {
        movieTheater.moneySpent(5, "Popcorn", ["Water"]);
      }).to.throw("Invalid input");
    });
  });
  describe("test4", () => {
    it("case1", () => {
      expect(() => {
        movieTheater.moneySpent(5, ["Popcorn"], "Water");
      }).to.throw("Invalid input");
    });
    it("case2", () => {
      expect(
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 2, freeSeats: 5 },
          ],
          5
        )
      ).to.equal(2);
    });
    it("case3", () => {
      expect(
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 2, freeSeats: 5 },
          ],
          6
        )
      ).to.equal(1);
    });
    it("case4", () => {
      expect(() => {
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 2, freeSeats: 5 },
          ],
          "6"
        );
      }).to.throw("Invalid input");
    });
  });
  describe("test5", () => {
    it("case1", () => {
      expect(() => {
        movieTheater.reservation("12:7,123", 6);
      }).to.throw("Invalid input");
    });
  });
});
