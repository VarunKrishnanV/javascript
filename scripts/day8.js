"use strict";

// How to solve a problem

// How to find a fix a bog using console and chrome debugger

// write a function to return Addition two numbers

const addition = function () {
//   - Get input from user
    let num1 = Number(prompt("Enter the number 1"));
    console.log("num1: ", typeof num1);
    let num2 = Number(prompt("Enter the number 2"));
    console.log("num2: ", num2);
//   - calculate the sum of two numbers
    let result = num1 + num2;
  // -return the result
//   display the result to the user
    console.log(result);
    return result;
};

console.log(addition());
let functionResult = addition();
console.log("functionResult: ", functionResult);
// 
let c = functionResult + 2;
let c = functionResult + 2;
let c = functionResult + 2;
let c = functionResult + 2;
let c = functionResult + 2;
let c = functionResult + 2;
let c = functionResult + 2;

//write a function to Find the amplitutde of the temperatures from the given array

const temperatures = [1, 2, 4, 5, 100, -1, -4, -10];

const calculateAmplitude = function (inputArray) {
  //1. store the inputArray in a variable
  let temps = inputArray;
  console.log('temps: ', temps);

  let max = temps[0];
  let min = temps[0];

  //2. Find the maximum temperature from the given array
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] >= max) {
      max = temps[i];
    }
  }

  //3. Find the minimun temperature from the given array
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] <= max) {
      min = temps[i];
    }
  }

  console.log(max, min);

  //4. Subtract min from max
  let amplitutde = max - min;

  //5. Return the result to the user
  return amplitutde;
};

let amplitudeFunctionResult = calculateAmplitude(temperatures);
console.log(amplitudeFunctionResult);
