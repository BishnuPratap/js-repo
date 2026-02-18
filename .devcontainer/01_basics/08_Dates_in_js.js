// Dates in JavaScript

// The Date object in JavaScript is used to work with dates and times. It provides methods for creating, manipulating, and formatting dates and times.

// let myDate = new Date() // creating a new Date object, which represents the current date and time
// console.log(myDate) // logging the Date object to see its value 
// console.log(myDate.toString()) // converting the Date object to a string representation using the toString method
// console.log(myDate.toDateString()) // converting the Date object to a date string representation using the toDateString method
// console.log(myDate.toTimeString()) // converting the Date object to a time string representation using the toTimeString method
// console.log(myDate.toISOString()) // converting the Date object to an ISO string representation using the toISOString method
// console.log(myDate.getFullYear()) // getting the year from the Date object using the getFullYear method
// console.log(myDate.getMonth()) // getting the month from the Date object using the getMonth method (0-11, where 0 represents January and 11 represents December)
// console.log(myDate.getDate()) // getting the day of the month from the Date object using the getDate method (1-31)
// console.log(myDate.getHours()) // getting the hours from the Date object using the getHours method (0-23)
// console.log(myDate.getMinutes()) // getting the minutes from the Date object using the getMinutes method (0-59)
// console.log(myDate.getSeconds()) // getting the seconds from the Date object using the getSeconds method (0-59)
// console.log(myDate.getMilliseconds()) // getting the milliseconds from the Date object using the getMilliseconds method (0-999)

// // months in JavaScript are zero-indexed, which means that January is represented by 0, February by 1, and so on, up to December which is represented by 11.
// // This can be a common source of confusion when working with dates in JavaScript, so it's important to keep this in mind when creating or manipulating Date objects.

// let specificDate = new Date("2022-01-01") // creating a new Date object with a specific date by passing a date string to the constructor
// console.log(specificDate.toDateString()) // logging the specific Date object to see its value

// let anotherDate = new Date(2022, 0, 1) // creating a new Date object with a specific date by passing year, month (0-11), and day to the constructor
// console.log(anotherDate.toDateString().length) // logging the specific Date object to see its value, and also checking the length of the string representation of the date

// let myCreateDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreateDate.toLocaleString()) // creating a new Date object with a specific date and time by passing year, month (0-11), day, hours, and minutes to the constructor, and logging its locale string representation

// let myTimestamp = Date.now() // getting the current timestamp in milliseconds since January 1, 1970, using the Date.now() method
// console.log(myTimestamp) // logging the current timestamp to see its value

// console.log(Math.floor(Date.now() / 1000)) // getting the current timestamp in seconds by dividing the result of Date.now() by 1000 and rounding down to the nearest integer using the floor method

let newDate = new Date() // creating a new Date object to represent the current date and time
console.log(newDate) // logging the new Date object to see its value
console.log(newDate.getTime()) // getting the timestamp of the new Date object in milliseconds since January 1, 1970, using the getTime method
console.log(newDate.getFullYear()) // getting the year from the new Date object using the getFullYear method
console.log(newDate.getMonth()) // getting the month from the new Date object using the getMonth method (0-11)
console.log(newDate.getDate()) // getting the day of the month from the new Date object using the getDate method (1-31)
console.log(newDate.getHours()) // getting the hours from the new Date object using the getHours method (0-23)
console.log(newDate.getMinutes()) // getting the minutes from the new Date object using the getMinutes method (0-59)
console.log(newDate.getSeconds()) // getting the seconds from the new Date object using the getSeconds method (0-59)
console.log(newDate.getMilliseconds()) // getting the milliseconds from the new Date object using the getMilliseconds method (0-999)

//`${newDate.getDay()} and the time `

newDate.toLocaleString('default', { weekday: 'long' , timeZone: 'Asia/Kolkata'}) // getting the day of the week from the new Date object in a long format using the toLocaleString method with options