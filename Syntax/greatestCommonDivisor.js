function greatestCommonDivisor(a, b) {
    let gCD = a % b;
    
    while(gCD !== 0) {
        a = b;
        b = gCD;
        gCD = a % b;
    }

    console.log(b);
}

greatestCommonDivisor(15 ,5);
greatestCommonDivisor(2154, 458);