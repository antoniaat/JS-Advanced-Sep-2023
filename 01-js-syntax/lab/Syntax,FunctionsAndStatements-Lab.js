"use strict";

// 01. Echo Function
function echoFunction(word) {
    const word_length = word.length;

    console.log(word_length);
    console.log(word);
}

echoFunction('Hello, JavaScript!');
echoFunction('strings are easy');

// 02. String Length
function stringLength(srt1, str2, str3) {
    const sumLength = srt1.length + str2.length + str3.length;
    let averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');

// 03. Largest Number
function largestNumber(...input) {
    console.log(`The largest number is ${Math.max(...input)}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);

// 04. Circle Area
function circleArea(input) {
    let inputType = typeof (input);

    if (inputType === 'number') {
        let result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

circleArea(5);
circleArea('name');

// 05. Math Operations
function mathOperations(num1, num2, operator) {
    const obj = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '/': (a, b) => a / b,
        '*': (a, b) => a * b,
        '%': (a, b) => a % b,
        '**': (a, b) => Math.pow(a, b)
    }

    let result = obj[operator](num1, num2);
    console.log(result);
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');

// 06. Sum of Numbers N…M
function sumOfNumbersformNtoM(n, m) {
    const num1 = Number(n);
    const num2 = Number(m);
    let result = 0;

    for (let i = num1; i <= num2; i++) {
        result += i;
    }

    console.log(result);
}

sumOfNumbersformNtoM('1', '5');
sumOfNumbersformNtoM('-8', '20');

// 07. Day of Week
function dayOfWeek(dayName) {
    const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let dayNumber = weekday.indexOf(dayName);
    if (dayNumber !== -1) {
        console.log(dayNumber + 1);
    } else {
        console.log('error');
    }
}

dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');

// 08. Days in a month
function daysInAmonth(m, y) {
    const days = new Date(y, m, 0);
    console.log(days.getDate());
}

daysInAmonth(1, 2012);
daysInAmonth(2, 2021);

// 09. Square of Stars
function squareOfStars(input) {
    let result = Number(input) || 5;
    let output = ''
    for (let i = 0; i < result; i++) {
        for (let j = 0; j < result; j++) {
            output += '* ';
        }
        output += '\n'
    }
    console.log(output);
}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);

// 10. Aggregate Elements
function aggregateElements(input) {
    let sumArray = input.reduce((acc, x) => acc += x, 0);
    let sumInverse = input.reduce((acc, x) => acc += 1 / x, 0);
    let concatArray = input.join('');
    console.log(sumArray);
    console.log(sumInverse);
    console.log(concatArray);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);