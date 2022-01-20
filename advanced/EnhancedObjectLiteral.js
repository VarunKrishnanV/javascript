// object literal

let frd = ["friend1", "friend2", "friend3"];

let friends = {
  [frd[0]]: {
    name: "naveen",
    age: 21,
  },
  [frd[0 + 1]]: {
    name: "nandha",
    age: 20,
  },
  ["friend" + 3]: {
    name: "vijay",
    age: 21,
  },
  friend4: {
    name: "mukunthan",
    age: 21,
  },
};
console.log("friends: ", friends);

let student = {
  name: "varun",
  age: 20,
  isMarried: true,
  //   variables
  friends,
  //   functions
  logger() {
    console.log("Hello");
  },
  cgpa: [89, 99, 9, 9, 9, 9],
};

console.log("student: ", student);
