// 01. Print an Array with a Given Delimiter
function printAnArraywithAGivenDelimiter(array, delimitar) {
    let result = array.join(delimitar);

    console.log(result);
}

printAnArraywithAGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-');
printAnArraywithAGivenDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');

// 02. Print every N-th Element from an Array
function printEveryNthElementFromAnArray(array, steps) {
    let result = [];
    for (let i = 0; i < array.length; i += steps) {
        result.push(array[i])
    }

    return result;
}

console.log(printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2)); // ['5', '31', '20']
console.log(printEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'tset'], 2)); // ['dsa', 'test']
console.log(printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6)); // ['1']

// 03. Add and Remove Elements
function addAndRemoveElements(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "add") {
            result.push(i + 1);
        } else if (array[i] === "remove") {
            result.pop();
        }
    }
    const output = result.length > 0 ? result.join('\n') : 'Empty';
    console.log(output);
}

addAndRemoveElements(['add', 'add', 'add', 'add']); // 1 2 3 4
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']); // 1 4 5
addAndRemoveElements(['remove', 'remove', 'remove']); // Empty

// 04. Rotate Array
function rotateArray(array, rotateCounter) {
    for (let i = 0; i < rotateCounter; i++) {
        array.unshift(array.pop());
    }
    console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2); // 3 4 1 2
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15); // Orange Coconut Apple Banana

// 05. Extract Increasing Subsequence from Array
function extractIncreasingSubsequenceFromArray(array) {
    let maxElement = Number.MIN_SAFE_INTEGER;
    let result = [];

    for (const el of array) {
        if (el >= maxElement) {
            result.push(el);
            maxElement = el;
        }
    }
    return result;
}

console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24])); // [1, 3, 8, 10, 12, 24]
console.log(extractIncreasingSubsequenceFromArray([1, 2, 3, 4])); // [1, 2, 3, 4]
console.log(extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1])); // [20]

// 06. List Of Names
function listOfNames(input) {
    input
        .sort((a, b) => a.localeCompare(b))
        .forEach((x, i) => console.log(`${i + 1}.${x}`));
}

listOfNames(["John", "Bob", "Christina", "Ema"]); // 1.Bob 2.Christina 3.Ema 4.John

// 07. Sorting Numbers
function sortingNumbers(input) {
    let result = []
    input.sort((a, b) => a - b);

    while (input.length) {
        result.push(input.shift());
        input.length && result.push(input.pop());
    }
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])); // [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48

// 08. Sort an Array by 2 Criteria
function sortAnArrayBy2Criteria(input) {
    const compareFn = (a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.toLowerCase()
                .localeCompare(b.toLowerCase());
        }
    }
    input.sort(compareFn).forEach(x => console.log(x));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']); // beta alpha gamma
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']); // Jack Isacc George Theodor Harrison
sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']); // Deny omen test Default

// 09. Magic Matrices
function magicMatrices(array) {
    const baseSum = array[0].reduce((acc, x) => acc + x, 0);
    let isMagic = true;
    let length = array.length;

    for (let i = 0; i < length; i++) {
        let sumRow = 0;
        for (let j = 0; j < array[i].length; j++) {
            sumRow += array[i][j];
            if (i === 0) {
                let sumCol = 0;
                for (let row = 0; row < length; row++) {
                    sumCol += array[row][j];
                }
                if (sumCol !== baseSum) {
                    isMagic = false;
                }
            }
        }
        if (sumRow !== baseSum) {
            isMagic = false;
        }
    }
    console.log(isMagic);
}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]); // true
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]); // false
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]); // true
magicMatrices([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]); // false

