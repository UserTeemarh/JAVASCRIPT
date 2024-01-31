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

console.log('___OR___ ');
// Use ANY data type, return ANY data type, short-circuting

console.log(3 || 'Fatimah');
console.log(true || 0);
console.log(undefined || null);
console.log('' || 'Fatimah');


console.log(undefined  || 0 || 'Hola' || 23 || null);
// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);


console.log('____AND____');
console.log(0 && 'Fatimah');
console.log(7 && 'Fatimah');

if (restaurant.orderPizza) {
    restaurant.orderPizza('Mushroom', 'Spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Spinach');

console.log('___NULLISH COALESCING OPERATOR (??)___');
// THE NULLISH COALESCING OPERATOR (??) has to do with only UNDEFINED AND NULL value, but NOT '' or 0

console.log(undefined || 'Fatimah');
restaurant.numGuests = 0;

const guests = restaurant.numGuests ?? 10;
console.log(guests);