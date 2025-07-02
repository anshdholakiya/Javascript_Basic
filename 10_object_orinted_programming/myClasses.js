class User{
    constructor(username,email,password ){
        this.username = username
        this.email = password
        this.password = password
    }


    encryptpassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

let chai = new User("chai","chai@gmail.com","123")

console.log(chai.encryptpassword())
console.log(chai.changeUsername())

// Behind the scene