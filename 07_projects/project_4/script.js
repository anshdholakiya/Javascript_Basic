let randomNum = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector("#subt")
const userInp = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrhigh = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

console.log(randomNum)

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){

  submit.addEventListener("click",function(e){
    e.preventDefault()

    const guess = parseInt(userInp.value)
    validateGuess(guess)
  })
}


function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please Enter a valid number")
  }else if(guess<1){
    alert("please enter number more than 1")
  }else if(guess>100){
    alert("please enter number less than 100")
  }else{
    prevGuess.push(guess)
    if(numGuess === 10){
      displayGuess(guess)
      checkGuess(guess)
      displayMessage(`Game Over Random number was  ${randomNum}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNum){
    displayMessage(`You guess it right`)
    endGame()
  }
  else if(guess<randomNum){
    displayMessage(`Number is TOO low`)
  }
  else if( guess > randomNum){
    displayMessage(`Number is TOO high`)
  }
}

function displayGuess(guess){
  userInp.value = '' // to clean the value
  guessSlot.innerHTML += `${guess} `
  console.log(numGuess)
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`
  // remaining.textContent -= 1

}

function displayMessage(message){
  lowOrhigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInp.value = ""
  userInp.setAttribute("disabled",'') // it disable button
  submit.setAttribute("disabled",'')
  
  p.classList.add("button")
  p.innerHTML = `<h2 id="newGame"> Start new Game </h2>` 

  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click",function(e){
    randomNum = Math.floor(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ""
    remaining.innerHTML = `${11-numGuess}`
    userInp.removeAttribute('disabled')
    submit.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true
  })
}

