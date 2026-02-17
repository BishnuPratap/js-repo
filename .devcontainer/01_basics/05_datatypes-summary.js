// primitive data types
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint

// non-primitive data types or reference data types
// 1. object
// 2. array
// 3. function

// all data types in JavaScript are either primitive or non-primitive.
//  Primitive data types are immutable, meaning their values cannot be changed once they are assigned. 
// Non-primitive data types are mutable, meaning their values can be changed after they are assigned.

// summary of data types in JavaScript

// primitive data types

// 1. number => for numeric values, can be integer or floating-point
// 2. string => for textual data, enclosed in single or double quotes
// 3. boolean => for true or false values
// 4. null => for intentional absence of any value
// 5. undefined => for variables that have been declared but not assigned a value
// 6. symbol => for unique identifiers
// 7. bigint => for numbers larger than 2 to the power of 53 - 1

// non-primitive data types or reference data types

// 7. object => for complex data structures, can contain properties and methods
// 8. array => for ordered collections of values, can contain any data type
// 9. function => for reusable blocks of code that perform a specific task

// JavaScript is a dynamically typed language, which means that variables can hold values of any data type and can change their type at runtime. 
// This allows for flexibility in programming but also requires careful handling of data types to avoid errors.  

const score = 100 // number
const scorevalue = 100.3 // number
const isloggedin = false // boolean
const outsideTemperature = null // null

let userEmail // undefined

const id = Symbol("123") // symbol
const anotherId = Symbol("123") // symbol

console.log(id === anotherId) // false because each symbol is unique even if they have the same description

const bigNumber = 9007199254740991n // bigint


//reference data types

const heros = ["Batman", "Superman", "Wonder Woman"] // array

let myObj = {
    name: "Hitesh",
    age: 30,
    isMarried: false
} // object

const sayHello = function() {
    console.log("Hello World")
} // function

console.log(typeof outsideTemperature) // object because null is considered an object in JavaScript
console.log(typeof anotherId) // symbol
console.log(typeof bigNumber) // bigint
console.log(typeof heros) // object because arrays are considered objects in JavaScript
console.log(typeof myObj) // object
console.log(typeof sayHello) // function because functions are a special type of object in JavaScript

