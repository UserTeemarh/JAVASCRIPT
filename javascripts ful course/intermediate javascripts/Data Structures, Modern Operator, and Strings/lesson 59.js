'use strict';

// const airline = 'TAP Air Portugal';
// const plane = 'A320';


// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);

// console.log('B567'[0]);
// console.log('B567'.length);


// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(2));
// console.log(airline.slice(2, 6));


// console.log(airline.slice(airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat){
//     // B and E are middle seat
//     const s = seat.slice(-1);
//     if (s === 'B' || s === 'E') {
//         console.log('You got the middle seat ☺');
//     } else {
//         console.log('You got lucky 🐱‍🚀');
//     }
// }
// checkMiddleSeat('23C');
// checkMiddleSeat('3E')
// checkMiddleSeat('11B');



// const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());


// const passenger = 'fAtImAh';
// const lowerPassenger = passenger.toLowerCase();
// const passengerCorrect = lowerPassenger.slice(1);

// console.log(passengerCorrect);

// trimming
// const email = 'hello@gmail.com';
// const loginEmail = ' Hello@gmail.com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimedEmail = lowerEmail.trim();

// console.log(trimedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail);

// // replacing 

// const priceGB = '288,97E';
// const priceUS = priceGB.replace('E', '$').replace(',',',');
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// console.log();


// console.log(announcement.replace('door', 'gate').replace(',',','));

// console.log(announcement.replace(/door/g, 'gate').replace(',' , ','));

// Booleans

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.includes('Aib'));

// if(plane.startsWith('Airbus') && plane.endsWith('new')){
//     console.log('Part of the NEW Airbus family');
// }


// PRACTICE EXERCISE
// const checkBaggage = function(items){
//     const baggage = items.toLowerCase();
//     if(baggage.includes('knife') || baggage.includes('gun')){
//         console.log('You are not allowed to board');
//     }else {
//         console.log('Welcome aboard');
//     }
// }
// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');



// WORKING WITH STRINGS (PART |||)

console.log('a+very+nice+string'.split('+'));
console.log('Fatimah Sulaimon'.split(' '));


// SPLIT AND JOIN METHOD
const [firstName, lastName] = 'Fatimah Sulaimon'.split(' ');
// console.log(firstName, lastName);

// THE JOIN METHOD

const newName = ['Miss', firstName, lastName.toUpperCase()].join('__');
console.log(newName);

const capitalizeName = function(name){
    const names = name.split(' ');
    const namesUpper = [];

    for(const n of names){
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
    }
    console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');
// REPEAT METHOD
console.log('The weather is bad>>>>. All the departures is now on hold'.repeat(4));

function planesInLine(planes){
    console.log(`There are ${planes} in line ${'✈'.repeat(planes)}`);
}
planesInLine(5);
planesInLine(15)
planesInLine(25)
// PADDING METHOD 

console.log('3456677777'.padStart(32, '*'));
console.log('678900889'.padEnd(20, '+'));

function maskMasterCreditCard(number){
    // CONVERTING THE NUMBER TO STRING
    const str = String(number);
    const last = str.slice(-4);
    return last.padStart(str.length, '*')
}
console.log(maskMasterCreditCard(2345566679988));
console.log(maskMasterCreditCard(88990000988));
console.log(maskMasterCreditCard(23455667));

