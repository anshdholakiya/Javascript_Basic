function setUsername(username){
    //! complex data base call
    this.username = username
    this.address = "address is something "
    console.log("inner function call yey ......");
    console.log(this);
}

function createUser(username,email,password){ //* function is object 

    setUsername.call(this,username) //! passing createUser function this to function so all referance stay in memory
    //* after function call memory will clear so for holding referance of varible .call use 

    this.email =email
    this.password = password
    // return this; //! if not write then also automatically return by default
}

const programmer = new createUser("Ansh_dholakiya","anshdholakiya@google.com",123)

console.log(programmer);