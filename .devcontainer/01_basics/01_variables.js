const accountId = 144533
let accountemail = "hitesh@google.com"
var accountPassword = "12345678"
accountcity = "Bangalore"
let accountstate;
//accountId = 123456 // This will throw an error because accountId is a constant and cannot be reassigned

accountemail = "hts@g.com"
accountPassword = "87654321"
accountcity = "Mumbai"

console.log(accountemail)

/*PREFER NOT TO USE "var" because of issue in block scope and function scope */

console.table([accountId, accountemail, accountPassword, accountcity, accountstate])    