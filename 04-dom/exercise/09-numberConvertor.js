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

    convertButton.onclick = () => {
        const inputValue = Number(input.value)
        const selectedMenuValue = selectMenuTo.value

        convertorObj = {
            '': '', // to prevent undefine if the user not choose value
            'binary': inputValue.toString(2),
            'hexadecimal': inputValue.toString(16).toUpperCase()
        }

        result.value = convertorObj[selectedMenuValue]
    }
}