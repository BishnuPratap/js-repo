// let score = 33

// console.log(typeof score) // number

// // or console.log(typeof(score))

// let valueinNumber = Number("33") // converts string to number
// console.log(valueinNumber) // 33
// console.log(typeof valueinNumber) // number

// let valueinString = String(33) // converts number to string
// console.log(valueinString) // "33"
// console.log(typeof valueinString) // string

// let booleanValue = Boolean(1) // converts number to boolean
// console.log(booleanValue) // true
// console.log(typeof booleanValue) // boolean

// let nullValue = null
// console.log(nullValue) // null
// console.log(typeof nullValue) // object (this is a known quirk in JavaScript)

// let undefinedValue = undefined
// console.log(undefinedValue) // undefined
// console.log(typeof undefinedValue) // undefined

// let symbolValue = Symbol("id")
// console.log(symbolValue) // Symbol(id)
// console.log(typeof symbolValue) // symbol

// let num = undefined
// console.log(typeof num) // undefined
// console.log(num) // undefined

// let valueNumber = Number(num) // converts undefined to number (NaN)
// console.log(valueNumber) // NaN= Not a Number
// console.log(typeof valueNumber) // number

// //notes
// // 1. When we convert a value to a number and it cannot be converted, it results in NaN (Not a Number).
// // 2. The typeof operator can sometimes return unexpected results, such as typeof null returning "object". This is a quirk in JavaScript and should be kept in mind when checking types.
// // "33" => 33
// // 33 => "33"
// // 1 => true
// // 0 => false
// //"" => false
// // "hitesh" => true

// let isloggedin = "hitesh"

// let isloggedinNumber = Boolean(isloggedin) // converts boolean to number
// console.log(isloggedinNumber) // true


//*****************************Operations in JavaScript*******************************//

let value = 3
let negvalue = -value
//console.log(negvalue) // -3


// console.log(2+2) // 4
// console.log(2-2) // 0
// console.log(2*2) // 4
// console.log(2/2) // 1
// console.log(2%2) // 0 (modulus operator gives the remainder)
// console.log(2**3) // 8 (exponentiation operator gives the result of raising the first operand to the power of the second operand)

let str1 = "Hello"
let str2 = "World"
let str3 = str1 + " " + str2 // concatenation operator combines two strings into one
console.log(str3) // "Hello World"

// console.log("3" + 5) // "35" (string concatenation, the number 5 is converted to a string and concatenated with "3")
// console.log("3" - 5) // -2 (the string "3" is converted to a number and then the subtraction is performed)
// console.log("3" * 5) // 15 (the string "3" is converted to a number and then the multiplication is performed)
// console.log("3" / 5) // 0.6 (the string "3" is converted to a number and then the division is performed)
// console.log("3" % 5) // 3 (the string "3" is converted to a number and then the modulus operation is performed)
// console.log("3" ** 5) // 243 (the string "3" is converted to a number and then the exponentiation is performed)

// // In JavaScript, when you perform operations between different data types,
// //  JavaScript will try to convert the values to a common type before performing the operation.
// //  This is known as type coercion. For example, when you add a string and a number,
// //  JavaScript will convert the number to a string and concatenate them.
// //  When you subtract a string from a number,
// //  JavaScript will convert the string to a number and perform the subtraction.

// console.log(3 + "7") // "37" (string concatenation, the number 3 is converted to a string and concatenated with "7")
// console.log(3 - "7") // -4 (the string "7" is converted to a number and then the subtraction is performed)
// console.log(3 * "7") // 21 (the string "7" is converted to a number and then the multiplication is performed)
// console.log(3 / "7") // 0.42857142857142855 (the string "7" is converted to a number and then the division is performed)
// console.log(3 % "7") // 3 (the string "7" is converted to a number and then the modulus operation is performed)
// console.log(3 ** "7") // 2187 (the string "7" is converted to a number and then the exponentiation is performed)    

// console.log("3" + "7") // "37" (string concatenation, both "3" and "7" are strings and are concatenated together)
// console.log("3" - "7") // -4 (both "3" and "7" are converted to numbers and then the subtraction is performed)
// console.log("3" * "7") // 21 (both "3" and "7" are converted to numbers and then the multiplication is performed)
// console.log("3" / "7") // 0.42857142857142855 (both "3" and "7" are converted to numbers and then the division is performed)
// console.log("3" % "7") // 3 (both "3" and "7" are converted to numbers and then the modulus operation is performed)
// console.log("3" ** "7") // 2187 (both "3" and "7" are converted to numbers and then the exponentiation is performed)

