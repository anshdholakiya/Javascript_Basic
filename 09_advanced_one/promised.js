//! creation of promise 


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise


const promiseOne = new Promise((resolve, reject) => { //! also store promise in varible
    // Do an async task
    //*  DB calls , crptography , network

    setTimeout(() => {
        console.log("Async task is complete");
        resolve() //! resolve is connected to then
    }, 1000);
})

promiseOne.then(function () {
    console.log("Promise consumed")
})

//todo+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//! small code
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2 is complete");
        resolve()
    }, 1000);

}).then(function () {
    console.log("Async 2 resolved");
})




//todo+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function () {
        // done some work or data come
        resolve({ name: "hareshbhai", email: "h@raj.com" }, [1, 2]) //! pass data threw the resolve 
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})



//todo+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "hareshbhai", pasword: "123" })
        }
        else {
            reject("Error something is squizy")
        }
    }, 100)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then(function (username) {  //! what upper then return that was argument of second this
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolve or rejected"))



//todo+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "papa", pasword: "123" })
        }
        else {
            reject("are you cheat your papa")
        }
    }, 100)
})

// //! this is optinal to .then and .catch wathever you wan't to use 

async function consumePromiseFive() {

    try {
        const response = await promiseFive  //* await use because it is network request  
        //! here promiseFive is object so can't write like this promiseFive() <-- this is function 
        console.log(response);
        //* in this part if error come then it wan't work good so use try and catch block
    }
    catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


//todo+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

async function getAllusers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users") //* network request
        // console.log(response);  
        const data = await response.json()  //! here it take time to converting json also put await becuase await waiting for work done
        console.log(data);
    } catch (error) {
        console.log("E : ", error);
    }
}
//! try catch is neccessary for async await because it throw an error when don't get data

// getAllusers()



//* writing upper function in .then and .catch format also promise format

fetch('https://api.github.com/users/kishanchauhan01') //! because fetch return promise

    .then((response) => response.json()) //* here this syntax directly return the stuff in one line
    //! upper return value parameter to next then it called thenable or chanable or channing
    .then((data) => {
        console.log(data); //! two then is necessary because first one get only promis is pending try it your self
    })
    .catch((error) => {
        console.log(error);
    })


//todo ==> fetch has VIP queue(prority queue) that do task faster than task queue like(setTimeout etc..) even both have same time then also fetch is faster



//todo ===> here first then return is parameter of second then and it will use data

//! first then it  give like   promise<pending>



//* await means please wait