function attachEventsListeners() {
    const input = document.getElementById('inputDistance');
    const inputUnits = document.getElementById('inputUnits');
    const convertButton = document.getElementById('convert');
    const outputUnits = document.getElementById('outputUnits');
    const output = document.getElementById('outputDistance');

    const convertInputToMeters = {
        km: x => x * 1000,
        m: x => x,
        cm: x => x * 0.01,
        mm: x => x * 0.001,
        mi: x => x * 1609.34,
        yrd: x => x * 0.9144,
        ft: x => x * 0.3048,
        in: x => x * 0.0254
    }

    const convertMetersToOutputUnits = {
        km: x => x * 0.001,
        m: x => x,
        cm: x => x * 100,
        mm: x => x * 1000,
        mi: x => x * 0.00062137,
        yrd: x => x * 1.0936133,
        ft: x => x * 3.28,
        in: x => x * 39.3700787
    }


    convertButton.addEventListener('click', () => {
        const meters = convertInputToMeters[inputUnits.value](Number(input.value))

        const outputValue = convertMetersToOutputUnits[outputUnits.value](meters)
        output.value = outputValue
    })
}