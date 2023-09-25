function solve() {

    const optionBinary = document.createElement("OPTION");
    const optionHexadecimal = document.createElement("OPTION");

    const input = document.getElementById('input');
    const selectMenuTo = document.getElementById('selectMenuTo');
    const btn = document.getElementsByTagName('button');
    const convertButton = btn[0]
    const result = document.getElementById('result');

    optionBinary.textContent = 'Binary';
    optionBinary.value = 'binary';
    optionHexadecimal.textContent = 'Hexadecimal';
    optionHexadecimal.value = 'hexadecimal';
    selectMenuTo.appendChild(optionBinary);
    selectMenuTo.appendChild(optionHexadecimal);

    convertButton.onclick = function () {
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
        let result = num.toString(16).toUpperCase()
        return result
    }
}