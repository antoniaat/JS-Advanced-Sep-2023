class OnlineShop {
  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
  }
  loadingStore(product, qty, reqSpace) {
    if (this.warehouseSpace - reqSpace < 0) {
      throw new Error("Not enough space in the warehouse.");
    }
    this.products.push({ product, qty });
    this.warehouseSpace -= reqSpace;
    return `The ${product} has been successfully delivered in the warehouse.`;
  }

  quantityCheck(product, minQty) {
    let isFound = this.products.find((el) => el.product === product);
    if (!isFound) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    if (minQty <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }
    if (minQty <= isFound.qty) {
      return `You have enough from product ${product}.`;
    }
    let text = `You added ${
      minQty - isFound.qty
    } more from the ${product} products.`;
    isFound.qty = minQty;
    return text;
  }
  sellProduct(product) {
    let isFound2 = this.products.find((el) => el.product === product);
    if (!isFound2) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    isFound2.qty--;
    this.sales.push({ product, qty: 1 });
    return `The ${product} has been successfully sold.`;
  }
  revision() {
    if (this.sales.length === 0) {
      throw new Error("There are no sales today!");
    }
    let text2 = `You sold ${this.sales.length} products today!\nProducts in the warehouse:`;

    for (let item of this.products) {
      text2 += `\n${item.product}-${item.qty} more left`;
    }
    return text2;
  }
}

const myOnlineShop = new OnlineShop(500);
console.log(myOnlineShop.loadingStore("headphones", 10, 200));
console.log(myOnlineShop.loadingStore("laptop", 5, 200));

console.log(myOnlineShop.quantityCheck("headphones", 10));
console.log(myOnlineShop.quantityCheck("laptop", 10));

console.log(myOnlineShop.sellProduct("headphones"));
console.log(myOnlineShop.sellProduct("laptop"));
console.log(myOnlineShop.revision());