// 10. Tic-Tac-Toe (not included in final score)
function ticTacToe(input) {
    let dashboard = new Array(3).fill().map(() => new Array(3).fill(false))

    let player = "X";
    for (const line of input) {
        const [row, col] = line.split(" ").map((e) => Number(e))

        if (dashboard[row][col]) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        dashboard[row][col] = player;

        if (
            (dashboard[row][0] === player &&
                dashboard[row][1] === player &&
                dashboard[row][2] === player) ||
            (dashboard[0][col] === player &&
                dashboard[1][col] === player &&
                dashboard[2][col] === player)
        ) {
            console.log(`Player ${player} wins!`);
            print()
            return;
        }
        if (
            (dashboard[0][0] === player &&
                dashboard[1][1] === player &&
                dashboard[2][2] === player) ||
            (dashboard[0][2] === player &&
                dashboard[1][1] === player &&
                dashboard[2][0] === player)
        ) {
            console.log(`Player ${player} wins!`);
            print()
            return;
        }

        if (!dashboard.flat().includes(false)) {
            console.log("The game ended! Nobody wins :(");
            print();
            return;
        }
        player = player == "X" ? "O" : "X";
    }

    function print() {
        dashboard.forEach(x => console.log(x.join('\t')));
    }
}

ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
/*
Player O wins!
O X X
X O X
O false O
*/

ticTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
/*
This place is already taken. Please choose another!
Player X wins!
X X X
false O O
false false false
*/

ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
/*
The game ended! Nobody wins :(
O X X
X X O
O O X
*/

// 11. Diagonal Attack (not included in final score)
function diagonalAttack(input) {
    const array = input.map((row) => row.split(" ").map((e) => Number(e)));

    let sumFirstDiagonal = 0;
    let sumSecundDiagonal = 0;

    const n = array.length;
    for (let i = 0; i < n; i++) {
        sumFirstDiagonal += array[i][i];
        sumSecundDiagonal += array[i][n - i - 1];
    }

    if (sumFirstDiagonal == sumSecundDiagonal) {
        for (let k = 0; k < n; k++) {
            for (let l = 0; l < n; l++) {
                if (k !== l && k != n - l - 1) {
                    array[k][l] = sumFirstDiagonal;
                }
            }
        }
    }
    array.forEach(x => console.log(x.join(" ")))
}

diagonalAttack([
    "5 3 12 3 1",
    "11 4 23 2 5",
    "101 12 3 21 10",
    "1 4 5 2 2",
    "5 22 33 11 1",
]);
/**
    5 15 15 15 1
    15 4 15 2 15
    15 15 3 15 15
    15 4 15 2 15
    5 15 15 15 1
 */

diagonalAttack(["1 1 1", "1 1 1", "1 1 0"]);
/**
    1 1 1
    1 1 1
    1 1 0
 */

// 12. Orbit (not included in final score)
function orbit([width, height, x, y]) {
    const matrix = new Array(width).fill().map((e) => new Array(height).fill(0));

    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    const output = matrix.map((row) => row.join(" ")).join("\n");
    console.log(output);
}

orbit([4, 4, 0, 0]);
console.log("-------");
// 1 2 3 4
// 2 2 3 4
// 3 3 3 4
// 4 4 4 4

orbit([5, 5, 2, 2]);
console.log("-------");
// 3 3 3 3 3
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3

orbit([3, 3, 2, 2]);
// 3 3 3
// 3 2 2
// 3 2 1

// 13. Spiral Matrix (not included in final score)
function spiralMatrix(x, y) {
    let arr = Array.from(Array(x), () => new Array(y));
    let counter = 1;
    startCol = 0;
    startRow = 0;
    endCol = y - 1;
    endRow = x - 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            /* forward */
            arr[startRow][i] = counter++;
        }
        startRow++;
        for (let i = startRow; i <= endRow; i++) {
            /* down */
            arr[i][endCol] = counter++;
        }
        endCol--;
        for (let i = endCol; i >= startCol; i--) {
            /* back */
            arr[endRow][i] = counter++;
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            /* up */
            arr[i][startCol] = counter++;
        }
        startCol++;
    }
    arr.forEach(row => console.log(row.join(' ')));
}

spiralMatrix(5, 5);
/**
    1 2 3 4 5
    16 17 18 19 6
    15 24 25 20 7
    14 23 22 21 8
    13 12 11 10 9
 */
spiralMatrix(3, 3);
/**
    1 2 3
    8 9 4
    7 6 5
 */
