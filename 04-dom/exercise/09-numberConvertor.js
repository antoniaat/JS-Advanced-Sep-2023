function solve() {

    let optionBinary = document.createElement("OPTION");
    let optionHexadecimal = document.createElement("OPTION");

    const input = document.getElementById('input');
    const selectMenuTo = document.getElementById('selectMenuTo');
    const btn = document.getElementsByTagName('button');
    const result = document.getElementById('result');

    optionBinary.textContent = 'Binary';
    optionBinary.value = 'binary';
    optionHexadecimal.textContent = 'Hexadecimal';
    optionHexadecimal.value = 'hexadecimal';
    selectMenuTo.appendChild(optionBinary);
    selectMenuTo.appendChild(optionHexadecimal);

    btn[0].onclick = function () {
        if (selectMenuTo.value == 'binary') {
            result.value = convertToBinary(Number(input.value));
        } else if (selectMenuTo.value == 'hexadecimal') {
            result.value = convertToHeXadecimal(Number(input.value));
        }
    }

    function convertToBinary(num) {
        let result = [];
        while (num > 0) {
            let digit = num % 2;
            result.unshift(digit);
            num = Math.floor(num / 2);
        }
        return result.join('');
    }

    function convertToHeXadecimal(num) {
        let result = [];
        while (num > 0) {
            let digit = num % 16;
            if (digit < 10) {
                result.unshift(digit)
            } else if (digit == 10) {
                result.unshift('A');
            } else if (digit == 11) {
                result.unshift('B');
            } else if (digit == 12) {
                result.unshift('C');
            } else if (digit == 13) {
                result.unshift('D');
            } else if (digit == 14) {
                result.unshift('E');
            } else if (digit == 15) {
                result.unshift('F');
            }
            num = Math.floor(num / 16);
        }
        return result.join('');
    }
}