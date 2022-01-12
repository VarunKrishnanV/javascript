/*
###### Array ######

Creating an array    1. Literal syntax    2. Function syntax
Inseting a new value to an array
No. of elements in an array => not zero based
To get the last element of an aray  array.length - 1
Array mutation
Const and mutation 
console.table



######  Objects ######

Why object - key value, order doesnt matter

1. Object initializatin
2. Accessing an object - Member Access - dot notation, bracket notation [computed member access]
3. dot vs bracket notation
4. undefined
5. Object methods

Note : Order matters where object doesnt

*/

// Creating an array

// 1. Literal syntax
// const fruits = ["apple", "orange", "pineapple", "grapes"];

// console.table
// console.table(fruits);

// 2. Function syntax
// const vehicles = new Array('car', 'bike', 'bus')
// console.log(vehicles);

// Accesing an array element
// console.log(fruits[4])

// Inserting a new value to an array
// Array mutation
// vehicles[4] = "ship";
// vehicles[2] = "yachat";

// console.log(vehicles);

// No. of elements in an array => not zero based
// To get the last element of an aray  array.length - 1

// console.log(fruits.length);

// fruits[fruits.length - 1] = "grapes";
// console.log(fruits);

// fruits[fruits.length] = "peach";
// console.log(fruits);

// fruits[fruits.length] = "plums";
// console.log(fruits);

// Const and mutation - mutation not allowed only for primitive data types not for others - objects and arrays

// Array methods
// 1. push - insert at the end - return length of the array

const browsers = ["safari", "chrome", "opera", "brave"];
// console.log(browsers);

browsers.push("firefox");
// console.log(browsers);

// 2. unshift - insert at the beginning
browsers.unshift("IE");
// console.log(browsers);

// 3. pop - remove an element at the last
browsers.pop();
// console.log(browsers);

// 4. shift - remove the elements from the beginning of an array
browsers.shift();
// console.log(browsers);

// 5. indexOf - prints the element of an element if exists else print -1
// console.log(browsers.indexOf("explorer"));
// console.log(browsers.indexOf("brave"));

// 6. includes - es6 method do the same thing as indexOf but prints true or false - userful for conditionals
// console.log(browsers.includes("explo"));
// console.log(browsers.includes("brave"));

// let firstName = "Varun"
// function add(a, b){
//     return a + b
// }

// const funArray = [firstName, "Krishnan", "6/1/2002", 'Tirupur', add(1, 5), true, null, undefined, [1, 2, 3, 4]]

// console.log(funArray);

// console.log(funArray + 1);

// ######  Objects ######

// Why object - key value, order doesnt matter

// 1. Object initializatin

const varunInfo = [
    "Varun",
    "Krishnan",
    "6/1/2002",
    "Tirupur",
    true,
    [1, 2, 3, 4],
];

// console.log(varunInfo);

const varunInfoObj = {
    firstName: "Varun",
    lastName: "Krishnan",
    dob: "6/1/2002",
    city: "Tirupur",
    isMarried: false,
    friends: [1, 2, 3, 4],
    "123name": "vk",
};

// console.log(varunInfoObj);

// 2. Accessing an object - Member Access - dot notation, bracket notation [computed member access]
// 3. dot vs bracket notation

// Dot Notation
// console.log(varunInfoObj.firstName);

// Bracket Notation

const objKey = "Name";
// const name = prompt("FirstName or LastName")
// console.log(varunInfoObj["first" + objKey]) //lastName
// console.log(varunInfoObj["123name"])

// 4. undefined => if we try to access something that's not there in an array or obj the output will be undefined

// const varunInfoObj = {
//     firstName: "Varun",
//     lastName: "Krishnan",
//     dob: "6/1/2002",
//     city: "Tirupur",
//     isMarried: false,
//     friends: [1, 2, 3, 4],
//     "123name": "vk",
// };

// Object mutation

varunInfoObj["firstName"] = "varun";

// console.log(varunInfoObj);

// 5. Object methods

const data = {
    firstName: "Varun",
    lastName: "Krishnan",
    birthYear: 2002,
    city: "Tirupur",
    isMarried: false,
    friends: [1, 2, 3, 4],
    "123name": "vk",
    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
        return 2021 - this.birthYear;
    },
    // quote : `Hello ${this.calcAge}`

};

console.log(data.quote);
// console.log(data.calcAge());



