class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

let chai = new User("chai")


class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }


    addCourse(){
        console.log(`this course is added by ${this.username}`);
    }
}

let ramesh = new Teacher("ramesh","r@rku.ac.in","abc123")

console.log(ramesh);
ramesh.addCourse()
ramesh.logMe()


console.log(chai instanceof User);