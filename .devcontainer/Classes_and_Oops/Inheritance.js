class User {
    constructor(username) {
        this.username = username;
    }

    logme(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const  chai = new Teacher("chai", "chai@teacher.com", "123456");
chai.logme();
chai.addCourse();

const masalachai = new User("masalachai");
masalachai.logme();
// masalachai.addCourse(); // This will throw an error because addCourse is not defined in User class.  

console.log(chai instanceof Teacher); // true
console.log(chai instanceof User);// true
console.log(masalachai instanceof Teacher); // false
console.log(masalachai instanceof User); // true