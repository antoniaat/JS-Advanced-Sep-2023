const mocha = require("mocha");
const { expect } = require("chai");
const recipeSelection = require("../03.recipeSelection.js");

describe("Main Test", function () {
  describe("combinations", () => {
    it("a", () => {
      expect(recipeSelection.isTypeSuitable("Meat", "Vegetarian")).to.equal(
        "This recipe is not suitable for vegetarians"
      );
    });
    //--------------
    it("a", () => {
      expect(recipeSelection.isTypeSuitable("Meat", "Vegan")).to.equal(
        "This recipe is not suitable for vegans"
      );
    });
    it("a", () => {
      expect(recipeSelection.isTypeSuitable("Dairy", "Vegan")).to.equal(
        "This recipe is not suitable for vegans"
      );
    });
  });
  describe("any other combination is ok", () => {
    it("a", () => {
      expect(recipeSelection.isTypeSuitable("abc", "cdf")).to.equal(
        "This recipe is suitable for your dietary restriction"
      );
    });
    it("a", () => {
      expect(recipeSelection.isTypeSuitable("123", "0")).to.equal(
        "This recipe is suitable for your dietary restriction"
      );
    });

    it("a", () => {
      expect(recipeSelection.isTypeSuitable("0", "123")).to.equal(
        "This recipe is suitable for your dietary restriction"
      );
    });
  });

  describe("check input", () => {
    it("a", () => {
      expect(() => {
        recipeSelection.isTypeSuitable(1, "cdf");
      }).to.throw("Invalid input");
    });
    it("a", () => {
      expect(() => {
        recipeSelection.isTypeSuitable(0, "0");
      }).to.throw("Invalid input");
    });

    it("a", () => {
      expect(() => {
        recipeSelection.isTypeSuitable("0", 1);
      }).to.throw("Invalid input");
    });
    it("a", () => {
      expect(() => {
        recipeSelection.isTypeSuitable("0", 0);
      }).to.throw("Invalid input");
    });
  });

  describe("isItAffordable", () => {
    it("a", () => {
      expect(recipeSelection.isItAffordable(10, 1)).to.equal(
        "You don't have enough budget to afford this recipe"
      );
    });
    it("a", () => {
      expect(recipeSelection.isItAffordable(0, 0)).to.equal(
        "Recipe ingredients bought. You have 0$ left"
      );
    });
    it("a", () => {
      expect(recipeSelection.isItAffordable(0, -10)).to.equal(
        "You don't have enough budget to afford this recipe"
      );
    });

    it("a", () => {
      expect(recipeSelection.isItAffordable(1, 10)).to.equal(
        "Recipe ingredients bought. You have 9$ left"
      );
    });
    it("a", () => {
      expect(recipeSelection.isItAffordable(0, 10)).to.equal(
        "Recipe ingredients bought. You have 10$ left"
      );
    });
    it("a", () => {
      expect(recipeSelection.isItAffordable(5, 10)).to.equal(
        "Recipe ingredients bought. You have 5$ left"
      );
    });

    describe("check input", () => {
      it("a", () => {
        expect(() => {
          recipeSelection.isItAffordable("abc", 1);
        }).to.throw("Invalid input");
      });
      it("a", () => {
        expect(() => {
          recipeSelection.isItAffordable("", 10);
        }).to.throw("Invalid input");
      });

      it("a", () => {
        expect(() => {
          recipeSelection.isItAffordable(1, "abc");
        }).to.throw("Invalid input");
      });
      it("a", () => {
        expect(() => {
          recipeSelection.isItAffordable(10, "");
        }).to.throw("Invalid input");
      });
    });
  });

  describe("getRecipesByCategory(recipes, category)", () => {
    it("a", () => {
      expect(
        recipeSelection.getRecipesByCategory(
          [{ title: " Spicy Tofu Stir-Fry ", category: " Asian " }],
          " Asian "
        )
      ).to.deep.equal([" Spicy Tofu Stir-Fry "]);
    });
  });
});
