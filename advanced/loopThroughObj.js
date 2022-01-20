// looping through object : keys / values / keys and values

// let friends = ["varun", "naveen", "shaju", "mukunthan"];


// for--of loop 
// for (let friend of friends){
//     console.log(friend);
// }

// for loop
// console.log("---------------");
// for(let i=1; i<friends.length; i++){
//     console.log(friends[i]);
// }

let rest = {
  //  name: "a2b",
  address: "Tirupur, Tamilnadu, India",
  "123rating": 5.0,
  menu: ["dosa", "idly", "tea"],
  openingHours: {
    mon: {
      open: 8,
      close: 10,
    },
    tue: {
      open: 0,
      close: 0,
    },
    wed: {
      open: 12,
    },
    sun: {
      open: null,
      close: null,
    },
  },
  add(a, b) {
    return a + b;
  },
};


// console.log(rest)

// console.log(Object.keys(rest))
// let keys = Object.keys(rest);

for (const key of Object.keys(rest)) {
//   console.log(key);
}

console.log("-----------------");

for (const key of Object.values(rest)) {
//   console.log(key);
}


// let a = Object.entries(rest);

console.log("-----------------");
for (const [key, value] of Object.entries(rest)) {
  console.log(key, " ---", value);
}


let [key, value] = [address, "Tirupur, Tamilnadu, India"];

// destructuring
// let ages = [1, 2, 3, 4, 5]
// let [a, b, c] = ages
// console.log(a);

// let rest = {
//   name: "a2b",
//   address: "Tirupur, Tamilnadu, India",
//   "123rating": 5.0,
//   menu: ["dosa", "idly", "tea"],
//   openingHours: {
//     mon: {
//       open: 8,
//       close: 10,
//     },
//   },
//   add(a, b) {
//     return a + b;
//   },
// };

// let rest = [
//   [name, "a2b"],
//   [address, "Tirupur, Tamilnadu, India"]
//   ["123rating", 5.0]
//   [menu, ["dosa", "idly", "tea"]],
//   [openingHours, {mon: {open: 8,close: 10}}],
//   [add, function(a, b){ return a + b }]
// ]

// rest[0][1]

// a = ["A", 123, true, [1, 2, 3], {name : "varun", age : 20}]

// a[4]