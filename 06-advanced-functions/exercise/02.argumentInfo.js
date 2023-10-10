function argumentInfo(...args) {
    let result = {};
    for (const el of args) {
        let type = typeof(el);
        console.log(`${type}: ${el}`);
        if(!result.hasOwnProperty(type)){
            result[type] = 0;
        }
        result[type] += 1;
    }
    let keys = Object.entries(result).sort((a, b) => b[1]- a[1]);
    for (const el of keys){
        console.log(`${el[0]} = ${result[el[0]]}`);
    }
}
argumentInfo({}, '2', 3);