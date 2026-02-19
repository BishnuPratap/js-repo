const user = {
    username: "Hitesh",
    price: 500,

    welcomeMessage: function() {
        console.log(`Welcome, ${this.username}! You have successfully logged in. Your price is ${this.price}.`);
        // console.log(this) // Output: { username: 'Hitesh', price: 500, welcomeMessage: [Function: welcomeMessage] }
    }   
}

// user.welcomeMessage() // Output: Welcome, Hitesh! You have successfully logged in. Your price is 500.
// console.log(this) // Output: Window { ... } in a browser environment, or global object in Node.js

// function chai() {
//     let username = "Hitesh";
//     console.log(this.username) // Output: Window { ... } in a browser environment, or global object in Node.js
// }
// chai()

// Arrow functions do not have their own this context. Instead, they inherit the this value from the enclosing lexical context.
const arrowFunction = () => {
    console.log(this) // Output: Window { ... } in a browser environment, or global object in Node.js
}

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(5, 3)) // Output: 8


// const addTwo = (num1, num2) => num1 + num2; // Implicit return
// console.log(addTwo(5, 3)) // Output: 8

const addTwo = (num1, num2) =>  ({username: "Hitesh"}) // Implicit return of an object literal;
console.log(addTwo(5, 3))