"use strict";  // treat all JS code as newer version

// alert("Helloo") // we are using node js not browser

console.log(3 + 3)


let name = "ansh"
let age = 18
let possible = true

// number => 2 ^ 53 range of number
// boolean
// string => string

// null => standalone value

// undefinded = 
// sybol => unique
// object => 


console.log(typeof(undefined) );




/* Datatype summary */


// primitives Datatype
// 7 type : string,number,boolean,null,undefined,symbol,BigInt
const score = 100
const scoreValue = 100.3

const isLoogedIn = true
const outSideTemp = null

let userEmail

console.log(userEmail);


// give Symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 12342142134213421n

console.log(typeof(bigNumber));

// Reference type(Non Primitive)
// Array,Objects,Functions

const heros = ["shaktiman","iron man","spider man"] ;

let myObj = {
    name:"ansh",
    age:22
}


const myFunction = function() {
    console.log("Hello world");
}


myFunction()

console.log(typeof(myFunction));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack( Primitive ) , Heap (non Primitive)

let myNickName = "ansh";

let anothername = myNickName;
console.log(anothername);

anothername = "anshudo"
console.log(anothername);
console.log(myNickName)

// stack memory get copy


let userOne = {
    name:"ansh",
    id : 1707
}

let userTwo = userOne;

userTwo.id = 2006;  
console.log(userOne);

// in heap memory referece is same
