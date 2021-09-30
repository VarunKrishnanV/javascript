'use strict'
// for loop

// for(initialization; condition; updation){
//     //statement
// }

for(let i = 0; i <= 10; i++){
    // console.log(i);
}

// continue and break

for(let i = 1; i<=10 ; i++){
    if(i%2 === 0){
        // console.log(`${i} is even`)
        break;
    }
    // console.log("Hello");
}

// while loop
// while(condition){
//     // statements
// }

let i = 1;
while(i<=10){
    // console.log(i);
    i++;
}

// loop inside an loop

for(let i=1; i<=5; i++ ){
    // console.log(`Unit ${i}`)
    for(let j=1; j<=5; j++){
        // console.log(`Exercise ${i}.${j}`)
    }
}

// using loop to iterate through an array

let animals = ["tiger", "lion", "chimp", "tiger", "lion", "chimp"];
let newAnimals = [];
// newAnimals[0] = tiger
// newAnimals[1] = lion
// console.log(animals.length);
// console.log(newAnimals);

// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);
// console.log(animals[3]);

for(let i=0; i < animals.length ; i++){
    console.log(animals[i]);
    // newAnimals[i] = animals[i];
    console.log(newAnimals);
    newAnimals.push(animals[i])
    console.log(newAnimals);
}

console.log(newAnimals);




// while vs for

// unit 1
// ex 1.1
// ex 1.2
// ex 1.3
// ex 1.4
// ex 1.5
// unit 2
