// // Objects in javascript are a collection of key-value pairs.
// // They are used to store and organize data in a structured way. 
// // Objects can contain properties (key-value pairs) and methods (functions that operate on the object).

// //singleton object meaning an object that is created only once and can be used throughout the program.
// // object.create

// //literal object meaning an object that is created using the object literal syntax, which is a shorthand way of creating objects in JavaScript.

// const mysym = Symbol("status") // This creates a new symbol with the description "status". Symbols are unique and immutable data types that can be used as keys in objects. 

// const MyObject = {
//     name: "John", // This is a property of the object. The key is "name" and the value is "John".
//     "full name": "John Doe", // This is another property of the object. The key is "full name" and the value is "John Doe". Note that the key has a space in it, so it must be enclosed in quotes.
//     [mysym]: "active", // This is another property of the object. The key is the value of the variable "mysym" and the value is "active". Note that the key is computed at runtime, so it must be enclosed in square brackets.
//     age: 30, // This is another property of the object. The key is "age" and the value is 30.
//     location: "New York", // This is another property of the object. The key is "location" and the value is "New York".
//     email: "john@example.com", // This is another property of the object. The key is "email" and the value is "
//     isloggedin: false, // This is another property of the object. The key is "isloggedin" and the value is false.
//     lastloginDays: ["Monday", "Tuesday", "Wednesday"] // This is another property of the object. The key is "lastloginDays" and the value is an array of strings.   
// }

// // console.log(MyObject.email) 
// // console.log(MyObject["email"])
// // console.log(MyObject["full name"]) 
// // console.log(MyObject[mysym])
// // console.log(typeof MyObject[mysym]) // Output: symbol

// MyObject.email = "john.doe@example.com"
// // Object.freeze(MyObject) // This method freezes an object, preventing new properties from being added to it, existing properties from being removed, and existing properties from being changed.
// MyObject.email = "john.doe@chatgpt.com" // This will not change the email property because the object is frozen.
// // console.log(MyObject)

// MyObject.greeting = function() {
//     console.log("Hello India") 
// } // This is a method of the object. The key is "greeting" and the value is a function that logs "Hello India" to the console.

// MyObject.greeting2 = function() {
//     console.log(`Hello India, My name is ${this.name} and I am ${this.age} years old.`) 
// } // This is another method of the object. The key is "greeting2" and the value is a function that logs a greeting message to the console, using the "name" and "age" properties of the object. The "this" keyword refers to the current object, allowing us to access its properties within the method.
// console.log(MyObject.greeting())
// console.log(MyObject.greeting2())

// // SINGLETON OBJECT
// // A singleton object is an object that is created only once and can be used throughout the program.
// //  It is often used to manage shared resources or to provide a global point of access to certain functionality. 
// // In JavaScript, you can create a singleton object using an immediately invoked function expression (IIFE) or by using a class with a static method that returns the instance of the class.

// // const user = new Object() // This creates a new object using the Object constructor. It is equivalent to using the object literal syntax ({}).

// // console.log(user) // Output: {}

const Muser = {} 

Muser.id = "159bhu"
Muser.name = "Sammy"
Muser.isloggedin = false

// console.log(Muser) 

// const Fuser = {
//     email: "anu@gmail.com",
//     fullname: { 
//         userfullname: { 
//             firstname: "Anu",
//             lastname: "Kumari"
//         }
//     }
// }

// console.log(Fuser.fullname.userfullname.firstname) // Output: Anu

// const obj1 = {1: "a", 2: "b", 3: "c"}
// const onj2 = {4: "d", 5: "e", 6: "f"}         
// // const obj3 = {obj1, onj2} // This creates a new object with two properties, "obj1" and "onj2", which are the objects obj1 and onj2 respectively. The keys of the new object will be "obj1" and "onj2", and the values will be the objects obj1 and onj2.
// // console.log(obj3) // Output: {obj1: {1: "a", 2: "b", 3: "c"}, onj2: {4: "d", 5: "e", 6: "f"}}
// const obj3 = Object.assign({}, obj1, onj2) // The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
// console.log(obj3) // Output: {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f"}

// const obj4 = {...obj1, ...onj2} // The spread operator (...) is used to spread the properties of an object into another object. It is a shorthand way of copying properties from one object to another.
// console.log(obj4) // Output: {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f"}

// console.log(Muser)

// console.log(Object.keys(Muser)) // Output: ["id", "name", "isloggedin"]
// console.log(Object.values(Muser)) // Output: ["159bhu", "Sammy", false]
// console.log(Object.entries(Muser)) // Output: [["id", "159bhu"], ["name", "Sammy"], ["isloggedin", false]]

// console.log(Muser.hasOwnProperty("email")) // Output: false
// console.log(Muser.hasOwnProperty("name")) // Output: true

/*********************************************************************************************************************************************************************************************************************************************************
 ************************************OBJECT DESTRUCTURING ************************************************************************************************************************************************************************************************/

// Destructuring is a convenient way of extracting multiple values from data stored in objects and arrays. 
// It allows you to unpack values from arrays or properties from objects into distinct variables.

const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh"
}

console.log(course.courseInstructor) // Output: Hitesh

const {courseName, price, courseInstructor} = course
console.log(courseName) // Output: JavaScript
console.log(price) // Output: 999
console.log(courseInstructor) // Output: Hitesh

const {courseName: cn, price: p, courseInstructor: ci} = course
console.log(cn) // Output: JavaScript
console.log(p) // Output: 999
console.log(ci) // Output: Hitesh 

// const navbar  = ({company}) => { // (props.company)
//     console.log(company)    
// }

// navbar(company = "Hitesh")



