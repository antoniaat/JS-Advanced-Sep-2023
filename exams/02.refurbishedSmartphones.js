class RefurbishedSmartphones {
  constructor(retailer) {
    this.retailer = retailer;
    this.availableSmartphones = [];
    this.soldSmartphones = [];
    this.revenue = 0;
  }

  addSmartphone(model, storage, price, condition) {
    if (
      !model ||
      typeof model !== "string" ||
      storage < 0 ||
      typeof storage !== "number" ||
      price < 0 ||
      typeof price !== "number" ||
      !condition ||
      typeof condition !== "string"
    ) {
      throw new Error("Invalid smartphone!");
    }
    this.availableSmartphones.push({ model, storage, price, condition });
    return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(
      2
    )}$`;
  }
  sellSmartphone(model, desiredStorage) {
    let isFound = this.availableSmartphones.find((el) => el.model === model);
    if (!isFound) {
      throw new Error(`${model} was not found!`);
    }
    let price = isFound.price;
    if (isFound.storage >= desiredStorage) {
    } else if (isFound.storage + 128 >= desiredStorage) {
      price = price * 0.9;
    } else {
      price = price * 0.8;
    }
    this.soldSmartphones.push({
      model,
      storage: isFound.storage,
      price: price,
    });
    this.revenue += price;
    let index = this.availableSmartphones.indexOf(isFound);
    this.availableSmartphones.splice(index, 1);
    return `${model} was sold for ${price.toFixed(2)}$`;
  }

  upgradePhones() {
    if (this.availableSmartphones.length === 0) {
      throw new Error("There are no available smartphones!");
    }
    let text = "Upgraded Smartphones:";
    for (let phone of this.availableSmartphones) {
      phone.storage = phone.storage * 2;
      text += `\n${phone.model} / ${phone.storage} GB / ${
        phone.condition
      } condition / ${phone.price.toFixed(2)}$`;
    }
    return text;
  }

  salesJournal(criteria) {
    switch (criteria) {
      case "storage":
        this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        break;
      case "model":
        this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
        break;
      default:
        throw new Error("Invalid criteria!");
    }

    let text2 = `${this.retailer} has a total income of ${this.revenue.toFixed(
      2
    )}$\n${this.soldSmartphones.length} smartphones sold:`;
    this.soldSmartphones.forEach(
      (el) =>
        (text2 += `\n${el.model} / ${el.storage} GB / ${el.price.toFixed(2)}$`)
    );
    return text2;
  }
}

let retailer = new RefurbishedSmartphones("SecondLife Devices");
retailer.addSmartphone("Samsung S20 Ultra", 256, 1000, "good");
retailer.addSmartphone("Iphone 12 mini", 128, 800, "perfect");
retailer.addSmartphone("Xiaomi Redmi Note 10 Pro", 128, 330, "perfect");
retailer.sellSmartphone("Samsung S20 Ultra", 256);
retailer.sellSmartphone("Xiaomi Redmi Note 10 Pro", 256);
console.log(retailer.salesJournal("model"));
