/* for..of loops and enhanced object literal*/

let numbers = [1, 2, 3, 4, 5, 6];
let [a, b] = numbers;
console.log(a, b);
// console.log(indexOf(numbers(1)));

// iteration through for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers.indexOf(numbers[i]));
  numbers[2];
}

// iteration through for..of loop
let fruits = ["apple", "orange", "pineapple", "mango"];

console.log(fruits.entries());

for (let fruit of fruits){

}

for (let fruit of fruits.entries()) {
  console.log(fruit);
}

for (let [i, el] of fruits.entries()) {
  console.log(i, el);
}
