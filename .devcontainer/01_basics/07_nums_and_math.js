// new keyword is used to create an instance of a class or a constructor function

//this keyword refers to the current object that is executing the code

// const score = 400
// console.log(score) // 400, logging the value of the score variable

// const balance = new Number(1000) // creating a number object using the Number constructor
// console.log(balance) // [Number: 1000], logging the number object
// console.log(balance.toString()) // "1000", converting the number to a string using the toString method
// console.log(balance.toString().length) // 4, getting the length of the string representation of the number
// console.log(balance.toFixed(2)) // "1000.00", formatting the number to 2 decimal places using the toFixed method

// const newNumber = 234.896
// console.log(newNumber.toPrecision(5)) // "234.90", formatting the number to 5 significant digits using the toPrecision method
// console.log(newNumber.toPrecision(3)) // "23.9", formatting the number to 3 significant digits using the toPrecision method
// console.log(newNumber.toExponential(2)) // "2.39e+1", formatting the number in exponential notation with 2 decimal places using the toExponential method

// const hundreds = 1000000 
// console.log(hundreds.toLocaleString()) // "1,000,000", formatting the number with commas as thousands separators using the toLocaleString method
// console.log(hundreds.toLocaleString('en-IN')) // "10,00,000", formatting the number with commas as thousands separators in Indian locale using the toLocaleString method


/***************************************************************  MATHS  ****************************************************************************************************** */

// Math is a built-in object in JavaScript that provides properties and methods for mathematical constants and functions

console.log(Math) // logging the Math object to see its properties and methods
console.log(Math.abs(-5)) // 5, getting the absolute value of a number using the abs method
console.log(Math.ceil(4.2)) // 5, rounding a number up to the nearest integer using the ceil method
console.log(Math.floor(4.8)) // 4, rounding a number down to the nearest integer using the floor method
console.log(Math.round(4.5)) // 5, rounding a number to the nearest integer using the round method
console.log(Math.max(1, 5, 3, 9, 2)) // 9, getting the maximum value from a list of numbers using the max method
console.log(Math.min(1, 5, 3, 9, 2)) // 1, getting the minimum value from a list of numbers using the min method

console.log(Math.random()) // a random number between 0 (inclusive) and 1 (exclusive) using the random method********************************

console.log(Math.sqrt(16)) // 4, getting the square root of a number using the sqrt method
console.log(Math.pow(2, 3)) // 8, getting the result of a number raised to a power using the pow method
console.log(Math.PI) // 3.141592653589793, getting the value of pi using the PI property
console.log(Math.E) // 2.718281828459045, getting the value of Euler's number using the E property

console.log(Math.random() * 10) // a random number between 0 (inclusive) and 10 (exclusive) by multiplying the result of Math.random() by 10
console.log((Math.random() * 10) + 1) // a random number between 1 (inclusive) and 11 (exclusive) by multiplying the result of Math.random() by 10 and adding 1
console.log(Math.floor(Math.random() * 10) + 1) // a random integer between 1 (inclusive) and 10 (inclusive) by multiplying the result of Math.random() by 10, adding 1, and rounding down to the nearest integer using the floor method   

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // a random integer between min (inclusive) and max (inclusive) by multiplying the result of Math.random() by the range of numbers (max - min + 1), adding min, and rounding down to the nearest integer using the floor method  
