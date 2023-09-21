function solve(arr) {

    arr.sort((a, b) => a.localeCompare(b));

    let currentLetter;

    arr.forEach(el => {
        if (el[0][0] != currentLetter) {
            currentLetter = el[0][0];
            console.log(currentLetter);
        }

        let [product, price] = el.split(' : ');
        console.log(`  ${product}: ${price}`);
    });
};
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])