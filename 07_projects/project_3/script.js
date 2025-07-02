
// let hour = date.getHours()
// let minute = date.getMinutes()
// let second = date.getSeconds()

let clock = document.querySelector(".center > #clock")


setInterval(function(){
  const date =new Date()
  clock.innerHTML = `${date.toLocaleTimeString()}`
},1000)