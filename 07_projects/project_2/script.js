const form = document.querySelector('form')

// this usecase will give you empty value at page load
// const height = parseFloat(document .querySelector('#height').value)

form.addEventListener("submit",(e)=>{
  e.preventDefault() //! this method prevent browser to when evenlistner occure stop to do submit form in server or anything

  const height = parseFloat(document .querySelector('#height').value)
  const weight = parseFloat(document.querySelector('#weight').value)
  const result = document.querySelector("#results")
  
  if(height==="" || height < 0 || isNaN(height)){
    result.innerHTML = "please give a valid height"
  }
  else if(weight==="" || weight < 0 || isNaN(weight)){
    result.innerHTML = "please give a valid weight"
  }else{
    const bmi=  (weight / ((height*height)/10000)).toFixed(2)

    // show the result
    result.innerHTML = `<span> ${bmi} is your BMI </span>` 

    let quote = document.createElement("h2")
    if(bmi < 18.6){
      quote.appendChild(document.createTextNode("You are Under Weight"))
    }else if(bmi < 25){
      quote.appendChild(document.createTextNode("You are Normal Weight"))
    }else{
      quote.appendChild(document.createTextNode("You are Over Weight"))
    }
    document.querySelector("#results").appendChild(quote)
  }

})

