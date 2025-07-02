const title = document.getElementById('title')

//  document.getElementById('title').style.backgroundColor = "green"

title.innerHTML //! give inner HTML whole
title.innerText //! only give visible text
title.textContent //! give all information even if hidden


document.querySelector('h2') //! first h2 tag whole HTML content
document.querySelector('#title') //! for ID
document.querySelector('.heading') //! for Class

document.querySelectorAll('h2') //! return all node that have h2


const password = document.querySelector('input[type="password"]') //* also select input box


const templiList = document.querySelectorAll('li')[0] //! we can access it like Array 
//* In NodeList expand prototype then you can see we can't use map method in Node List
//! queryselectorall return Nodelist not array 



const tempclasslist = document.getElementsByClassName('templist')
//! except getElmentsByClassName all getelementby give HTML Collection that we need to convert into array 

let HTML_collection_to_array = Array.from(tempclasslist)
//* after converting into array we can use our map,filetr,forEach loops property


// 1.innerHTML: returns all html nodes 
// 2.textContent : returns all text content
// 3.innerText : gives the text in the selected node
// 4.querySelector
// 5.querySelectorAll
// 6.getAttribute
// 7.setAttribute