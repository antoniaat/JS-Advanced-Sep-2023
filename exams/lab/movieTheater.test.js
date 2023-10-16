const {assert} = require('chai');
const {movieTheater} = require('./movieTheater');
describe('movieTheater', () => {
    describe('Testing movieTeater age restriction', function () {
        it(`should return age restrictions with correct input` , function () {
            assert.equal(movieTheater.ageRestrictions("G"), `All ages admitted to watch the movie`);
        });
        it(`should return age restrictions with correct input` , function () {
            assert.equal(movieTheater.ageRestrictions("PG"), 
            `Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        });
        it(`should return age restrictions with correct input` , function () {
            assert.equal(movieTheater.ageRestrictions("R"), 
            `Restricted! Under 17 requires accompanying parent or adult guardian`);
        });
        it(`should return age restrictions with correct input` , function () {
            assert.equal(movieTheater.ageRestrictions("NC-17"), 
            `No one under 17 admitted to watch the movie`);
        });
        it(`should return age restrictions with correct input` , function () {
            assert.equal(movieTheater.ageRestrictions(""), 
            `There are no age restrictions for this movie`);
        });
        
    })
    describe('Testing movieTeater ', function () {
        it(`Testing movieTeater moneySpent no discount applied ` , function () {
            assert.equal(movieTheater.moneySpent(1,["Nachos"],["Soda"]),
            `The total cost for the purchase is 23.50`);
        });
        it(`Testing movieTeater moneySpent with discount` , function () {
            assert.equal(movieTheater.moneySpent(10,["Nachos"],["Soda"]), 
            `The total cost for the purchase with applied discount is 126.80`);
        });
        it(`Testing moneySpent with correct input` , function () {
            assert.equal(movieTheater.moneySpent(1,["Nachos"],["Soda"]),
            `The total cost for the purchase is 23.50`);
        });
        it(`Testing moneySpent with incorrect input` , function () {
            assert.throws(function() {
                movieTheater.moneySpent("1",["Nachos"],["Soda"]);
              }, Error, "Invalid input");
        });
        it(`Testing moneySpent with incorrect input` , function () {
            assert.throws(function() {
                movieTheater.moneySpent(1,"Nachos",["Soda"]);
              }, Error, "Invalid input");
        });
        it(`Testing moneySpent with incorrect input` , function () {
            assert.throws(function() {
                movieTheater.moneySpent("1","Nachos","Soda");
              }, Error, "Invalid input");
        });
        
    })
    describe('Testing movieTeater reservation', function () {
        it(`Testing with correct input` , function () {
            assert.equal(movieTheater.reservation([{rowNumber: 1, freeSeats: 7}, { rowNumber: 2, freeSeats: 5 }], 7),
             `1`);
        });
        it(`Testing with correct input` , function () {
            assert.equal(movieTheater.reservation([{rowNumber: 1, freeSeats: 2}, { rowNumber: 2, freeSeats: 5 }], 5),
            `2`);
        });
        it(`Testing reservation with incorrect input` , function () {
            assert.throws(function() {
                movieTheater.reservation("1",3);
              }, Error, "Invalid input");
        });
        it(`Testing moneySpent with incorrect input` , function () {
            assert.throws(function() {
                movieTheater.reservation({rowNumber: 1, freeSeats: 2}, { rowNumber: 2, freeSeats: 5 }, 5);
              }, Error, "Invalid input");
        });
        it(`Testing with correct input` , function () {
            assert.equal(movieTheater.reservation([{rowNumber: 1, freeSeats: 2}, { rowNumber: 2, freeSeats: 5 }], -1),
            `2`);
        });
        
    })
})