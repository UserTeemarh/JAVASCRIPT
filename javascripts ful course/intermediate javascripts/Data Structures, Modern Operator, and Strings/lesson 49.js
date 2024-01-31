// 'use strict';

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
    },
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({starterIndex = 1, mainIndex = 2, time, address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
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


const {name, openingHours, categories} = restaurant;

console.log(name, openingHours, categories);

// changing the variable name

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;

console.log(restaurantName, hours, tags);

// setting a default value

const {menu = ['hello'], starterMenu: starters = []} = restaurant;

console.log(menu, starters);

// mutating variables (changing/switching variables)

let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj);
console.log(a, b);

//nested object

const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);







