const API_kEY = '3974ce28a4516253cffc392fb2e8ff16';
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async(city) => {
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_kEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    if(data.cod == "404"){
        weather.innerHTML = `<h2><i><u>City Not Found</u></i></h2>`;
        return;
    }
    console.log(data);
    weather.innerHTML = `
    <div>
    <h2>${data.main.temp} °C</h2>
    <h4>${data.weather[0].main} Clear </h4>
    </div>`
};
form.addEventListener(
"submit",
function(event) {
    getWeather(search.value)
    event.preventDefault();
}   
  
)
