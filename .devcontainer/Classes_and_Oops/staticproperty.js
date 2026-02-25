class User {
    constructor(username) {
        this.username = username;
    }

    logme(){
        console.log(`USERNAME is ${this.username}`);
    }
    static createId(){ //we can not call this method on an instance of the class, we can only call it on the class itself.
        return Math.floor(Math.random() * 1000);    
   }
}
const hitesh = new User("hitesh");
// console.log(hitesh.createId()); // This will generate a random ID for the user hitesh.

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }
}

const iphone = new Teacher("iPhone", "iphone@gmail.com", "12345");

console.log(Teacher.createId()); // This will generate a random ID for the teacher iPhone.

