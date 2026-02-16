"use strict"; // treat all JS files as modern and newer versions of JavaScript

// alert(3+3) // we are using nodejs not browser, so alert will not work here, it is only for browsers

let name = "Hitesh"
let age = 30
let isMarried = false
let state = null
let city = undefined

console.log([name, age, isMarried, state, city])

// Number => 2 to the power of 53---------------------------------==== typeof 123 is number
// bigint => for numbers larger than 2 to the power of 53-------------------------------==== typeof 9007199254740991n is bigint
// string => sequence of characters ""-------------------==== typeof "Hitesh" is string
// boolean => true or false---------==== typeof true is boolean

// null => intentional absence of any value--------==== // typeof null is object

// undefined => variable declared but not assigned any value--------==== typeof undefined is undefined
// symbol => unique identifier  ------------------==== typeof Symbol("id") is symbol