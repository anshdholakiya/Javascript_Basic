// let intervalId;

// document.getElementById('start').addEventListener('click', function () {
//   intervalId = setInterval(function () {
//     let val1 = Math.floor(Math.random() * 256 + 1);
//     let val2 = Math.floor(Math.random() * 256 + 1);
//     let val3 = Math.floor(Math.random() * 256 + 1);

//     document.body.style.backgroundColor = `rgb(${val1},${val2},${val3})`;
//     console.log(val1,val2,val3);

//   }, 1000);
// });

// document.getElementById('stop').addEventListener('click', function () {
//   clearInterval(intervalId);
// });



const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
  
    for(let i=0 ; i<6 ; i++){
      let randomindex = Math.floor(Math.random()*16)
      color += hex[randomindex]
    }
    return color;
  }
  
  console.log(randomColor())
  
  let intervalId;
  const startChangingcolor = function(){
    if(!intervalId){
        intervalId = setInterval(function(){
          document.body.style.backgroundColor = randomColor();
        },100)
    }
  }
  const stopChangingcolor = function(){
    clearInterval(intervalId);
    intervalId = null; // cleaning memory
  }
  
  document.getElementById("start").addEventListener('click',startChangingcolor)
  document.getElementById("stop").addEventListener('click',stopChangingcolor)