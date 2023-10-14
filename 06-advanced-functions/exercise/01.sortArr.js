function sortArr(arr, key) {
    return key === 'asc' ? arr.sort((a,b) => a - b) : arr.sort((a,b) => b - a);
}
console.log(sortArr([14, 15, 16, 17] , 'asc'));