// // Array in javscript is a data structure that can hold multiple values at once.
// // It is a special type of object that allows you to store and manipulate a collection of items.
// // Arrays are ordered, meaning that the items in an array have a specific order and can be accessed using their index.

// const MyArray = [0, 1, 2, 3, 4, 5] // This is an array of numbers. The index of the first element is 0, the second element is 1, and so on.

// // console.log(MyArray[0]) // Output: 0
// // console.log(MyArray[1]) // Output: 1
// // console.log(MyArray[2]) // Output: 2
// // console.log(MyArray[3]) // Output: 3
// // console.log(MyArray[4]) // Output: 4
// // console.log(MyArray[5]) // Output: 5

// // // You can also create an array of strings, objects, or even other arrays.
// // const MyStringArray = ["Hello", "World", "JavaScript"]
// // const MyObjectArray = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]

// // console.log(MyStringArray[0]) // Output: Hello
// // console.log(MyObjectArray[1].name) // Output: Bob


// //Array Methods

// // // Arrays in JavaScript are dynamic, meaning that you can add or remove elements from an array at any time.
// // MyArray.push(6) // Adds the number 6 to the end of the array
// // MyArray.push(7) // Adds the number 7 to the end of the array
// // MyArray.pop() // Removes the last element from the array (7 in this case)
// // MyArray.unshift(-1) // Adds the number -1 to the beginning of the array
// // MyArray.shift() // Removes the first element from the array (-1 in this case)



// // console.log(MyArray.includes(3)) // Output: true
// // console.log(MyArray.includes(10)) // Output: false

// // The includes() method checks if a specific element is present in the array and returns true or false accordingly.    

// // console.log(MyArray.indexOf(3)) // Output: 3
// // console.log(MyArray.indexOf(10)) // Output: -1

// // The indexOf() method returns the index of the first occurrence of a specified element in the array, or -1 if it is not found.

// // const newArray = MyArray.join() // The join() method creates a new string by concatenating all the elements of the array, separated by a specified separator (comma by default).
// // console.log(newArray) // Output: "0,1,2,3,4,5"
// // console.log(typeof newArray) // Output: string

// console.log(MyArray)

// // Slice, Splice

// console.log("A" , MyArray);

// const myn1 = MyArray.slice(1,3) // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
// console.log(myn1) // Output: [1, 2]

// console.log("B" , MyArray); 

// const myn2 = MyArray.splice(1,3) // The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The original array will be modified.
// console.log(myn2) // Output: [1, 2, 3]

// console.log("C" , MyArray); // Output: [0, 4, 5]


// marvel_herores.push(dc_herores) 
// console.log(marvel_herores.length) // Output: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", ["Superman", "Batman", "flash", "wonder woman"]]
// console.log(marvel_herores[5]) // Output: ["Superman", "Batman", "flash", "wonder woman"]

//CONCATENATION
// const allheroes = marvel_herores.concat(dc_herores)
// console.log(allheroes) // Output: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Superman", "Batman", "flash", "wonder woman"]

const marvel_herores = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"]

const dc_herores = ["Superman", "Batman", "flash", "wonder woman"]

const allheroes = [...marvel_herores, ...dc_herores] // The spread operator (...) allows you to expand an iterable (like an array) into individual elements.
// In this case, it is used to concatenate the two arrays into a single array.
// console.log(allheroes) // Output: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Superman", "Batman", "flash", "wonder woman"]

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const flatArray = another_Array.flat(Infinity) // The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// In this case, we use Infinity as the depth to flatten all nested arrays regardless of their depth.
console.log(flatArray) // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("hitesh")) // Output: false
console.log(Array.from("hitesh")) // Output: ["h", "i", "t", "e", "s", "h"]
// The Array.isArray() method checks if a value is an array and returns true or false accordingly.
// The Array.from() method creates a new array instance from an array-like or iterable object. In this case,
// it converts the string "hitesh" into an array of its individual characters.

console.log(Array.from({name: "hitesh"})) // Output: []
// In this case, the Array.from() method is called with an object that has a name property.
// However, since the object is not iterable and does not have a length property,
// it cannot be converted into an array, resulting in an empty array being returned.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // Output: [100, 200, 300]
// The Array.of() method creates a new array instance with a variable number of arguments, regardless of the number or type of the arguments.
//  In this case, it creates an array containing the three score variables.