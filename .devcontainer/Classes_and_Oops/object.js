// new in javascript simply means creating a new instance of an object. 
// When you use the 'new' keyword with a constructor function, it creates a new object and sets the 'this' keyword to that new object within the constructor function. 
// This allows you to initialize properties and methods on the new object.

function multiplyBy5(num) {
    return num * 5;
}
multiplyBy5.power = 2;

console.log(multiplyBy5(5)); // This will output 25, as the function multiplies the input by 5.
// console.log(multiplyBy5.power); // This will output undefined, as the 'power' property is not defined on the function object.
console.log(multiplyBy5.power); // This will output 2, as the 'power' property is defined on the function object.

// In JavaScript, functions are first-class objects, which means they can have properties and methods just like any other object. 
// When you assign a property to a function, it becomes a property of that function object. 
// In this case, we assigned the property 'power' to the 'multiplyBy5' function, so we can access it using 'multiplyBy5.power'.
console.log(this); // This will refer to the global object (window in browsers) when used outside of any function or object context.
console.log(multiplyBy5); // This will output the function definition of multiplyBy5, as functions are objects in JavaScript and can be logged like any other object.
console.log(multiplyBy5.prototype); // This will output the prototype object of the multiplyBy5 function, which is an empty object by default for regular functions.


function createUser(username, score) {
    this.username = username;
    this.score = score;
    return this; // This is implicit in constructor functions, but can be included for clarity.
}

createUser.prototype.getScore = function() {
    this.score++;
    return this.score;
}
createUser.prototype.getUsername = function() {
    console.log(`price is ${this.score}`);
}
const chai = new createUser("chai", 25);   // we use the 'new' keyword to create a new instance of the createUser function, which sets 'this' to the new object being created.
const tea = new createUser("tea", 200);

chai.getScore();       
chai.getUsername();
tea.getScore();
tea.getUsername();  