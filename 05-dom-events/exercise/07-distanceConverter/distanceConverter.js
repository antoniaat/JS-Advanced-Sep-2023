function attachEventsListeners() {
    const input = document.getElementById('inputDistance');
    const inputUnits = document.getElementById('inputUnits');
    const convertButton = document.getElementById('convert');
    const outputUnits = document.getElementById('outputUnits');
    const output = document.getElementById('outputDistance');

    convertButton.addEventListener('click', () => {
        let units = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254
        };

        output.value = input.value * units[inputUnits.value] / units[outputUnits.value]
    })
}