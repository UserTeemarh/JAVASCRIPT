'use strict';
// variables hoisting

console.log(me);
// console.log(job);
// console.log(year);


var me = 'jonas';
let job = 'teacher';
const year = 1991;

console.log(job);
console.log(year);



//function hoisting

console.log(addDecl(2, 4));
console.log(addExpr(5, 7));
console.log(addArrow(10, 5));

function addDecl(a, b) {
    return a + b;
}

const  addExpr = function (a, b) {
    return a + b;
}
var addArrow = (a,b) => a + b;


//example
console.log(undefined);

if (!newProducts) {
    deleteShoppingCart();
}
var newProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted');
}