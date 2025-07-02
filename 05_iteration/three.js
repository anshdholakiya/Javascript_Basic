const myObject  = {
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift :"swift by apple"
}


//! for in loops
// for (const key in myObject) {
//     console.log(myObject[key]); //! this is good way to write it
//     //* myObject.key not work because key is in string format
//     //* key defaulty in string format
// }
// console.log(myObject["cpp"]);


const arr = [1,2,3,4,5]

for (const key  in arr) {
   console.log(arr[key]);
}
//! for in loop give keys of array that is indexs

