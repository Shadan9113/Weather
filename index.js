const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn'); //
const resultContainer = document.getElementById('resultContainer');

const apiKey = "5778a827e91fbc433ede1b1c5c118cae";

const getWeather = () => {
    const cityName = cityInput.value;
    if (!cityName) {
        resultContainer.textContent = "Please enter a city name.";
        return;
    }


    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp; 
            const weatherDescription = data.weather[0].description;
            resultContainer.textContent = `Temperature in ${cityName}: ${temperature}°C, Weather: ${weatherDescription}`;
        })
        .catch(err => {
            resultContainer.textContent = err.message;
        });
}

searchBtn.addEventListener('click', getWeather);
