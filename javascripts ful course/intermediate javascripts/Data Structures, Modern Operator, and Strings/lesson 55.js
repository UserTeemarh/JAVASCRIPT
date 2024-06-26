 'use strict';
// ECMASCRIPT6 OBJECT LITERAL

const weekdays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'sat', 'sun']
const hours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    }, 
    [weekdays[0]]: {
        open: 11,
        close: 23,
    },
    [`Day__${[weekdays.length]}`]: {
        open: 10,
        close: 22,
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
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery ({starterIndex = 1, mainIndex = 2, time, address}) {
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

console.log(restaurant);