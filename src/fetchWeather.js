async function WeatherAPI(cityName) {
    try {
      console.log(`Fetching weather data for ${cityName}`);
      const response = await fetch('https://api.weatherapi.com/v1/current.json?key=df4e240b341549d9a86193717240406&q=' + cityName, { mode: 'cors' });
      if (!response.ok) {
        throw new Error("HTTP Error");
      }
      const retrieval = await response.json();
      console.log('Weather data retrieved:', retrieval);
  
      return {
        degreeC: retrieval.current.temp_c,
        degreeF: retrieval.current.temp_f,
        humidity: retrieval.current.humidity,
        pressureMb: retrieval.current.pressure_mb,
        lastUpdate: retrieval.current.last_updated,
        condition: retrieval.current.condition.text,
        icon: retrieval.current.condition.icon,
        feelsLikeC: retrieval.current.feelslike_c,
        feelsLikeF: retrieval.current.feelslike_f,
        windKph: retrieval.current.wind_kph,
        precipMm: retrieval.current.precip_mm,
        uvIndex: retrieval.current.uv
      };
    } catch (err) {
      console.error('Error fetching weather data:', err);
      throw err;
    }
  }
  
  export default WeatherAPI;
  