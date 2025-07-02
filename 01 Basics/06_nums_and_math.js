const score = 40
// console.log(score);


const balance = new Number(100)

// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2)); // it fixed 2 point to precision


const otherNumber = 1123.8966

// console.log(otherNumber.toPrecision(3)); // it return answer in string

const hundred = 1000000

// console.log(hundred.toLocaleString()); // it give comas in number


// +++++++++++++++++++++ Math +++++++++++++++++

// console.log(Math)

// console.log(Math.abs(-43));
// console.log(Math.round(2.5));
// console.log(Math.ceil(2.5)); // top value
// console.log(Math.floor(2.9));  // floor value
// console.log(Math.sqrt(25))


console.log((Math.random() * 10) + 1);  // avoiding zero adding one here

const min = 10
const max = 20

console.log(Math.floor( Math.random() * (max-min + 1)+min))  // for generating value in range