'use strict';
// ALLOWS THE THIS KEYWORD TO BE SET MANUALLY 
// BIND METHOD

const luthansa = {
    airline: 'Luthansa',
    iataCode: 'LH',
    booking: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        // this.booking.push({flight: `${this.iataCode}${flightNum}`, name})
    }
}

luthansa.book(456, 'Fatimah Ibrahim');
luthansa.book(56, 'Mary Cooper');
console.log(luthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'LX',
    bookings: []
}

const book = luthansa.book;
book.call(eurowings, 78, 'Jonas James')
console.log(eurowings);

const swiss = {
    airline: 'Swiss',
    iataCode: 'LX',
    bookings: []
}

const applyMethod = [234, 'Mary Jones'];
book.apply(swiss, applyMethod);


book.call(swiss, ...applyMethod);
console.log(swiss);
// BIND METHOD

const bookEW = book.bind(eurowings);
const bookLH = book.bind(luthansa);
const bookLX = book.bind(swiss)
bookEW(34, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Sheldon Cooper');
bookEW23('Martha Cooper');

// with Event Listeners
luthansa.planes = 300;
luthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
console.log(luthansa.buyPlane());
document.querySelector('.buy').addEventListener('click', luthansa.buyPlane.bind(luthansa)
);

// PARTIAL APPLICATION
// PRE-SETTING OF PARAMETERS

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate){
    return function(value){
        return value + value * rate
    }
}
console.log(addTaxRate(0.23)(100));
// const addVAT2 = addTaxRate(0.23);
// console.log();


// CODING CHALLENGE
const poll = {
    question: 'What is your favorite programming language?',
    options:   ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

    answers: new Array(4).fill(0),
    registerNewNumber(){
        const answer = Number(
            prompt(`${this.question}\n${this.options.join('\n')}\n Write Option Number`)
        );
        console.log(answer);

        // Register Answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        console.log(this.answers);
    },
    displayResults(type = 'array'){
        if (type === 'array'){
            console.log(this.answers);
        }else if(type === 'string'){
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
}
poll.registerNewNumber();
poll.displayResults()

document.querySelector('.poll').addEventListener('click', poll.registerNewNumber.bind(poll));

poll.displayResults.call({answers: [5, 2, 3]}, 'array');
poll.displayResults.call({answers: [9, 6, 2]}, 'string')