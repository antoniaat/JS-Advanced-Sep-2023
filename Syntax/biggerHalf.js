function biggerHalf(input) {
    let sorted = input.sort((a, b) => a - b);
    let startIndex = Math.floor(sorted.length / 2);
    let endIndex = sorted.length;
    let newArr = sorted.slice(startIndex, endIndex);
    return newArr;
}


console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));