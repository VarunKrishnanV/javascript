// logical assignment operator => &&= ||= ??=
/*
sum = sum + 10
sum += 10
sum -= 10
sum /= 10
sum %= 10
sum *= 10
*/
// let friend = prompt("Enter your friend name")

// OR assignment operator
let friend;
friend = friend || "anonymous";
friend ||= "anonymous";

console.log("friend: ", friend);

// AND assignment operator
friend = 0;
// friend = friend && "anonymous";
friend &&= "anonymous";

console.log("friend: ", friend);

let friendCount = prompt("no of friend you have");
console.log("------------");
// friendCount = friendCount ?? "have friends";
friendCount ??= "have friends";
console.log('friendCount: ', friendCount);
