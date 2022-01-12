// Rest pattern and parameters

/* 
1. spread => packed to unpacked | right side of =  | values separated by commas
2. rest => unpacked to packed | left side of = | variables separated by commas
*/

// spread operator
let spreadArray = [1, 2, 3, ...[4, 5], 6];
console.log("spreadArray: ", spreadArray);

// rest pattern
/*
1. only one rest pattern should be there
2. it should be at last
3. it doesnt include the values excluded by us while packing up
*/

let restArray = ["shaju", "varun", "naveen", "mukunthan", "vijay", "nandha"];
let [stud1, , stud2, ...others] = restArray;
console.log(stud1);
console.log(stud2);
console.log(others);

let webDevs = {
  number: 4,
  names: ["shaju", "varun", "naveen", "mukunthan"],
  depts: ["cse", "it"],
  clg: "Paavai",
};

// rest in objects
let { number, names, ...others2 } = webDevs;
console.log(number, names, others2);

// functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};

add(5, 3);
add(1, 2, 3, 4, 5);
add(1, 2, 5, 12, 123, 123, 31, 23, 1, 23);

// functions
const add = function (name, ...numbers) {
  console.log(name, numbers);
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};

add("varun", "naveen", 5, 3);
add(1, 2, 3, 4, 5);
add(1, 2, 5, 12, 123, 123, 31, 23, 1, 23);

let arr = [1, 3, 4, 5];
add(...arr); //add(1, 3, 4, 5)
