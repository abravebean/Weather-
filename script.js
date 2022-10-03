const inputBox = document.querySelector("input");
const info = document.querySelector("button");

const feels_like = document.getElementById("feels_like")
const tempt = document.getElementById("tempt")
const city_name= document.getElementById("city_name")
const descriptions = document.getElementById('descriptions')


info.addEventListener("click", (e) => {
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&units=imperial&appid=38975fef6c8a82d9bd8070644c596d92`)
    .then((res) => res.json())
    .then((data) => {
        feels_like.innerText = "Feels like: " + data.main.feels_like + "F"
        tempt.innerText = "Temperature outside: " + data.main.temp + "F"  
        city_name.innerText = "Current City: " + data.name
        descriptions.innerText = "Weather:" + data.weather[0].description 
    })
    .catch((err) => console.log(err));
})


