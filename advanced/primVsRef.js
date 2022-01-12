let varunAge = 20;
let naveenAge = varunAge; //20
varunAge = 22;

console.log(varunAge, naveenAge);

let shaju = {
  name: "shaju",
  age: 21,
};

let shajuNew = shaju;

console.log(`shaju : ${shaju.age}, shajuNew : ${shajuNew.age}`);

shajuNew.age = 24;

console.log(`shaju : ${shaju.age}, shajuNew : ${shajuNew.age}`);
// console.log(shaju, shajuNew);

// const apple = 10000;
// apple = 1000;
// console.log(apple);

const fruits = {
  name: "apple",
  vitamin: "c",
  rate: 1231,
};

console.log(fruits);

fruits.rate = 1231231231;
console.log(fruits);

let proLang = {
  lang1: "js",
  lang2: "python",
  lang3: "cpp",
  nonProg: ["html", "css"],
};

let newLang = Object.assign({}, proLang);

console.log(proLang, newLang);

newLang.lang3 = "ruby";
newLang.nonProg[0] = "php";
console.log(proLang, newLang);
