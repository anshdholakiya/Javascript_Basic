let allBtn = Array.from(document.querySelectorAll(".button"))
let body = document.querySelector("body")


// console.log(allBtn)

allBtn.forEach((button)=>{
  console.log(button)

  button.addEventListener("click",(e)=>{
    // console.log(e)
    // console.log(e.target.id)
    let color = e.target.id
    body.style.backgroundColor = color
  })
})

console.log("hey")