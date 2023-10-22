class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }
    addFlight(flightNumber, destination, departureTime, price) {
        let newFlight = {
            flightNumber: flightNumber,
            destination: destination,
            departureTime: departureTime,
            price: price
        }
        let match = this.flights.find(item => item.flightNumber === flightNumber)
        if (match) {
            return `Flight ${flightNumber} to ${destination} is already available.`
        } else {
            this.flights.push(newFlight)
            return `Flight ${flightNumber} to ${destination} has been added to the system.`
        }
    }
    bookFlight(passengerName, flightNumber) {
        let match = this.flights.find(item => item.flightNumber === flightNumber)
        if (match) {
            match.passengerName = passengerName;
            this.bookings.push(match);
            this.bookingsCount++;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
        } else {
            return `Flight ${flightNumber} is not available for booking.`
        }
    }
    cancelBooking(passengerName, flightNumber) {
        let match = this.bookings.find(item => item.flightNumber === flightNumber)
        if (match) {
            let index = this.bookings.indexOf(match);
            this.bookings.splice(index, 1);
            this.bookingsCount--;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
        } else {
            return `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`
        }
    }
    showBookings(criteria) {
        if (this.bookings.length === 0) { throw new Error(`No bookings have been made yet.`) }
 
        switch (criteria) {
            case 'all':
                let str = `All bookings(${this.bookingsCount}):`
                this.bookings.forEach((item) => {
                    str += `\n${item.passengerName} booked for flight ${item.flightNumber}.`
                })
                return str;
            case 'expensive':
                let str2 = `Expensive bookings:`
                let expensiveCount = 0;
                this.bookings.forEach((item) => {
                    if (item.price > 100) {
                        str2 += `\n${item.passengerName} booked for flight ${item.flightNumber}.`
                        expensiveCount++;
                    }
                })
                if (expensiveCount > 0) {
                    return str2;
                } else {
                    return "No expensive bookings found."
                }
            case 'cheap':
                let str3 = `Expensive bookings:`
                let cheapCount = 0;
                this.bookings.forEach((item) => {
                    if (item.price <= 100) {
                        str2 += `\n${item.passengerName} booked for flight ${item.flightNumber}.`
                        cheapCount++;
                    }
                })
                if (cheapCount > 0) {
                    return str3;
                } else {
                    return "No cheap bookings found."
                }
        }
    }
}