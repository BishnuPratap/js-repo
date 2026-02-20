// if

// const userloggedin = true;

// if ( 2 === "2") {
//     console.log("User is logged in")
// }

// const temperature = 30;

// if (temperature === 25) {
//     console.log("It's a hot day");
// } else {
//     console.log("It's a cold day");
// }

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// // console.log(`user power: ${power}`)

// const balance = 1000

// if (balance < 500)  {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance  < 900) {
//     console.log("less than 900");
// } else {console.log("less than 1200")};

const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if (userloggedin && debitcard) {
    console.log("Allow to buy course");
}

if (loggedinfromgoogle || loggedinfromemail) {
    console.log("User logged in");
}

