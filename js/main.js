"use strict"
let word = "cairo"
let searchplace= document.getElementById("searchPlace")
function search(){
  word =searchplace .value
  return word
}
document.getElementById("search").addEventListener("click", function(){
  search()
  weather()
});
searchplace.addEventListener("keyup", function(){
  search()
  weather()
})
async function weather(){
  let req = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5c03dbf431164526971220429221110 &q=${word}&days=2&aqi=no&alerts=no`);
  let res = await req.json();
  console.log(res)
  console.log(word)
  document.getElementById("data").innerHTML= `<div class="col-lg-4 mt-4 weather-t-card p-0 m-0  ">
            <div class="d-flex justify-content-between p-3 date-t align-items-center ">
              <p class="m-0">Today</p>
              <p class="m-0">12 October</p>
            </div>
            <div class="px-3">
              <p class="m-4 ms-0 fw-semibold fs-5 location">${res.location.name}</p>
              <div class="d-flex justify-content-between align-items-center">
                <p class="temp fw-bold">${res.current.temp_c}<sup>o</sup> C</p>
                <img src="${res.current.condition.icon}" class="w-25" alt="">
              </div>
              <p class="status fw-semibold">${res.current.condition.text}</p>
              <div class="w-75 d-flex justify-content-between align-items-center status">
                <p> <i class="fa-solid fa-droplet"></i> ${res.current.humidity}%</p>
                <p>  <i class="fa-solid fa-wind"></i> ${res.current.wind_kph}km/h</p>
                <p>  <i class="fa-solid fa-compass"></i> ${res.current.wind_dir}</p>
              </div>
          </div>
        </div>
        <div class="col-lg-4 mt-4 p-0 weather-tm-card ">
            <div class="d-flex  justify-content-center p-3 date-tm align-items-center ">
              <p class="m-0">Thursday</p>
            </div>
            <div class="d-flex align-items-center flex-column justify-content-around mt-5">
                <img src="${res.forecast.forecastday[0].day.condition.icon}" alt="">
                <p class="my-3 fs-4 fw-bold">${res.forecast.forecastday[0].day.avgtemp_c}<sup>o</sup> C</p>
                <p class="">${res.forecast.forecastday[0].hour[23].temp_c}<sup>o</sup> C</p>
                <p class="status fw-semibold">${res.forecast.forecastday[0].day.condition.text}</p>
            </div>
          </div>
        <div class="col-lg-4 mt-4 p-0 weather-card ">
            <div class="d-flex  justify-content-center p-3 date align-items-center ">
              <p class="m-0">Thursday</p>
            </div>
            <div class="d-flex align-items-center flex-column justify-content-around mt-5">
                <img src="${res.forecast.forecastday[1].day.condition.icon}" alt="">
                <p class="my-3 fs-4 fw-bold">${res.forecast.forecastday[1].day.avgtemp_c}<sup>o</sup> C</p>
                <p class="">${res.forecast.forecastday[1].hour[23].temp_c}<sup>o</sup> C</p>
                <p class="status fw-semibold">${res.forecast.forecastday[1].day.condition.text}</p>
            </div>
          </div>
        
        </div>`
}
weather()
let logo =   document.querySelector(".navbar-brand img")

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
            }
        }