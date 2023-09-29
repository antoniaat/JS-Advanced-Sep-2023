function demo(client) {

    const engineInfo = {
        90: { power: 90, volume: 1800 },
        120: { power: 120, volume: 2400 },
        default: { power: 200, volume: 3500 }
    };
    function wheelSize(data) {
        let wheels = data.wheelsize % 2 === 0 ? data.wheelsize - 1 : data.wheelsize
        newCar.wheels = Array(4).fill(wheels, 0, 4)
    }

    const newCar = {
        model: client.model,
        engine: engineInfo[client.power <= 90 ? 90 : client.power <= 120 ? 120 : 'default'],
        carriage: {
            type: client.carriage,
            color: client.color
        }

    }
    wheelSize(client)
    return newCar
}
