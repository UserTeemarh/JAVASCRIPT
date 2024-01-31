'use strict';

const firstName = 'Jonas';

function calcAge (birthYear) {
    const age = 2017 - birthYear;
    console.log(firstName);

    function printAge() {
        const output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            const str = `OH, and you're a millenial, ${firstName}`;
            console.log(str);
        }
    }
    printAge();
}

calcAge(1991);

