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
