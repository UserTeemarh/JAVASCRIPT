'use strict';
let age = 30;
let oldAge = age;
age = 31;
 console.log(oldAge);

 const me = {
    name: 'Jonas',
    age: 30
 };

 const friend = me;
 friend.age = 27;

 console.log('Friends', friend);
 console.log('Me', me);

 let first = 'Esther';
 let second = first;
 first = 'Yvonne';

 console.log(first);
 console.log(second);
// Primitive types
 let lastName = 'Williams';
 let oldLastName = lastName;
 lastName = 'Davis';

 console.log(lastName, oldLastName);
// Reference type
 const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
 };
 const marriedJessica = jessica;

 marriedJessica.lastName = 'Davis';
 console.log('Before Marriage', jessica);
 console.log('After Marriage', marriedJessica);

 
 const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
 };

 // assign() is used for copying an existing object.

 const jessicaCopy = Object.assign({}, jessica2);

 jessicaCopy.lastName = 'Denis';

 jessicaCopy.family.push('Mary');
 jessicaCopy.family.push('john');

 console.log('Before Marriage', jessica2);
 console.log('After Marriage', jessicaCopy);