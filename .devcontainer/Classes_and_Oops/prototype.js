// let myName = "hitesh      ";
// let mychannel = "chai     ";

// console.log(myName.trim().trueLength); // undefined, because trim() returns a new string and trueLength is not a property of the string object.

let myHeroes =["Thor","Hulk"]

let heroPower = {
    Thor: "hammer",
    Hulk: "smash"
}

Object.prototype.hitesh = function() { // here prototype means that we are adding a method to the Object prototype, which means that all objects will inherit this method and can use it.
    console.log("hitesh is present in all objects");
}

Array.prototype.heyHitesh = function() {
    console.log("hey hitesh, welcome to the world of prototypes");
}

// heroPower.hitesh(); // This will work because heroPower is an object and inherits from Object.prototype, which has the hitesh method.
// myHeroes.hitesh(); // This will work because myHeroes is an array and inherits from Object.prototype, which has the hitesh method.
// myHeroes.heyHitesh(); // This will work because myHeroes is an array and inherits from Array.prototype, which has the heyHitesh method.
// heroPower.heyHitesh(); // This will not work because heroPower is an object and does not inherit from Array.prototype, which has the heyHitesh method.

//inheritance

const User =  {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User; // Teacher inherits from User

// Modern Syntax for setting prototype

Object.setPrototypeOf(TeachingSupport,Teacher); // TeachingSupport inherits from Teacher.

let anotherusername = "ChaiAurCode     ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}

anotherusername.trueLength(); // This will work because anotherusername is a string and inherits from String.prototype, which has the trueLength method.
"hellomoto".trueLength(); // This will work because "hellomoto" is a string and inherits from String.prototype, which has the trueLength method.
"icecream".trueLength(); // This will work because "icecream" is a string and inherits from String.prototype, which has the trueLength method.  