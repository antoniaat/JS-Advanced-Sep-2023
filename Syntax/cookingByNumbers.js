function cookingByNumbers(num, ...actions) {
    let number = +num;
 
    let handler = {
        chop(number) {
            return number / 2;
        },
        dice(number) {
            return Math.sqrt(number);
        },
        spice(number) {
            return number+=1;
        },
        bake(number) {
            return number *= 3;
        },
        fillet(number) {
            return number * 0.8;
        }
    };
 
    for (const action of actions) {
        number = handler[action](number);
        console.log(number);
    }
}


cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log("=========================")
cookingByNumbers(9, 'dice', 'spice', 'chop', 'bake', 'fillet');