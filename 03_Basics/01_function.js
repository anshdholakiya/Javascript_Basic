
function saymyname(){
    console.log("my name is ansh dholakiya")
}

function addtwonumber(n,m){
    return n+m
    console.log("ansh") //! this never get execute 
}

const a = addtwonumber(1,10)
console.log(a);


function loginuserMessage(user = "sam") { //* default argument
    if(user === undefined){
        console.log("please enter the username");
        return
    }else{
        console.log(`${user} just loged in`);
    }
}

loginuserMessage("Raj")



function calculatecartprice(val1,val2,...num1){ //! Rest operator in function 
    return num1
}

console.log(calculatecartprice(200,400,150,1,2,4,5,5));



const user={
    username : "Ansh",
    price:1000000
}


//! Function with Object 

function handlingObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handlingObject(user)


const myNewArray = [100,200,300,400]
function returnsecondvalue(getarray) {
    return getarray[1]
}
console.log(returnsecondvalue(myNewArray));