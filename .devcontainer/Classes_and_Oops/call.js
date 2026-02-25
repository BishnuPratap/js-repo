function SetUsername(username){
    //complex DB call
    this.username = username;
    console.log("called");
}
// const user = new SetUsername("JohnDoe");

function craeteUser(username, email, password) {
    SetUsername.call(this,username);
    this.email = email;
    this.password = password;
}
const chai = new craeteUser("chai","chai@fb.com","12345");
console.log(chai);