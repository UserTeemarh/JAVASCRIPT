'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, firenze, Italy',
    categories: ['Italian', 'pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    address: 'Via del Sole, 21',
    time: '21:30',
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        }, 
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 10,
            close: 22,
        }
    },
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({starterIndex = 1, mainIndex = 2, time, address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPizza: function (mainIngredients, ...otherIngredients) {
        console.log(mainIngredients);
        console.log(otherIngredients);
    }
}
restaurant.orderDelivery(
    {
        time: '22: 30',
        address: 'Via del Sole, 21',
        mainIndex: 2,
        starterIndex: 2,
    }
);

// SPREAD
const arr = [1, 2, ...[3, 4]];
console.log(arr)


// REST 

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(pizza, risotto, otherFood);

// OBJECT

const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays);


// ITERATABLES: arrays, strings, maps, set, NOT objects

// REST PARAMETERS
const add = function(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) 
    sum += numbers[i];
    console.log(sum);
}

add(2, 3)
add(2, 3, 5, 7);
add(3, 5, 6, 7, 8, 9,);


// REST PARAMETER
restaurant.orderPizza('Mushrooms', 'Onions', 'Olives', 'Spinach');
restaurant.orderPizza('Mushrooms');










































