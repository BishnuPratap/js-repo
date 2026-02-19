// scope means the accessibility of variables, functions, and objects in some particular part of your code during runtime. 
// In JavaScript, there are three types of scopes: global scope, function scope, and block scope.


// Global Scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
// function scope: Variables declared inside a function are in the function scope and can only be accessed within that function.
// block scope: Variables declared inside a block (e.g., inside an if statement or a loop) are in the block scope and can only be accessed within that block.
//   Block scope is created by using the let and const keywords, while var does not create block scope and is function-scoped instead.

let a = 300
if (true) {
    let a = 10
const b = 20
// console.log(`inner: ${a}`) 
}

// console.log(a);

// nested function scope: Functions can be nested inside other functions, creating a new scope for each function. 
// Variables declared in the outer function are accessible in the inner function, but variables declared in the inner function are not accessible in the outer function.

//closure: A closure is a function that has access to its own scope, the outer function's scope, and the global scope.
// Closures are created when a function is defined inside another function and the inner function references variables from the outer function. 
// The inner function retains access to the outer function's variables even after the outer function has finished executing.

// NESTED FUNCTION SCOPE

function one() {
    const username = "Hitesh";
    function two() {
        const message = "Welcome to JavaScript!";
        console.log(username); // Output: Hitesh
    }
    // log(message); // Output: ReferenceError: message is not defined
    // two();
}
one();

if (true) {
    const username = "Hitesh"
    if (username === "Hitesh") {
        const message = "Welcome to JavaScript!";
        console.log(username + " " + message); //
    }
   // console.log(message); // Output: ReferenceError: message is not defined
}
//  console.log(username); // Output: ReferenceError: username is not defined

console.log(addone(5)) 
function addone(num) {
    return num + 1;
}


const addtwo = function(num) {
    return num + 2;
}
console.log(addtwo(5))

