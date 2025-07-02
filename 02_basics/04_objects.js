// const tinderUser = new Object() //* singleton  object
const tinderUser = {}  //* non singleton object


tinderUser.id = "234sdf"
tinderUser.name = "raj"
tinderUser.isLoggedIn = false


const regularUser = {
    email: "another@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ansh",
            lastname: "dholakiya"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

//! merging two obj

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 4: "a", 4: "b" }

// const obj3 = {obj1,obj2} //! wrong way 

// const obj3 = Object.assign({},obj1,obj2) //* {} object is target object and other one is source 
// console.log(obj3);

const obj3 = { ...obj1, ...obj2 }
console.log(obj3)


users = [
    {
        id: 1,
        email: "h@gmail.com"

    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    }
]

console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // * output datatype is array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("isLoggedIn"));
