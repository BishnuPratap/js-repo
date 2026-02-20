// falsy values

/*    false
       0
       -0
       0n        // BigInt zero
       ""        // empty string
       null
       undefined
       NaN                       */

// truthy values

/*

"hello"        // non-empty string
1              // any non-zero number
-10
[]             // empty array
{}             // empty object
function(){}   // function
true
"0"
"false"

*/


const useremail = []

// if (useremail) {
//        console.log("Got user Email");
// }
// else {
//        console.log("Don't have user email")
// }

// if (useremail.length === 0) {
//        console.log("Array is Empty")
// }

const emptyobj = {}

if(Object.keys(emptyobj).length === 0) {
       console.log("Object is Empty")
}


// Nullish Coalescing Operator (??):  NULL   |   UNDEFINNED

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 50
// val1 = undefined ?? 30
val1 = null ?? 20 ?? 60

console.log(val1);

// Terniary Operator ==>  condition ? true statement : false statement

const iceteaprice = 100

iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80")