// What is array?
// hotel[0]
// hotel.address

// Destructing of arrays
let student = {
  name : "naveen",
  job : "student",
  dept : "it",
  marks : [100, 45, 35],
  address : ["maathur", "thanjavur", "tamilnadu", [12345 , 67890]]
}

const addressL1 = student.address[0]
const addressL2 = student.address[1]
const addressL3 = student.address[2]

// const [address1, address2, address3] = student.address

let [x, y, z] = student.address;
// [ , a, b] = student.address;

// console.log(a, b);
// console.log(x, y, z);
// console.log(addressL1, addressL2, addressL3);

// swapping two numbers

/*
  a = 5, b = 10
*/

let a =5, b=10;
temp = a
a = b; // a = 10, b = 10
b = temp; // b = 10, a = 10
console.log(a, b);

// swapping through destructuring

let menu = ["pizza", "burger", "egg"]

let [f1, f2, f3] = menu;
console.log(f1, f2, f3);
[f3, f2, f1] = [f1, f3, f2]
console.log(f1, f2, f3);


// Destructing inside destructing or nested destructring
// [a1, , , a2] => returns the array
[a1, , ,[p1, p2]] = student.address
console.log(a1,p1, p2);

// Returning multiple values from a function using array and then destructing it

function multipleReturn(){
  let a = 1, b =2, c=3, d=4;
  return [a, b, c, d]
}

let result = multipleReturn() //[1, 2, 3, 4]
let [r, t, w, q] = result;
console.log(result);
console.log(r, t, w, q);

// Setting default value while destructuring

let defaultValues = [11, 22, 33, 44, 55];

// let defaultValues = []
let [aa = 1, bb = 2, cc = 3, dd = 4, ee = 5, ff = 6] = defaultValues;

console.log(aa, bb, cc, dd, ee, ff);