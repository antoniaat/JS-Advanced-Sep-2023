const motorcycleRider = {
  licenseRestriction(category) {
    if (category === "AM") {
      return "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.";
    } else if (category === "A1") {
      return "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.";
    } else if (category === "A2") {
      return "Motorcycles with maximum power of 35KW. and the minimum age is 18.";
    } else if (category === "A") {
      return "No motorcycle restrictions, and the minimum age is 24.";
    } else {
      throw new Error("Invalid Information!");
    }
  },
  motorcycleShowroom(engineVolume, maximumEngineVolume) {
    if (
      !Array.isArray(engineVolume) ||
      typeof maximumEngineVolume !== "number" ||
      engineVolume.length < 1 ||
      maximumEngineVolume < 50
    ) {
      throw new Error("Invalid Information!");
    }
    let availableBikes = [];
    engineVolume.forEach((engine) => {
      if (engine <= maximumEngineVolume && engine >= 50) {
        availableBikes.push(engine);
      }
    });
    return `There are ${availableBikes.length} available motorcycles matching your criteria!`;
  },
  otherSpendings(equipment, consumables, discount) {
    if (
      !Array.isArray(equipment) ||
      !Array.isArray(consumables) ||
      typeof discount !== "boolean"
    ) {
      throw new Error("Invalid Information!");
    }
    let totalPrice = 0;

    equipment.forEach((element) => {
      if (element === "helmet") {
        totalPrice += 200;
      } else if (element === "jacked") {
        totalPrice += 300;
      }
    });

    consumables.forEach((element) => {
      if (element === "engine oil") {
        totalPrice += 70;
      } else if (element === "oil filter") {
        totalPrice += 30;
      }
    });
    if (discount) {
      totalPrice = totalPrice * 0.9;
      return `You spend $${totalPrice.toFixed(
        2
      )} for equipment and consumables with 10% discount!`;
    } else {
      return `You spend $${totalPrice.toFixed(
        2
      )} for equipment and consumables!`;
    }
  },
};

let res = motorcycleRider.otherSpendings(
  ["helmet", "jacket"],
  ["engine oil", "oil filter"],
  true
);
console.log(res);
module.exports = motorcycleRider;
