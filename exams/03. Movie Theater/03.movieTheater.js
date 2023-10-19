const movieTheater = {
  ageRestrictions(movieRating) {
    switch (movieRating) {
      case "G":
        return "All ages admitted to watch the movie";
      case "PG":
        return "Parental guidance suggested! Some material may not be suitable for pre-teenagers";
      case "R":
        return "Restricted! Under 17 requires accompanying parent or adult guardian";
      case "NC-17":
        return "No one under 17 admitted to watch the movie";
      default:
        return "There are no age restrictions for this movie";
    }
  },
  moneySpent(tickets, food, drinks) {
    if (
      typeof tickets !== "number" ||
      !Array.isArray(food) ||
      !Array.isArray(drinks)
    ) {
      throw new Error("Invalid input");
    }

    let bill = 0;

    bill += tickets * 15;

    food.forEach((element) => {
      switch (element) {
        case "Nachos":
          bill += 6;
          break;
        case "Popcorn":
          bill += 4.5;
          break;
      }
    });

    drinks.forEach((element) => {
      switch (element) {
        case "Soda":
          bill += 2.5;
          break;
        case "Water":
          bill += 1.5;
          break;
      }
    });

    if (bill > 50) {
      bill -= bill * 0.2;
      return `The total cost for the purchase with applied discount is ${bill.toFixed(
        2
      )}`;
    } else {
      return `The total cost for the purchase is ${bill.toFixed(2)}`;
    }
  },
  reservation(rowsArray, neededSeatsCount) {
    if (!Array.isArray(rowsArray) || typeof neededSeatsCount !== "number") {
      throw new Error("Invalid input");
    }

    let availableRows = [];
    rowsArray.forEach((row) => {
      if (row.freeSeats >= neededSeatsCount) {
        availableRows.push(row.rowNumber);
      }
    });

    return Math.max(...availableRows);
  },
};

module.exports = movieTheater;
