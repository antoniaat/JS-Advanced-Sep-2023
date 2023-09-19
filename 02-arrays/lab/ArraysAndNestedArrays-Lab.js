// 01. Even Position Elements
function evenPositionElements(array) {
    let result = array
        .filter((x, n) => n % 2 == 0)
        .join(" ");

    console.log(result);
}

evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);

// 02. Last K Numbers Sequence
function lastKNumbersSequence(n, k) {
    let array = [1]
    for (let i = 1; i < n; i++) {
        let index = i - k <= 0 ? 0 : i - k;
        const element = array.slice(index, i).reduce((acc, x) => acc + x, 0);
        array.push(element);
    }
    return array;
}

console.log(lastKNumbersSequence(6, 3)); // [1, 1, 2, 4, 7, 13]
console.log(lastKNumbersSequence(8, 2)); // [1, 1, 2, 3, 5, 8, 13, 21]

// 03. Sum First Last
function sumFirstLast(input) {
    let firstElement = Number(input.shift());
    let lastElement = Number(input.pop()) || 0;

    return firstElement + lastElement;
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));

// 04. Negative / Positive Numbers
function negativeOrPositiveNumbers(input) {
    let result = [];
    for (const el of input) {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }
    console.log(result.join('\n'));
}

negativeOrPositiveNumbers([7, -2, 8, 9]); // -2 7 8 9
negativeOrPositiveNumbers([3, -2, 0, -1]); // -1 -2 3 0

// 05. Smallest Two Numbers
function smallestTwoNumbers(input) {
    let result = input.sort((a, b) => a - b).slice(0, 2);

    console.log(result.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]); // 5 15
smallestTwoNumbers([3, 0, 10, 4, 7, 3]); // 0 3

// 06. Bigger Half
function biggerHalf(input) {
    const index = Math.floor(input.length / 2);
    let result = input.sort((a, b) => a - b).slice(index);

    return result;
}

console.log(biggerHalf([4, 7, 2, 5])); // [5, 7]
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6])); // [7, 14, 19, 19]

// 07. Piece of Pie
function pieceOfPie(arrayOfPie, firstPie, lastPie) {
    let firstPieIndex = arrayOfPie.indexOf(firstPie);
    let lastPieIndex = arrayOfPie.indexOf(lastPie);

    const result = arrayOfPie.slice(firstPieIndex, lastPieIndex + 1)
    return result;
}

console.log(pieceOfPie(
    ['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)); // ['Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie']

console.log(pieceOfPie(
    ['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
)); // ['Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie']

// 08. Process Odd Positions
function processOddPositions(input) {
    let result = input
        .filter((x, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()

    console.log(result.join(' '));
}

processOddPositions([10, 15, 20, 25]); // 50 30
processOddPositions([3, 0, 10, 4, 7, 3]); // 6 8 0

// 09. Biggest Element
function biggestElement(input) {
    let result = Math.max(...input.flat())

    console.log(result);
}

biggestElement([[20, 50, 10], [8, 33, 145]]); // 145
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]); // 33

// 10. Diagonal Sums
function diagonalSums(input) {
    let [sumA, sumB] = [0, 0];

    for (let i = 0; i < input.length; i++) {
        sumA += input[i][i];
        sumB += input[i][input.length - 1 - i];
    }
    console.log(sumA, sumB);
}

diagonalSums([[20, 40], [10, 60]]); // 80 50

diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]); // 99 25

// 11. Equal Neighbors
function equalNeighbors(input) {
    let result = 0;
    const lengthA = input.length;

    for (let i = 0; i < lengthA; i++) {
        const lengthB = input[i].length;

        for (let j = 0; j < lengthB; j++) {
            if (j + 1 < lengthB && input[i][j] === input[i][j + 1]) {
                result++;
            }
            if (i + 1 < lengthA && input[i][j] === input[i + 1][j]) {
                result++;
            }
        }
    }
    console.log(result);
}

equalNeighbors(
    [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
); // 1

equalNeighbors(
    [['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
); // 2

equalNeighbors(
    [['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]
); // 5