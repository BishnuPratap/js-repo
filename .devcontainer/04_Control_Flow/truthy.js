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