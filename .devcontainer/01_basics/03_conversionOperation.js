let score = 33

console.log(typeof score) // number

// or console.log(typeof(score))

let valueinNumber = Number("33") // converts string to number
console.log(valueinNumber) // 33
console.log(typeof valueinNumber) // number

let valueinString = String(33) // converts number to string
console.log(valueinString) // "33"
console.log(typeof valueinString) // string

let booleanValue = Boolean(1) // converts number to boolean
console.log(booleanValue) // true
console.log(typeof booleanValue) // boolean

let nullValue = null
console.log(nullValue) // null
console.log(typeof nullValue) // object (this is a known quirk in JavaScript)

let undefinedValue = undefined
console.log(undefinedValue) // undefined
console.log(typeof undefinedValue) // undefined

let symbolValue = Symbol("id")
console.log(symbolValue) // Symbol(id)
console.log(typeof symbolValue) // symbol

let num = undefined
console.log(typeof num) // undefined
console.log(num) // undefined

let valueNumber = Number(num) // converts undefined to number (NaN)
console.log(valueNumber) // NaN= Not a Number
console.log(typeof valueNumber) // number

//notes
// 1. When we convert a value to a number and it cannot be converted, it results in NaN (Not a Number).
// 2. The typeof operator can sometimes return unexpected results, such as typeof null returning "object". This is a quirk in JavaScript and should be kept in mind when checking types.
// "33" => 33
// 33 => "33"
// 1 => true
// 0 => false
//"" => false
// "hitesh" => true

let isloggedin = "hitesh"

let isloggedinNumber = Boolean(isloggedin) // converts boolean to number
console.log(isloggedinNumber) // true

