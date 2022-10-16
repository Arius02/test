"use strict"
let logo =   document.querySelector(".navbar-brand img")
let slide = document.getElementById("slide-item")
let staticImage= "img/logo-dark.png"
let staticDesc = "mesh 3aref a2ol eh bs el maoqe3 makatabsh description :("

document.addEventListener("DOMContentLoaded",function(){
    document.documentElement.setAttribute('data-theme', 'light')
})

document.getElementById("darkMode").onclick = function () {

let currentTheme = document.documentElement.getAttribute('data-theme')
let switchToTheme = currentTheme === 'light' ? 'dark' : 'light'

document.documentElement.setAttribute('data-theme', switchToTheme)
if(document.querySelector("[data-theme='dark']")){
  logo.src = "img/logo-dark.png"
} else {
  logo.src = "img/logo-no-background.png"
}}
// let i =0

// let myArray= []

// async function getNews(topic){
//   let req= await fetch(`https://newsapi.org/v2/top-headlines?country=us&${topic}=technology&apiKey=42605c93e9584bd996b9bb66a2a5c59d`)
//   let res = await req.json()
//   myArray = res.articles
//   slide.style.backgroundImage = `url("${res.articles[i].urlToImage}")`;
  
//   let html= `<i class="fa-solid fa-arrow-right position-absolute top-50  translate-middle-y  text-white fa-xl "></i>
//                       <i class="fa-solid fa-arrow-left position-absolute top-50 translate-middle-y text-white fa-xl"></i>
//                     <div class="position-absolute content  d-flex justify-content-end align-items-center flex-column text-center ">
//                         <h5 class="text-white">${res.articles[i].title}</h5>
//                         <p class="text-white">${res.articles[i].description}</p>
//                     </div>`
//   document.getElementById("slide-item").innerHTML = html
//   document.querySelector(".fa-arrow-right").addEventListener("click", function(){
//     getNext()
//   })
//   document.querySelector(".fa-arrow-left").addEventListener("click", function(){
//     getPrev()
// })
// getNewsCard()
// }
// getNews("technology")
// function getNext(){
//   i++
//   if(i== myArray.length-1){
//     i=0
//   }
//   slide.style.backgroundImage = `url("${myArray[i].urlToImage}")`
//   document.querySelector("h5 ").innerHTML= `${myArray[i].title}`
//   document.querySelector("p ").innerHTML= `${myArray[i].description}`
// }
// function getPrev(){
//   i--
//   if(i==  -1){
//     i= myArray.length
//   }
//   slide.style.backgroundImage = `url("${myArray[i].urlToImage}")`
//   document.querySelector("h5 ").innerHTML= `${myArray[i].title}`
//   document.querySelector("p ").innerHTML= `${myArray[i].description}`
// }
// function getNewsCard(){
//   let html =``
//   for(i=0 ; i<myArray.length ; i++){
//   html += `<div class="col-lg-4">
//               <div class="">
//                 <div class="card position-relative" style="width: 18rem;">
//                   <img src="${myArray[i].urlToImage == null? staticImage : myArray[i].urlToImage}" class="card-img-top" alt="...">
//                   <div class="card-body">
//                     <h5 class="card-title">${myArray[i].title}</h5>
//                     <p class="card-text">${myArray[i].description == null? staticDesc : myArray[i].description} </p>
//                     <div class="shade">
//                         <a href="${myArray[i].url}" target="_blank" class="btn btn-1 position-absolute start-50 translate-middle-x">Read More..</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>`
//   }

//   document.querySelector(".newsBisCards").innerHTML= html
// }
