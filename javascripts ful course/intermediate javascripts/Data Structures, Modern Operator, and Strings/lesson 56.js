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
restaurant.orderDelivery(
    {
        time: '22: 30',
        address: 'Via del Sole, 21',
        mainIndex: 2,
        starterIndex: 2,
    }
);
   


console.log(restaurant.hours.thu.open)

if(restaurant.hours && restaurant.hours.fri) {
    console.log(restaurant.hours.fri.open);
}

// OPTIONAL CHAINING
console.log(restaurant.hours.mon ?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
    const open = restaurant.hours[day]?. open ?? 'Closed';
    console.log(`On ${day}, We open at ${open}`)
}

// METHODS
console.log(restaurant.order?. (0, 1) ?? "Method does not exist");

console.log(restaurant.order?. (0, 1) ?? "Method does not exist");

// ARRAY 
// const user = [
//     {
//         name: 'Jonas', email: 'jonas@gmail.com'
//     }
// ];
// console.log(user?.[0] ?? 'Array does not exist');


// console.log(user?.[2] ?? 'Array does not exist');


// OBJECT KEY, VALUES AND ENTRIES

// PROPERTIES NAME
const properties = Object.keys(hours)

let proStr = `We open ${properties.length}__ a week:`;

for (const day of properties) {
    proStr += ` ${day} `;
}
console.log(proStr);


// VALUE NAME

const values = Object.values(hours);
console.log(values);

// ENTRIES

const entries = Object.entries(hours);
console.log(entries);

for (const [key, {open, close}] of entries) {
    console.log(`We open at ${open} and close ${close} on ${key} `)
}