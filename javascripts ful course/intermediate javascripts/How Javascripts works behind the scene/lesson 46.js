'use strict';


console.log(this);

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
}
calcAge(1991);

const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    console.log(this);
}
calcAgeArrow(1991);

const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year)
    }
}
jonas.calcAge();

const maltida = {
    year: 2017
}
maltida.calcAge = jonas.calcAge;
maltida.calcAge();

const f = jonas.calcAge;
f.year;

// document.querySelector('.test').addEventListener('click', function () {
//     console.log('thi is an event', this)
// })'use strict';

var firstName = 'Maltida';


const Jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);

    /*    const isMillenial = function() {
            console.log(this.year >= 1991 && this.year <= 1996);
        }
        isMillenial(); */

        // ES 6 SOlution...
        const self = this;
        const isBillenial = () => {
            console.log(self.year >= 1991 && self.year <= 1996);
        }
        isBillenial();
    },
    greet:  () => { 
        console.log(`Hey ${this.firstName}`) 
    }
}
jonas.calcAge();
jonas.greet();

// argument keyword
const addExpr = function (a, b) {
    console.log(arguments)
    return a * b;
}
addExpr(2, 5);
addExpr(2, 4, 5, 12);

var addArrow = (a, b) => a + b;

console.log(addArrow(2, 5));
