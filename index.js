

// let FetchData = async ()=>{
//     try {
//         let res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//         let data = await res.json()
// console.log(data)

//     } catch (error) {
//         console.log(error)
//     }
// }

// FetchData()


// import { navbar } from "../Components/nav.js";

// let nav_div= document.getElementById("mnav")
// nav_div.innerHTML=navbar()



const openMenu = document.querySelector("#show-menu");

const closeMenu = document.querySelector("#hide-menu");

const sideMenu = document.querySelector("#nav-menu");

openMenu.addEventListener("click", function(){
    sideMenu.classList.add('active')
})

closeMenu.addEventListener("click", function(){
    sideMenu.classList.remove('active')
})


