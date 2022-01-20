// optional Chaining
let rest = {
//  name: "a2b",
  address: "Tirupur, Tamilnadu, India",
  "123rating": 5.0,
  menu : ["dosa", "idly", "tea"],
  openingHours: {
    mon: {
      open: 8,
      close: 10,
    },
    tue: {
      open: 0,
      close: 0,
    },
    wed : {
        open : 12,
    },
    sun: {
      open: null,
      close: null,
    },
  },
  add(a , b){
    return a + b
  }
};

// console.log(rest);
// console.log(rest.openingHours);
// console.log(rest.openingHours.mon);
// console.log(rest.openingHours.mon.asd);

// console.log(rest)

// Optional Chaining ?.  ternary : ?:

console.log(rest.openingHours.mon)

if (rest.openingHours) {
    if (rest.openingHours.mon) {
      console.log(rest.openingHours.mon.open);
    }
}

// console.log(0 ?? "not exists");

// Examples
let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]

for (let day of days){
    console.log(`restaurant opens at ${rest.openingHours[day]?.open || "none"} on ${day}`);
}

// methods
console.log(rest.add?.(0, 0) ?? "method doesnt exist");


console.log(Object.keys(rest.openingHours))


// for(let i =0; i < days.length; i++) console.log(days[i]);

// for (let day of days){
//     console.log(day);
// }
























// objecname.key
// objectname[key]

// console.log(rest.name);
// console.log(rest["menu"]);

// let hotelmenu = menu
// console.log(rest[hotelmenu]);








