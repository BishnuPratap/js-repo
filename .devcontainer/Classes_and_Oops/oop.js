const user = {
    username: "hitseh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // this will refer to the global object (window in browsers) when used outside of any function or object context.

// Constructor function for creating user objects

function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    return this; // This is implicit in constructor functions, but can be included for clarity.
}

// Creating instances of User using the constructor function

const user1 = new User("hitseh", 8, true); // The 'new' keyword creates a new object and sets 'this' to that object within the constructor function.
const user2 = new User("john_doe", 5, false);

console.log(user1.constructor); // This will show the User function, as user1 is an instance of User.
console.log(user2);

