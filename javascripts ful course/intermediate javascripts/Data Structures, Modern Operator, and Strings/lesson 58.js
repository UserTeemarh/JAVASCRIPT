'use strict';
const hours =  {
    thu: {
        open: 12,
        close: 22,
    }, 
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0,
        close: 24,
    }
};


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, firenze, Italy',
    categories: ['Italian', 'pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    address: 'Via del Sole, 21',
    time: '21:30',
    hours,
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery({starterIndex = 1, mainIndex = 2, time, address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPizza(mainIngredients, ...otherIngredients) {
        console.log(mainIngredients);
        console.log(otherIngredients);
    }
}


const rest = new Map();

rest.set('Name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));


rest
.set('categories' ['Italian', 'pizzeria', 'Vegetarian', 'Organic'])
.set('Open', 11)
.set('Close', 23)
.set(true, 'We are open :D')
.set(false, 'We are closed :(');

console.log(rest.get('Open'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 0;

console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')));

rest.has('categories');
rest.delete(2);
console.log(rest);


const arr = [1, 2]
console.log(rest.size);
// console.log(rest.clear());

rest.set(arr, 'Test');
console.log(rest);

console.log(rest.get(arr));
console.log(rest.set(document.querySelector('h1'), 'Heading'));



// MAP ITERATION
const question = new Map ([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'You are Correct'],  
    [false, 'Try Again'],
]);

console.log(Object.entries(hours));
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

// const answer = Number(prompt('Guess a Number'));

// if (question.get('correct') === answer) {
//     console.log(question.get(true)) 
// } else {
//     console.log(question.get(false));
// }

// converting a Map to an Array 
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
console.log([...question.entries()]);

let inputElement = document.querySelector('.inputElement');
let buttonElement = document.querySelector('.btn');
buttonElement.addEventListener('click', ()=>{
    buttonElement = Number(inputElement.value);
    if (question.get('correct') === buttonElement) {
        console.log(question.get(true));
    } else {
        console.log(question.get(false));
    }
})