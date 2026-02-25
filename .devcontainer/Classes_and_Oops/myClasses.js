// ES6 is a version of JavaScript that introduced many new features, including classes and object-oriented programming (OOP) concepts.

// In ES6, you can define a class using the `class` keyword. Here's an example of a simple class definition:

// class User {
//     constructor(username, email, password) { 
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         // A simple encryption method (for demonstration purposes only)
//         return this.password.split('').reverse().join('');
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}_CHANGED`;
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "0123456789");
// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


//behind scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return this.password.split('').reverse().join('');
};

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}_CHANGED`;
};

const tea = new User("tea", "tea@gmaiol.com", "9876543210");

console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.changeUsername());