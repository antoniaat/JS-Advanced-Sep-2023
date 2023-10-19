const weddingDay = {
  pickVenue(capacity, pricePerGuest, location) {
    if (
      typeof capacity !== "number" ||
      typeof pricePerGuest !== "number" ||
      typeof location !== "string" ||
      location === ""
    ) {
      throw new Error("Invalid Information!");
    }
    if (location == "Varna") {
      if (capacity >= 150 && pricePerGuest <= 120) {
        return `This venue meets the requirements, with capacity of ${capacity} guests and ${pricePerGuest}$ cover.`;
      } else {
        return `This venue does not meet your requirements!`;
      }
    } else {
      throw new Error(`The location of this venue is not in the correct area!`);
    }
  },

  otherSpendings(weddingDecoration, photography, discount) {
    if (
      !Array.isArray(weddingDecoration) ||
      !Array.isArray(photography) ||
      typeof discount !== "boolean"
    ) {
      throw new Error("Invalid Information!");
    }
    let totalPrice = 0;

    weddingDecoration.forEach((decoration) => {
      if (decoration === "flowers") {
        totalPrice += 500;
      } else if (decoration === "Fabric drapes and curtains") {
        totalPrice += 400;
      }
    });

    photography.forEach((service) => {
      if (service === "pictures") {
        totalPrice += 700;
      } else if (service === "video") {
        totalPrice += 1300;
      }
    });
    if (discount) {
      totalPrice = totalPrice * 0.85;
      return `You spend ${totalPrice}$ for wedding decoration and photography with 15% discount!`;
    } else {
      return `You spend ${totalPrice}$ for wedding decoration and photography!`;
    }
  },
  tableDistribution(guests, tables) {
    if (
      typeof guests !== "number" ||
      guests <= 0 ||
      typeof tables !== "number" ||
      tables <= 0
    ) {
      throw new Error("Invalid Information!");
    }
    let peopleOnTable = Math.round(guests / tables);

    if (peopleOnTable < 6) {
      return `There is only ${peopleOnTable} people on every table, you can join some tables.`;
    } else {
      return `You have ${tables} tables with ${peopleOnTable} guests on table.`;
    }
  },
};

let res = weddingDay.tableDistribution(36, 6);
console.log(res);

module.exports = weddingDay;
