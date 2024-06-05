import WeatherAPI from './fetchWeather.js';
import waterIcon from './pure-water-icon-isolated-png.png';
import sunIcon from './sun-icon-0.png';
import windIcon from './wind-speed-icon-6.jpg';
import pressureIcon from './pressure-icon-png-13.jpg';
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const weatherForm = document.getElementById('weather-form');
  const cityInput = document.getElementById('city');
  const errorSpan = document.querySelector('.error');

  const temperatureF = document.getElementById('temperature-f');
  const min = document.getElementById('min-temperature');
  const icon = document.getElementById('icon');
  const precipitationLevels = document.getElementById('precipitation-levels');
  const uvIndex = document.getElementById('uv-index');
  const windLevels = document.getElementById('wind-levels');
  const pressureLevels = document.getElementById('pressure-levels');

  // Add event listener to the form
  weatherForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting the default way
    const cityName = cityInput.value.trim();
    if(cityName == null) {
        throw new Error();
    }
    if (cityName.length >= 3 && cityName.length <= 25) {
      try {
        console.log(`Submitting form for city: ${cityName}`);
        // Call the WeatherAPI function and pass the city name
        const weatherData = await WeatherAPI(cityName);

        // Display the weather data
        temperatureF.textContent = `Temperature: ${weatherData.degreeF} °F`;
        
        icon.src = weatherData.icon;
        icon.alt = weatherData.condition;
        precipitationLevels.textContent = `Precipitation: ${weatherData.precipMm} mm`;
        uvIndex.textContent = `UV Index: ${weatherData.uvIndex}`;
        windLevels.textContent = `Wind: ${weatherData.windKph} kph`;
        pressureLevels.textContent = `Pressure: ${weatherData.pressureMb} mb`;
      } catch (err) {
        console.error('Error getting weather data:', err);
        errorSpan.textContent = 'Error fetching weather data.';
      }
    } else {
      errorSpan.textContent = 'Please enter a valid city name (3-25 characters).';
    }
  });
});
