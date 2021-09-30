// Function -Revision

// function functionName(param1, param2, .... paramN){
//     code block to be executed
//     return variable;
// }

function calcAge() {
    console.log("My age is 20");
}

calcAge();

// Arguments Vs Parameters
// Function - return

function calcAge2(dob) {
    const currentYear = 2021;
    const age = currentYear - dob;
    console.log(age);
    return age;
}

let varunAge = calcAge2(2002);
console.log(varunAge);

const futureAge = calcAge2(2002) + 20;
console.log(futureAge);

// Function declaration Vs Function expression (Anonymous function)

let a = 5;

logger();

function logger() {
    console.log("hello world");
}

let logger2 = function () {
    console.log("hello world from anonymous");
};

// Arrow Functions

// const arrowFucntion = (parameter) => return statement;

// const calculateMyAge = () => console.log("Hello from ArrowFucntion")

const calculateMyAge = (dob, currentYear) => {
    return currentYear - dob;
};

    // directly logging
    console.log(calculateMyAge(1999, 2021))

    // storing in a variable and logging that stored variable
    var myAge = calculateMyAge(2000, 2021);
    console.log(myAge);


// Juice maker function example
// const juiceMaker = (apples, oranges) => {
//     return `Juice is made with ${apples} apples and ${oranges} oranges`
// }
// let myJuice = juiceMaker(4, 2);
// let myJuice2 = juiceMaker(5, 2);
// console.log(myJuice, myJuice2);


// Functions calling another function

const slicer = (fruit) => fruit * 5;

const juiceMaker = (apples, oranges) => {

    let applePieces = slicer(apples);
    let orangePieces = slicer(oranges);

    return `Juice is made with ${applePieces} apples and ${orangePieces} oranges`
}


let myJuice = juiceMaker(4, 2);
// let myJuice2 = juiceMaker(5, 2);
console.log(myJuice);

console.log(function(asdf));