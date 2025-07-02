let heroPower = {
    thor:"hammer",
    spiderman : "sling",

    getSpidermanPower : function(){
        console.log(`spidey power is${this.spiderman}`)
    }
}

const myHeros = ["My_Papa","thor","spiderman","superman"]

Object.prototype.hitesh = function(){
    console.log("hitesh is present in all objects")
}

Array.prototype.heyhitesh = function(){
    console.log("Hitesh say hello");
}

// heroPower.hitesh()
// myHeros.heyhitesh()

// heroPower.heyhitesh() //! object not have access of it


//* Inheritance

const user={
    name:"ansh",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : "js Assignment",
    fulltime : true,
    __proto__ : TeachingSupport //todo ====> called prototyple inheritance
}

Teacher.__proto__ = user //* we can access other object property with __proto__ 
//! older approach chhe bhai
//? here user object property is inhertaned in Teacher object so we can access user object property in Teacher object also

// console.log(TAsupport);
// console.log(TAsupport.isAvailable);


//todo ===> modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "Chaiaurcode       "

String.prototype.trueLength = function(){
    console.log(`${this}`);  //* here this is direct becuse we put reference of only string okay 
    console.log(`${this.trim().length}`);  //! jis ne call kiya wohi to this hai na bhai
}

anotherUsername.trueLength()
"Hitesh     ".trueLength()
"icetea      ".trueLength()





