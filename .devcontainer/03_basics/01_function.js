// FUNCTION - function is a block of code designed to perform a particular task. It is executed when "something" invokes it (calls it).

// function functionName(parameters) {
//     // code to be executed
// }

function saymyname() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// saymyname() // Output: H I T E S H

// You can also pass parameters to a function, which are values that the function can use to perform its task. Parameters are defined in the parentheses of the function declaration and can be used within the function body.

// function greet(name) {
//     console.log("Hello, " + name + "!");
// }
// greet("Hitesh") // Output: Hello, Hitesh!

// // You can also return a value from a function using the return statement. The return statement specifies the value that will be returned to the caller when the function is executed.

function add(a, b) {
    return a + b;
}
const sum = add(89, 3) 
// console.log(sum) 

// function addtwonumbers(a, b) {
//     console.log(a + b);
// }
// addtwonumbers(5, 3) // Output: 8

function addtwonumbers(a, b) {
    let result = a + b;
    return result;
}
const result = addtwonumbers(5, 3) // Output: 8
// console.log("result is: ", result) // Output: result is: 8

// // You can also define a function using a function expression, which is an anonymous function that is assigned to a variable.

function loginusermessage(username){
    if(username === undefined)  { // or we can also use if(!username) to check if the username is falsy (undefined, null, empty string, etc.) 
       // console.log("Please enter a valid username.");
        return;
    }
    return `Welcome, ${username}! You have successfully logged in.`;
}
// console.log(loginusermessage("Hitesh")) // Output: Welcome, Hitesh! You have successfully logged in.
// console.log(loginusermessage()) // Output: Please enter a valid username.

function calculatecartprice(val1,val2, ...num1) { // The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
// In this case, num1 will be an array containing all the arguments passed to the function.
    return(num1)
}
// console.log(calculatecartprice(300,400,500,600,700)) // Output: [300, 400, 500, 600, 700]
console.log(calculatecartprice(300,400,600,800,900,1000)) // Output: [600, 800, 900, 1000]

// use the object in a function 

const user = {
    username: "Hitesh",
    price: 500  
}

function displayUserInfo(anyobject) {
    console.log(`Username: ${anyobject.username}, Price: ${anyobject.price}`);
}
// displayUserInfo(user) // Output: Username: Hitesh, Price: 500
displayUserInfo({
    username: "Bishnu",
    price: Infinity
})

const mynewarray = [300,200,500,100,700]

function returnSecondvalue(getArray)    {
    return getArray[1]      
}
// console.log(returnSecondvalue(mynewarray)) // Output: 200
console.log(returnSecondvalue([100,200,300,400,500])) // Output: 200