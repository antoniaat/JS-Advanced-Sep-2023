function roadRadar(speed, area) {
    let result = "";
    let limit = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    }

    let diff = speed - limit[area];

    if (speed <= limit[area]) {
        console.log(`Driving ${speed} km/h in a ${limit[area]} zone`);
    } else {
        if (diff <= 20) result = "speeding";
        if (diff > 20 && diff <= 40) result = "excessive speeding";
        if (diff > 40) result = "reckless driving";

        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit[area]} - ${result}`);
    }
}

roadRadar(40, "city");
roadRadar(21, "residential")
roadRadar(120, "interstate")
roadRadar(200, "motorway");