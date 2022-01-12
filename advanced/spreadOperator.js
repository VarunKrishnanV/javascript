"use strict";

// spread operator
// 1. using spread operator

let a = [1, 2, 3, 10];
let b = [4, 5, 6];
// a = [1, 2, 3, 4, 5, 6]

// method1
a.push(b[0]);
a.push(b[1]);
a.push(b[2]);

console.log(a);

// method 2
a = [1, 2, 3, 10, b[0], b[1], b[2]];
console.log(a);

//spread method

let c = [...a, ...b];
console.log(c);

let jsDev = ["varun", "shaju", "naveen", "mukuntha"];
let dev = [...jsDev];
console.log(dev);

let name = "varun";
let spreadedName = [...name];
console.log(spreadedName);

// 2. spread operator vs destructuring

// 3. use cases : merging (applicable for all iterables)

// 4. Can't use inside template literal

let fruits = [234, 52, 23, 4, 3];
// console.log(`fruits are ${...fruits}`)

// 5. spread operatore in fuctions
// let animals = [prompt("animal1"), prompt("animal2"), prompt("animal3")];

// console.log(animals);

function printAnimals(animal1, animal2, animal3) {
  console.log(animal1);
  console.log(animal2);
  console.log(animal3);
}
printAnimals(...animals);


// primitive value vs reference values