// console.log(true + true) // 2 (both true values are converted to 1 and then added together)
// console.log(true + false) // 1 (the true value is converted to 1 and the false value is converted to 0, then added together)
// console.log(false + false) // 0 (both false values are converted to 0 and then added together)
// console.log(true - true) // 0 (both true values are converted to 1 and then subtracted from each other)
// console.log(true - false) // 1 (the true value is converted to 1 and the false value is converted to 0, then subtracted)
// console.log(false - false) // 0 (both false values are converted to 0 and then subtracted from each other)
// console.log(true * true) // 1 (both true values are converted to 1 and then multiplied together)
// console.log(true * false) // 0 (the true value is converted to 1 and the false value is converted to 0, then multiplied)
// console.log(false * false) // 0 (both false values are converted to 0 and then multiplied together)
// console.log(true / true) // 1 (both true values are converted to 1 and then divided by each other)
// console.log(true / false) // Infinity (the true value is converted to 1 and the false value is converted to 0, then divided, resulting in Infinity)
// console.log(false / false) // NaN (both false values are converted to 0 and then divided by each other, resulting in NaN)
// console.log(false / true) // 0 (the false value is converted to 0 and the true value is converted to 1, then divided, resulting in 0)

// console.log(true + "7") // "true7" (the true value is converted to a string and concatenated with "7")
// console.log(true - "7") // -6 (the true value is converted to 1 and the string "7" is converted to a number, then the subtraction is performed)
// console.log(true * "7") // 7 (the true value is converted to 1 and the string "7" is converted to a number, then the multiplication is performed)
// console.log(true / "7") // 0.14285714285714285 (the true value is converted to 1 and the string "7" is converted to a number, then the division is performed)
// console.log(true % "7") // 1 (the true value is converted to 1 and the string "7" is converted to a number, then the modulus operation is performed)
// console.log(true ** "7") // 1 (the true value is converted to 1 and the string "7" is converted to a number, then the exponentiation is performed)
// console.log(false + "7") // "false7" (the false value is converted to a string and concatenated with "7")
// console.log(false - "7") // -7 (the false value is converted to 0 and the string "7" is converted to a number, then the subtraction is performed)
// console.log(false * "7") // 0 (the false value is converted to 0 and the string "7" is converted to a number, then the multiplication is performed)
// console.log(false / "7") // 0 (the false value is converted to 0 and the string "7" is converted to a number, then the division is performed)
// console.log(false % "7") // 0 (the false value is converted to 0 and the string "7" is converted to a number, then the modulus operation is performed)
// console.log(false ** "7") // 0 (the false value is converted to 0 and the string "7" is converted to a number, then the exponentiation is performed)    


console.log("1" + 2 + 3) // "123" (string concatenation, the number 2 is converted to a string and concatenated with "1", then the number 3 is converted to a string and concatenated with "12")
console.log(4 + 1 + 2 + 3) // 10 (all numbers are added together)
console.log(4 + 1 + 2 + "3") // "73" (the numbers 4, 1, and 2 are added together to get 7, then the number 3 is converted to a string and concatenated with "7")
console.log(4 + (3 + "8")) // "78" (the number 3 is converted to a string and concatenated with "8", then the number 4 is added to the resulting string "38", resulting in "78"

let num1,num2,num3
num1 = num2 = num3 = 2+2 // this is called chaining assignment, where multiple variables are assigned the same value in a single statement
console.log(num1, num2, num3) // 4 4 4

let gamecounter = 100
// gamecounter++; // this is called post-increment operator, it increments the value of gamecounter by 1 after it is used in the expression    
// console.log(gamecounter) // 101 (the post-increment operator increments the value of gamecounter by 1 after it is used in the expression)
// gamecounter--; // this is called post-decrement operator, it decrements the value of gamecounter by 1 after it is used in the expression
// console.log(gamecounter) // 100 (the post-decrement operator decrements the value of gamecounter by 1 after it is used in the expression)

--gamecounter; // this is called pre-decrement operator, it decrements the value of gamecounter by 1 before it is used in the expression
console.log(gamecounter) // 99 (the pre-decrement operator decrements the value of gamecounter by 1 before it is used in the expression)
++gamecounter; // this is called pre-increment operator, it increments the value of gamecounter by 1 before it is used in the expression
console.log(gamecounter) // 100 (the pre-increment operator increments the value of gamecounter by 1 before it is used in the expression)
