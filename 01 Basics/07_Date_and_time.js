// Date


let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString())
// console.log(mydate.toTimeString())

// console.log(mydate.toISOString());
// console.log(mydate.toJSON());

// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());

// console.log(typeof mydate); // date is object

// let myCreatedDate = new Date(2023,0,29) // year,month,day
// let myCreatedDate = new Date(2023,0,29,5,3,2)
let myCreatedDate = new Date("2023-01-14")  // yyyy-mm-dd
// let myCreatedDate = new Date("01-14-2023") // mm-dd-yyyy

// console.log(myCreatedDate.toLocaleString())



let myTimeStamp = Date.now();

// console.log(myTimeStamp) // mili second
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000)) // give time in actual second
// time since 1970 in second    


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getSeconds());
console.log(newDate.getMonth() + 1);
console.log(newDate.getMinutes( ))



let a = newDate.toLocaleString('default',{
    weekday : "long",
    day : "2-digit",
    hour : "numeric",
    second : "2-digit"
})

// console.log(a);



// setTimeout(() => {
//     console.log("this is after 10 sec")
// ;
// }, 2000);


