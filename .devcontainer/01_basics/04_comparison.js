// console.log(2 == "2") // true because it only compares values and not data types
// console.log(2 === "2") // false because it compares both values and data types

// console.log(2>1) // true
// console.log(2<1) // false

// console.log(2>=2) // true
// console.log(2<=1) // false

// console.log(2!=3) // true
// console.log(2!=2) // false  

console.log("2" > 1) // true because "2" is converted to number 2 before comparison
console.log("2" < 1) // false because "2" is converted to number 2 before comparison
console.log("02" > 1) // true because "02" is converted to number 2 before comparison
console.log("02" < 1) // false because "02" is converted to number 2 before comparison

console.log("2" > "12") // true because it compares the first character of both strings and "2" is greater than "1"
console.log("2" < "12") // false because it compares the first character of both strings and "2" is greater than "1"

console.log("2" > "3") // false because it compares the first character of both strings and "2" is less than "3"
console.log("2" < "3") // true because it compares the first character of both strings and "2" is less than "3"

console.log("2" > "02") // true because it compares the first character of both strings and "2" is greater than "0"
console.log("2" < "02") // false because it compares the first character of both strings and "2" is greater than "0"

console.log(null > 0) // false because null is converted to 0 before comparison
console.log(null < 0) // false because null is converted to 0 before comparison
console.log(null == 0) // false because null is only equal to undefined and not to any other value
console.log(null === 0) // false because null is only equal to undefined and not to any other value
console.log(null >= 0) // true because null is converted to 0 before comparison
console.log(null <= 0) // true because null is converted to 0 before comparison

console.log(undefined > 0) // false because undefined is converted to NaN before comparison
console.log(undefined < 0) // false because undefined is converted to NaN before comparison
console.log(undefined == 0) // false because undefined is only equal to null and not to any other value
console.log(undefined === 0) // false because undefined is only equal to null and not to any other value\
console.log(undefined >= 0) // false because undefined is converted to NaN before comparison
console.log(undefined <= 0) // false because undefined is converted to NaN before comparison

console.log(undefined == null) // true because undefined and null are considered equal in non-strict equality
console.log(undefined === null) // false because undefined and null are not considered equal in strict equality
console.log(null === undefined) // false because null and undefined are not considered equal in strict equality
console.log(null == undefined) // true because null and undefined are considered equal in non-strict equality

