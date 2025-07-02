//* single ton

// Object.create() // constructor method threw

// * object literals

// const temp = {
//     another_name : "raj dholakiya my brother",
//     age: 16,
//     study : "science"
// }


const mySym = Symbol("key1")

const js_user = {
    name:"Ansh",   //* name automatically converted into "name" string in object
    // aa : temp,  //! we can also store object in object

    "full_name" : "Ansh Dholakiya", //! key automatically store in string format
    lastloginDays: ["monday","sunday"],
    [mySym] : "mykey1",  //* correct syntax for symbol

    email : "ansh@google.com"
}

console.log(js_user.name);
/*
 ! there is another way to access key value in object
*/
console.log(js_user["name"]);

// console.log(js_user.full_name); //! it is not right way
console.log(js_user["full_name"])
console.log(js_user[mySym]);


js_user.email = "raj@google.com"
console.log(js_user);

// Object.freeze(js_user) //! Object is freeze can't happen any change to Object

js_user.email = "raj@chatgpt.com"
console.log(js_user.email);



//! adding function(Methods) to Object

js_user.greetings = function(){
    console.log("hello js user this is function");
}

js_user.greetingTwo = function(){
    console.log(`HEllo js user, ${this.name}`); //* this indicate parent object
}

// console.log(js_user);
console.log(js_user.greetings)
// console.log(js_user.greetings());

console.log(js_user.greetingTwo());
