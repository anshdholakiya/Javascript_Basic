//! map and filter both are different 

//* both are partially same you can gemini for it
const myNums = [1,2,3,4,5,6,7,8,9,10]

let newNums = myNums.map( (num)=> {
    return num +10
})

//! chaniing of more than one method

newNums = myNums
            .map((num)=> num*10)
            .map( (num)=> num+1 ) //! map transform element of array
            .filter( (num) => num>=40 ) //! true hoy eej pass thay chhe
            //* fileter depend on true and false

// console.log(newNums);   


//! reduce method