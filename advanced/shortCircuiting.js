/* 
 short circuiting in || and &&
 logical operator : to combine two conditions(>,<, ===, ==, !==, !=)

    logical operator :
    1. use any data type not only comparison
    2. return any data type
    3. occur Short circuit evaluation / short circuiting
*/

console.log(5 < 10 || 5 > 10);
console.log(5 < 10 && 5 > 10);

// short circuiting in ||
console.log(0 || false || "varun" || 23);
console.log(0 || false || "" || undefined);


// conventional method

// ternary operator ?:
/*

if ("") {
    
}else{

}

condition ? true : false

*/
let friend
// friend = "naveen";
let result = friend ? friend : "no friends";
console.log(result);

// short circuiting of ||
console.log("------------");
let result2 = friend || "varun";
console.log(result2);

// let friendCount = 0;
// console.log("------------");
// let resultCount = friendCount || "have friends";
// console.log('resultCount: ', resultCount);

// short circuiting of &&
let favFruit = 0
let resultFruit = favFruit && "pineapple"
console.log('resultFruit: ', resultFruit);

function add(a , b){
    return a + b;
}
let num1, num2;
num1 = 4;
num2 = 3

let sum = num1 && num2 && add(num1, num2)
console.log('sum: ', sum);

if(num1 && num2){
    let sum2 = add(num1, num2)
    console.log('sum2: ', sum2);
}

// nullish coalescing operator ??
// nullish values => null, undefined {0 and "" is considered as true}

let friendCount = false;
console.log("------------");
let resultCount = friendCount ?? "have friends";
console.log("resultCount: ", resultCount);
