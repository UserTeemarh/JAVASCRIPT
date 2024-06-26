'use strict';

const runOnce = function(){
    console.log('This will never run again');
};
runOnce();
// // no longer in used:
// // IIFE: IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function(){
    console.log('This will  never run again2');
})();

// SECOND METHOD
(() => console.log('This will also never run again'))();



// // // CLOSURES
// // A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone.

// // A closure gives a function to al the variables of its parent function, even after that parent function has returned. The function keeps a reference to its other scope, which preserves the scope chain throughout time.

// // A closure makes sure that a function doesn't loose connection to variable that existed at the function's birth place.

// // A closure is like a backpack that a function carries around wherever it goes. The backpack has all the varibles that were present in the environment where the function was created. 




const secureBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
booker();
booker();
booker(); 


console.dir(booker);


let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
};


const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2 );
    }
}

g();
f();

h();
f();

// // EXAMPLE 2

const boardPassenger = function(n, wait){
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${Math.round(perGroup)} passengers`);
    }, wait * 1000);
    console.log(`Will start boarding in ${wait} seconds`);
}

const perGroup = 1000;
boardPassenger(180, 3)
setTimeout(function(){
    console.log('TIMER');
}, 3000);




(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', ()=>{
        setTimeout(function(){
            header.style.color = 'purple';
            header.style.background = 'yellow';
        }, 4000);
    });
})();