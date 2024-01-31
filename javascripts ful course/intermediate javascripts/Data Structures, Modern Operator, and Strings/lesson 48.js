'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, firenze, Italy',
    categories: ['Italian', 'pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
}

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z]= arr;
console.log(arr);

console.log(x, y, z)



const [first, second] = restaurant.starterMenu;

console.log(first, second);

let [main, , secondary] = restaurant.starterMenu;

// let temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);


// Destructuring array
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

// Nested Destructuring

const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

const strNested = ['esther', 'pelumi', ['olivia', 'yvonne']];

const [name1, , [name2, name3]] = strNested;
console.log(name1,name2, name3);

//Default Values

const [p, q, r=1] = [8, 9];

console.log(p, q, r);
