import axios from "axios";
import { useEffect, useState } from "react";

function WeatherPanel({ city, countryCode }) {
  const [cityWeather, setCityWeather] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/weather?city=${city}&country=${countryCode}`)
      .then((response) => {
        setCityWeather(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [city, countryCode]);

  if (cityWeather === null) {
    return null;
  }

  const {
    main: { temp },
    wind,
    weather: [weatherObject],
  } = cityWeather;
  return (
    <div>
      <h2>Weather in {city}</h2>
      <div>Temperature: {temp} Celcius</div>
      <div>
        <div>Weather condition: {weatherObject.description}</div>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weatherObject.icon}@2x.png`}
            alt="weather icon"
          />
        </div>
      </div>
      <div>Wind: {wind.speed} m/s</div>
    </div>
  );
}

export default WeatherPanel;
