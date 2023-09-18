function fruit(typeOfFruit, grams, price) {
   
    let money = 0;
    let weight = grams / 1000;
    
    money = weight * price; 
    
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${typeOfFruit}.`);       
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);