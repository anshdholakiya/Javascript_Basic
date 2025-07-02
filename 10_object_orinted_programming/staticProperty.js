class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `static method has been caalled`
    }
}

let ansh = new User("ansh")

console.log(User.createId());



