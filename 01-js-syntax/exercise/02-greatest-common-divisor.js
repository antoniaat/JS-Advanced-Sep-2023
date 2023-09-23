function gdc(first, second) {

    if (second === 0) {
        return first;
    } else {
        return gdc(second, first % second)
    }

}
let result = gdc(15, 5);
// 5
let result2 = gdc(2154, 458);
// 2
console.log(result);
console.log(result2);