const user = {
    username : "hitesh",
    logincount : 0,
    signedIN : true,


    getUserDetails:function(){
        // console.log("I really love my papa")
        // console.log(this.username);
        console.log(this) //! this represent current context
    }
}

// console.log(user.getUserDetails())
// console.log(this);



function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings =  function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this //! if we did't write return than also it automatically return the current context
}

const userOne = new User("Hitesh",3,true)
const userTwo = new User("Ansh",13,false) //! value is overwrite if not use new keyword
//* new give it new instance so value overwrite nhi thay

console.log(userOne.constructor);
// console.log(userTwo)

//todo Instance of operator

console.log(userOne instanceof User);
// console.log(userTwo instanceof );
