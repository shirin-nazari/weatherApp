const apiKey = '3ab7fc4e0a75af6ad04428707ebec076';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const cityName = document.querySelector('.city');
const weatherIcon = document.querySelector('.weather-icon')
const error = document.querySelector('.error');
const weather = document.querySelector('.weather')
async function checkWeather(city) {
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (res.status === 404) {
        error.style.display = 'block'
        weather.style.display = 'none'
    } else {
        let data = await res.json()
        // console.log(data)
        cityName.innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

        if (data.weather[0].main === 'Clouds') {
            weatherIcon.src = 'images/clouds.png'
        } else if (data.weather[0].main === 'Clear') {
            weatherIcon.src = 'images/clear.png'
        } else if (data.weather[0].main === 'Rain') {
            weatherIcon.src = 'images/rain.png'
        }
        else if (data.weather[0].main === 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png'
        }
        else if (data.weather[0].main === 'Mist') {
            weatherIcon.src = 'images/mist.png'
        }
        else if (data.weather[0].main === 'Snow') {
            weatherIcon.src = 'images/snow.png'
        }
        weather.style.display = 'block';
        error.style.display = 'none'
    }

}
searchBtn.addEventListener('click', () => {

    checkWeather(searchBox.value)
})