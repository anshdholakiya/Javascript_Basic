const user = {
    username: "Hitesh",
    price: 999,

    welcomemessage: function () {
        console.log(`${this.username} , welcome to website `);  //! this referes current context 

        console.log(this);
    }
}

// user.welcomemessage()
// user.username = "Ansh" //! context is change
// user.welcomemessage()


console.log(this); //* node environment this refer empty object



// function any(){
//     const username = "Hitesh"
//     console.log(this.username); //! this only work in object not in function 
// }

// const any = function(){
//     const username ="Hitesh"
//     console.log(this.username); //! in normal function this give global object 
//     // console.log(this); 
// }

//* Arrow function

const any = () => {
    let username = "Hitesh"
    // console.log(this.username);
    console.log(this); //! here this not give global object
}

// any()



// const addTwo = (n1,n2) =>{
//     return n1+n2;
// }

//! Arrow function Implicit return only for one line 
// const addTwo =(n1,n2) => (n1+n2) //* parenthesis should be there

//! returning Object 
const addTwo = (n1, n2) => ({ username: "Ansh" ,price:(n1+n2) })

console.log(addTwo(1, 2));
