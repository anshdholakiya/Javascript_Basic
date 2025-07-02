const marvel_heros = ["thor","ironman","spider man"]
const dc_heros = ["superman","flash","batman"]


// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);


// const all_heros= marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
// console.log(all_heros);


//* spred array with ... this operator spred array like droping a glass 

const spred = [...marvel_heros, ...dc_heros]

// console.log(spred);

const another_array = [1,2,3,[4,5,6],5,[3,2,[1,2,[true,false]]]]

const flat_array = another_array.flat(Infinity)  
// *giving depth in flat how much it going deeper for making flat

console.log(flat_array);



console.log(Array.isArray("ansh"));

console.log(Array.from("AnshDholakiya"));  // making it array

console.log(Array.from({name:"Ansh"})); // return empty array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // it will make array


let a = [1,2,3]
console.log(Array.from(a,(x)=>x*x));

for (let i = 0; i  < 10; i++) {
}