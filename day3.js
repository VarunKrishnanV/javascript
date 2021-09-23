// Switch case

let day = "saturday";

switch (day) {
    case "monday": // if(day === "monday")
        console.log("its Monday");
        break;

    case "Friday":
        console.log("its friday");
        break;

    case "sunday":
    case "saturday": // if(day === "sunday" || day === "saturday")
        console.log("Enjoy your weekend");
        break;

    default:
        console.log("Boring");
}

if (day === "monday") {
    console.log("its Monday");
} else if (day === "friday") {
    console.log("its friday");
} else if (day === "sunday" || day === "saturday") {
    console.log("Enjoy your weekend");
} else {
    console.log("Boring");
}


// Statements Vs Expressions

5 + 3
5
"varun"

if(true){
    let b = 5;
    let sum = 5 + b;
}

console.log(`Hello ${5 + 5}`)


// Ternary operator or Conditional operator

// condition ? true block : false block;

let age = 18;
let drinkif;

if(age >= 18){
    drinkif = "wine"
    console.log("You can have wine");
} else {
    drinkif = "water";
    console.log("You can have water");
}

(age >= 18)
    ? console.log("You can have wine")
    : console.log("You can have water");

let drink = age >= 18 ? "wine" : "water";
console.log(`drink: ${drink} `);


// Javascript Releases -- completed

// Strict mode -- Refer Strict.js file

// Functions

let num1= 1;
let num2 = 5
let sum;

sum = num1 + num2;
console.log(sum);

num1 = 5;
num2 = 10;

sum = num1 + num2;
console.log(sum);

num1 = 50;
num2 = 10;

sum = num1 + num2;
console.log(sum);

// syntax
/*

function name(params) {
    statement to be executed
}

name();

*/



function logger(name, age){
    console.log(`Hello ${name}. You are ${age} years old`);
}

logger("Varun" , 18);
logger("Naveen" , 19);
logger("Ram" , 20);
