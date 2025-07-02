
const arr = [1,12,3,4,50]

//! for of loop 
// for (const i of arr) {
//     console.log(i);
// }
// const str = "Greeting"
// for (const i of str) {
//     console.log(i);
// }


//! Maps
const map = new Map()
map.set(1,"a")
map.set(2,"b")
map.set(1,"c") //* it only store unique value

// console.log(map);
for (const [key,value] of map) {
    console.log(`${key} -> ${value}`);
}

const myObject ={
    game1: "NFS",
    game2: "spider-man"
}

for (const [key,value]  of myObject) {
    console.log(key,value); //! Object is not Iterable in loops
}

