class User {
    constructor(email, password){
        this.email = email;
        this._password = password;  // store internally
    }

    get email(){
        return this._email.toUpperCase();  // return with some formatting
    }   
    set email(value){
        this._email = value;
    }
    
    get password(){
        return `${this._password}hitesh`;  // return with some formatting
    }
    
    set password(value){
        this._password = value
    }
}

const hitesh = new User("hitesh@gmail.com", "1236");
console.log(hitesh.password); // "1236" in uppercase → "1236" (numbers stay same)
console.log(hitesh.email);