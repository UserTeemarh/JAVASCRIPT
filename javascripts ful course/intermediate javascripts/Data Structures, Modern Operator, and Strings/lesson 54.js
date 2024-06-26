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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu.entries()) {
    console.log(`${item[0] + 1}: ${item[1]} `);
}

// for of

const friendsDiscipline = {
    unilorin: ['Fatimah', 'Yvonne', 'Pricilla', 'Mae', 'April'],
    fuoye: ['Post Malone', 'Kendrick Lamar', 'Drake', 'Kanye West', 'Justin Bieber']
}

const friends = [...friendsDiscipline.unilorin, ...friendsDiscipline.fuoye];
console.log(friends);

for (const [i, dl] of friends.entries()) {
    console.log(`${i + 1}: ${dl}`)
}

