// 'use strict';
// // const booking = [];
// // const createBooking = function(flightNum, numPassengers, price = 199 * numPassengers){
// //     // numPassengers = numPassengers || '$199'
// //     const bookings = {
// //         flightNum,
// //         numPassengers,
// //         price
// //     }
// //     console.log(bookings);
// //     booking.push(booking);
// // }

// // createBooking('LH123', 6);
// // createBooking('LH123', 2, 990);
// // createBooking('LH123', 2);
// // createBooking('LH123', 5);
// // createBooking('LH123',undefined, 1010);


// // PRIMITIVE AND OBJECT IN FUNCTION

// // const flight = 'LH234';
// // const fatimah = {
// //     name: 'Fatimah Sulaimon',
// //     passport: 234566800992
// // };

// // const checkIn = function (flightNum, passenger){
// //     flightNum = 'LH999';
// //     passenger.name = 'Miss' + ' ' + passenger.name;
// //     if (passenger.passport === 234566800992) {
// //         // alert('Check in')
// //     } else {
// //         // alert('Wrong Passport!')
// //     }

// // }

// // checkIn(flight, fatimah);
// // console.log(flight);
// // console.log(fatimah);

// // const newPassport = function(person){
// //     person.passport = Math.trunc(Math.random() = 23344556666);
// //     console.log(person);
// // }

// // newPassport(fatimah);


// // checkIn(flight, fatimah);


// console.log('FUNCTIONS ACCEPTING CALLBACK FUNCTIONS');



// // const oneWord = function(str){
// //     return str.replace(/ /g, '').toLowerCase();
// // }
// // // Higher-order function
// // const upperFirstWord = function(str){
// //     const [first, ...others] =  str.split(' ');
// //     return [first.toUpperCase(), ...others].join(' ');
// // }

// // const transformer = function(str, fn){
// //     console.log(`Original String: ${str}`);
// //     console.log(`Transformed String: ${fn(str)}`);
// //     console.log(`Transformed by: ${fn.name}`);
// // }

// // transformer('Javascript is the best', upperFirstWord);
// // transformer('JavaScript is the best!', upperFirstWord);
// // transformer('JavaScript is the best!', oneWord);
  
// //   const twoWord = function(str){
// //     return str.replace(/ /g, '').toLowerCase();
// //   }

// //   const upperFirstWord = function(str) {
// //     const [first, ...others] = str.split(' ');
// //     return [first.toUpperCase(), ...others].join(' ');
// //   }

// //   const transformer = function(str, fn){
// //     console.log(`Original String: ${str}`);
// //     console.log(`Transformed string: ${fn(str)}`);

// //     console.log(`Transformed by: ${fn.name}`);

// //   }
// //   transformer('Javascript is the best!', upperFirstWord);
// //   transformer('Javascript is the best!', twoWord);

  

// // //   JS uses callbacks all the time
// //   const high5 = function(name){
// //     console.log(`👏`);
// //   }


// //   document.body.addEventListener('click', high5)
// //   const arr = ['Jonas', 'Martha', 'Adam']
// //   arr.forEach(high5);
// // //   high5('Javis', high5);


// // // FUNCTION RETURNING FUNCTION/NESTED FUNCTION

// // const greet = function(greeting){
// //     return function (name){
// //         console.log(`${greeting} ${name}`);
// //     }
// // }


// // const greeter = greet('Hey,');
// // greeter('BloodSport!');
// // greeter('Jonas!')


// // greet('Hello')('Fatimah');


// // const greetArr = greeting => name => console.log(`${greeting} ${name}`);


// // greetArr()
// // const greeterArr = greetArr('Whatsup');
// // greeterArr('Harley Quinn')


// const lufthana = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum} `);

//     this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//   },
// };

// lufthana.book(239, 'Fatimah Sulaimon');
// lufthana.book(654, 'Will Smith');

// console.log(lufthana);



// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// }
// console.log('CALL METHOD');
// // CALL METHOD
// const callBook = lufthana.book;
// callBook.call(eurowings, 459, 'Mellisa Cooper');
// console.log(lufthana);

// const book = lufthana.book;
// book.call(eurowings, 23, 'Janet');
// console.log(eurowings);

// book.call(lufthana, 678, 'David Williams');
// console.log(lufthana);

// const swiss =  {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: []
// }

// book.call(swiss, 567, 'Sheldon Cooper');
// console.log(swiss);
// console.log('APPLY METHOD');

// // APPLY METHOD
// const flightData = [567, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData)

// console.log('BIND METHOD');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthana);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Steven Williams');
