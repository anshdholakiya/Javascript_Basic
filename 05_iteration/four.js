const coding = ["js","ruby","java","python","cpp"]

// coding.forEach((item,index,array)=>{ //! threw arrow function
//     console.log(item,index,array);
// })
//* simple callback function


// coding.forEach( function(item){
//     console.log(item);
// })

// function printMe(i){
//     console.log(i);
// }

// coding.forEach(printMe); //! direct write name of callback function if function is anywhere than write a name of it

//* only give reference not () because we not need to execute there


//! excessing objects from array in iteration
const mycoding =[
    {
        languageName:"javascript",
        languageFile:"Js"
    },
    {
        languageName:"Java",
        languageFile:"Java"
    },
    {
        languageName:"C++",
        languageFile:"cpp"
    }
]

mycoding.forEach((obj)=>{
   console.log(obj.languageFile)
})








