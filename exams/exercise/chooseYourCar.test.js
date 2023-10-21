const {assert} = require("chai");
const {chooseYourCar} = require('./chooseYourCar');
describe("Tests", function() {
    describe("choosingType", function() {
        it("Should throw error invalid year", function() {
            assert.throws(() => {
                chooseYourCar.choosingType("Sedan", "Blue", 1880),Error, "Invalid Year!"
            });
            assert.throws(() => {
                chooseYourCar.choosingType("Sedan", "Blue", 2023),Error, "Invalid Year!"
            })
        });
        it("Should throw error for the type", function() {
            assert.throws(() => {
                chooseYourCar.choosingType(("Combi", "Blue", 1990),Error, "This type of car is not what you are looking for.")
            });
            assert.throws(() => {
                chooseYourCar.choosingType("Hatchback", "Blue", 2020),Error, "This type of car is not what you are looking for."

            })
        });
        it("Should return msg that it meet the requirements", () => {
            assert.equal(chooseYourCar.choosingType("Sedan", "Blue", 2010),`This Blue Sedan meets the requirements, that you have.`)
        });
        it("Should return msg that the car is too old for me", () => {
            assert.equal(chooseYourCar.choosingType("Sedan", "Blue", 2000),`This Sedan is too old for you, especially with that Blue color.`)
        });
     });
    describe("brandName",() => {
        it("should return array ass a string",() => {
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],2),'BMW, Toyota')
        });
        it("should return array ass a string",() => {
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],1),'BMW, Peugeot')
        });
        it("should throw error if incorrect data",() => {
            assert.throws(() => {
                chooseYourCar.brandName("Toyota",2),Error,"Invalid Information!"
            })
        })
        it("should throw error if incorrect data",() => {
            assert.throws(() => {
                chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"],5),Error,"Invalid Information!"
            })
        })
    })
    describe("CarFuelConsumption",() => {
        it("should return that the car is efficient",() => {
            assert.equal(chooseYourCar.carFuelConsumption(200,7),`The car is efficient enough, it burns 3.50 liters/100 km.`)
        });
        it("should return that the car is efficient",() => {
            assert.equal(chooseYourCar.carFuelConsumption(200,3.8555),`The car is efficient enough, it burns 1.93 liters/100 km.`)
        });
        it("should return that the car is efficient",() => {
            assert.equal(chooseYourCar.carFuelConsumption(100,7),`The car is efficient enough, it burns 7.00 liters/100 km.`)
        });
        it("should return that the car consume too much",() => {
            assert.equal(chooseYourCar.carFuelConsumption(200,20.5),`The car burns too much fuel - 10.25 liters!`)
        });
        it("should return that the car consume too much",() => {
            assert.equal(chooseYourCar.carFuelConsumption(200,18),`The car burns too much fuel - 9.00 liters!`)
        });
        it("should throw error if incorrect data",() => {
            assert.throws(() => {
                chooseYourCar.carFuelConsumption("200",5),Error,"Invalid Information!"
            })
        })
        it("should throw error if incorrect data",() => {
            assert.throws(() => {
                chooseYourCar.carFuelConsumption("200",-5),Error,"Invalid Information!"
            })
        })
        it("should throw error if incorrect data",() => {
            assert.throws(() => {
                chooseYourCar.carFuelConsumption(200,-5),Error,"Invalid Information!"
            })
        })
        it("should throw error if incorrect data",() => {
            assert.throws(() => {
                chooseYourCar.carFuelConsumption(200,0),Error,"Invalid Information!"
            })
        })
    })
});