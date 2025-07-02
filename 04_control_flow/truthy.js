const userEmail = []
if (userEmail) {
    console.log("got the user email");
}
else {
    console.log("don't get the user email")
}


//! flasy value

// false,0,-0,BigInt 0n,"",null,undefined,NaN


//! Truthy value 

// "0","false"," ",[],{},function(){}

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

// console.log(Object.keys(emptyObj));
if((Object.keys(emptyObj)).length === 0){
    console.log("Object is empty");
}




//! Nullish Coalescing Operator (??)  : null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15


console.log(val1);


//! Terniary operator
// condition ? true :false

const iceteaprice = 100
iceteaprice >= 80 ? console.log("less then 80") : console.log("more than 80");