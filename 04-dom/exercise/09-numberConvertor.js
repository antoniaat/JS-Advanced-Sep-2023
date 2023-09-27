function solve() {
    const selectMenuTo = document.getElementById('selectMenuTo');
    const btn = document.getElementsByTagName('button');
    const convertButton = btn[0];
    const input = document.getElementById('input');
    const result = document.getElementById('result');

    // Options array
    const options = [
        { label: 'Binary', value: 'binary' },
        { label: 'Hexadecimal', value: 'hexadecimal' }
    ];

    // Create the options
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.textContent = option.label;
        opt.value = option.value;
        selectMenuTo.appendChild(opt);
    });

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