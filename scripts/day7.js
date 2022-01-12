// How to solve a problem

// To find the amplitutde oof an given array

// Understand the problem
// - What is amplitude
// - How to compute min and max
// - What is sensor error

// Breaking down the problem into sub problems
// - How to ignore errors
// - Find max value
// - Find min value
// - Compute the amplitude and return the result

// let temperatures = [1, 10, 30, 40, -20, -10, 0, 'error'];
// let temperatures2 = [1, 10, 30, 40, -20, -10, 0, 'error'];

// console.log(temperatures.concat(temperatures2));

// const clacTempAmplitude = function (t1, t2) {

//     const array1 = t1
//     const array2 = t2

//     const temps = t1.concat(t2)

//   let min = temps[0];
//   let max = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] !== 'number') continue;

//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }

//   let amplitude = max - min;
//   console.log('amplitude: ', amplitude);
// };

// clacTempAmplitude(temperatures, temperatures2);

//for two arrays - should we run twice
// No - merge two arrays before passing

const measuredKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsis",
    value: prompt("enter valuse"),
  };

  console.log(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(kelvin);

console.log(kelvin);

console.log();

if(){}

// 1. identify
console.log(measuredKelvin());

console.log("hello");

const clacAge = yearOfBirth => yearOfBirth;

console.log();

console.log();

if (true) {
  console.log("chennai");
}
