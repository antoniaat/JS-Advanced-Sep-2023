function autoEngineeringCompany(array) {
    let stocks = {};
    class Company {
        constructor(brand, model, producedCars) {
            this.brand = brand;
            this.model = model;
            this.producedCars = producedCars;
        }
        addStock() {
            if (!stocks.hasOwnProperty(this.brand)) {
                stocks[this.brand] = {};
            }
            if (stocks[this.brand].hasOwnProperty(this.model)) {
                stocks[this.brand][this.model] += Number(this.producedCars);
            } else {
                stocks[this.brand][this.model] = Number(this.producedCars);
            }
        }
    }
    for (const iterator of array) {
        const [brand, model, producedCars] = iterator.split(' | ');
        let a = new Company(brand, model, producedCars);
        a.addStock(brand, model, producedCars);
    }
    const stocksKeys = Object.keys(stocks);
    stocksKeys
    let output = ``
    for (const brand of stocksKeys) {
        const brandInfo = Object.keys(stocks[brand]);
        let buffer = `${brand}`;
        for (const model of brandInfo) {
            buffer += `\n###${model} -> ${stocks[brand][model]}`;
        }
        buffer += `\n`
        output += buffer;
    }
    console.log(output);
}
autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])