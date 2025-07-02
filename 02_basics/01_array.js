// array

const array = [1,2,34,4,true,"ansh"]

const array2 = new Array(1,2,3,4) // making array in heap memory
// console.log(array[0]);


// console.log(array2.length)

// Array methods

// array.push("this is from back side")
// array2.pop()

// array2.unshift("front side added")
// array2.shift() // remove from head
// console.log(array2)

// console.log(array2.includes(3));
// console.log(array2.indexOf(3));

const newArr = array.join()

// console.log(newArr) // it is string because done string operation 
// console.log(typeof(newArr))
// console.log(array)


// slice , splice

console.log("A " , array );
const myn1 = array.slice(1,2)
console.log(myn1);
console.log("B " , array );

console.log("")

const myn2 = array.splice(1,2)
console.log(myn2);
console.log("C " , array );

