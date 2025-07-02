const myNums = [1, 2, 3]


// let intialvalue = 0
// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`accumaltor : ${acc} and current value : ${currval}`);
//     return acc + currval
// },intialvalue)

//! here acc,currval only have two parameter first accumator is defined as intialvalue after word it take (acc + currval) sum as new accumator

const myTotal = myNums.reduce((acc, curr) => (acc + curr), 0)

console.log(`Total value is : ${myTotal}`);


const shoppingCart = [
    {
        itemName: "jscourse",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "mobile developement",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc,item)=> (acc + item.price) , 0)

console.log(priceToPay);