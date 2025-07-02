// var c = 3000
let a = 100

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log(`INNER :  ${a}`);
// }

// console.log(a);
// console.log(b);
// console.log(c);



function one() {
    const username = "Ansh"

    function two(){
        const website = "chaiaurcode"
        console.log(username);
    }

    // console.log(website);  //! here website not define in this scope
    
    two()
}

//* in nested function child function can use part of parent function 

// one()


console.log(addone(5))
function addone(num){
    return num+1
}


addtwo(3) //* addtwo is not defined return Error
const addtwo = function(num){ //! function return value store in varible 
    return num+2
}

