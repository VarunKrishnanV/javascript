// 1. Increment and decrement operator
let i = 3;
console.log(5 + i--);
console.log(i);
console.log(5 + --i);

// 2. Operator precedence
let total = 3 / 2;
console.log(total);

// 3. Strings and Template literals
let firstName = "Varun";
let lastName = "Krishnan";
const currentYear = 2021;
const birthYear = 2002;
console.log(
    firstName +
        " " +
        lastName +
        " is " +
        (currentYear - birthYear) +
        " years old!"
);
console.log(`${firstName} ${lastName} is ${currentYear - birthYear} years old`);

// 4. If else

/*
// if
if(condition){
    // runs if condition true
}

// if else
if(condition){
    // runs if condition true
}else{
    //runs if the condition false
}

// if else if
if (condition) {
    // runs if condition true
} else if(condition){
    //runs if the 2nd condition true
} else {

}

*/

// if statements
let age = 14;

if (age >= 18) {
    console.log("He can drive car");
} else if (age == 16) {
    console.log("Wait for 2 more years");
} else {
    console.log("You cant drive now");
}

// 5. Type conversion and coersion
let republic = "India";

console.log(`The value of "republic" is ${Number(republic)}`);
console.log(`The value of republic is` + republic);

// 6. Truthy and falsy values
let input = "";

if (input) {
    console.log("It a truthy value");
} else {
    console.log("Its a falsy value");
}

// 8. Equaliy operator => ==, ===, !=, !==

age = "18";
console.log(typeof age);

if (age === 18) {
    console.log("You can drive (strict)");
}

if (age == 18) {
    console.log("You can drive (loose)");
}

// 9. Boolean Logic - Eg. Vaccination and Login system && ||

// varun
let dose1 = false;
let dose2 = false;

if (dose1 || dose2) {
    console.log("You can come to college");
} else {
    console.log("You are not allowed to come");
}

// Login system

// 1. password check
// 2. email address check

// * password T mail F => denied
// * password F mail T => denied
// * password F mail F => denied
// * password T mail T => allowed

// let password = prompt("Enter Password");
// let mail = prompt("Enter mail ID");

// if (Number(password) === 1234 && mail === "abc08@gmail.com") {
//     console.log("Welcome");
// } else {
//     console.error("Access Denied");
// }


let number = 0;
if (number) {
    console.log("It's defined");
} else {
    console.log("It's not defined");
}

