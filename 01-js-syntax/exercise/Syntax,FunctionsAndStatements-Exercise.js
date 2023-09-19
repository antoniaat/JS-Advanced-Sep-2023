// 01. Fruit
function fruit(fruit, weightInGram, money) {
    let weightInKg = Number(weightInGram) / 1000;
    let costPetKg = weightInKg * Number(money);

    const output = `I need $${costPetKg.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`;
    console.log(output);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.3);

// 02. Greatest Common Divisor – GCD
function greatestCommonDivisor(firstNum, secondNum) {

    let GCD = firstNum % secondNum;
    while (GCD !== 0) {
        firstNum = secondNum;
        secondNum = GCD;
        GCD = firstNum % secondNum;
    }
    /*

    // variant 2
    if(b){
        return greatestCommonDivisor(b, a % b);
    } else {
        console.log(a);
    }

    // variant 3
    while (secondNum) {
        const temp = secondNum;
        secondNum = firstNum % secondNum;
        firstNum = temp;
        k++;
    }console.log(firstNum);

    // varant 4
    while (firstNum !== secondNum) {
        if (firstNum > secondNum) {
            firstNum -= secondNum;
            k++;
        } else {
            secondNum -= firstNum;
        }
    }console.log(firstNum);
    */

    console.log(secondNum);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);

// 03. Same Numbers
function sameNumbers(input) {
    let arr = input.toString().split("");
    let isSame = true;
    let sum = arr.reduce((acc, x) => {
        if (x !== arr[0]) {
            isSame = false;
        }
        return acc + Number(x)
    }, 0)

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);

// 04. Previous Day
function previousDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1)
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);

// 05. Time to Walk
function timeToWalk(steps, footprint, speed) {
    const distanceMeters = steps * footprint;
    const restsSec = Math.floor(distanceMeters / 500) * 60;
    const timeToWalk = Math.round(distanceMeters / speed * 3.6);
    let date = new Date(0, 0);
    date.setSeconds(timeToWalk + restsSec);

    let timeArr = [date.getHours(), date.getMinutes(), date.getSeconds()]
    let result = timeArr.map(x => x.toString().padStart(2, '0'));

    console.log(result.join(":"));
}

timeToWalk(4000, 0.60, 5);
//  00:32:48
timeToWalk(2564, 0.70, 5.5);
// 00:22:35

// 06. Road Radar
function roadRadar(speed, area) {
    let limitObj = { 'residential': 20, 'city': 50, 'interstate': 90, 'motorway': 130 }
    let difference = speed - limitObj[area];
    let status = '';

    if (difference <= 0) {
        return `Driving ${speed} km/h in a ${limitObj[area]} zone`
    } else if (difference <= 20) {
        status = 'speeding';
    } else if (difference <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }
    return `The speed is ${difference} km/h faster than the allowed speed of ${limitObj[area]} - ${status}`
}

console.log(roadRadar(40, 'city'));
// Driving 40 km/h in a 50 zone

console.log(roadRadar(21, 'residential'));
// The speed is 1 km/h faster than the allowed speed of 20 - speeding

console.log(roadRadar(120, 'interstate'));
// The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding

console.log(roadRadar(200, 'motorway'));
// The speed is 70 km/h faster than the allowed speed of 130 - reckless driving

// 07. Cooking by Numbers
function cookingByNumbers(num, ...operation) {
    let result = Number(num);
    let comandObj = {
        'chop': x => x / 2,
        'dice': x => Math.sqrt(x),
        'spice': x => ++x,
        'bake': x => x * 3,
        'fillet': x => (x * 0.8),
    }

    for (const comand of operation) {
        result = comandObj[comand](result);
        console.log(result);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// 16 8 4 2 1
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
// 3 4 2 6 4.8

// 08. Validity Checker
function validityChecker(x1, y1, x2, y2) {

    const isValid = (x1, y1, x2, y2) => {
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const result = Number.isInteger(distance) ? "valid" : "invalid";
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result}`);
    }

    isValid(x1, y1, 0, 0);
    isValid(x2, y2, 0, 0);
    isValid(x1, y1, x2, y2);
}

validityChecker(3, 0, 0, 4);
/*
    {3, 0} to {0, 0} is valid
    {0, 4} to {0, 0} is valid
    {3, 0} to {0, 4} is valid
*/

validityChecker(2, 1, 1, 1);
/*
    {2, 1} to {0, 0} is invalid
    {1, 1} to {0, 0} is invalid
    {2, 1} to {1, 1} is valid
*/

// 09. Words Uppercase (not included in final score)
function wordsUppercase(word) {
    const pattern = /\w+/g;
    const result = word.match(pattern).join(", ").toUpperCase();
    console.log(result);
}

wordsUppercase('Hi, how are you?');
// HI, HOW, ARE, YOU

wordsUppercase('hello');
// HELLO