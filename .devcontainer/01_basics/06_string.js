const name = "Hitesh" // string

//console.log("Hello, " + name + "!") // string concatenation

console.log(`Hello My name is ${name} and I am learning JavaScript`) // string interpolation using template literals

const gameName = new String("Chess") // string object created using String constructor

console.log(gameName[0]) // C, accessing the first character of the string using index

console.log(gameName.length) // 5, getting the length of the string

console.log(gameName.toUpperCase()) // CHESS, converting the string to uppercase

console.log(gameName.toLowerCase()) // chess, converting the string to lowercase

console.log(gameName.includes("ess")) // true, checking if the string includes a substring

console.log(gameName.startsWith("Ch")) // true, checking if the string starts with a substring

console.log(gameName.endsWith("ss")) // true, checking if the string ends with a substring

console.log(gameName.indexOf("e")) // 2, getting the index of the first occurrence of a substring

console.log(gameName.slice(-8 , 4)) // Ches, extracting a portion of the string from index -8 to 4 (not inclusive), negative index counts from the end of the string

console.log(gameName.replace("Chess", "Checkers")) // Checkers, replacing a substring with another substring

console.log(gameName.split("")) // [ 'C', 'h', 'e', 's', 's' ], splitting the string into an array of characters

console.log(gameName.trim()) // Chess, removing whitespace from both ends of the string (not applicable here as there is no whitespace) 

console.log(gameName.repeat(3)) // ChessChessChess, repeating the string 3 times

console.log(gameName.charAt(0)) // C, getting the character at a specific index

console.log(gameName.charCodeAt(0)) // 67, getting the Unicode value of the character at a specific index

console.log(gameName.concat(" Game")) // Chess Game, concatenating another string to the original string

console.log(gameName.substring(0, 4)) // Ches, getting a substring from index 0 to 4 (not inclusive)

console.log(gameName.__proto__) // String.prototype, accessing the prototype of the string object, which contains methods and properties that can be used on string 

const url = "https://www.example.com/path/to/resource?query=string#fragment"

console.log(url.split("?")) // [ 'https://www.example.com/path/to/resource', 'query=string#fragment' ], splitting the URL into two parts: the base URL and the query string with fragment identifier

console.log(url.replace("example.com", "newdomain.com")) // https://www.newdomain.com/path/to/resource?query=string#fragment, replacing the domain in the URL with a new domain