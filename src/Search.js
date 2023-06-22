import "./styles.css";
import axios from "axios";
import React, { useState } from "react";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("Loading...");
  let [submited, setSubmited] = useState(false);

  function handleSearch(event) {
    event.preventDefault();
    let units = "metric";
    let apiKey = "ed55b36e362d8733f7d859247cedeaf2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
    setSubmited(true);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }
  let form = (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (submited) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)} km/h</li>
          <li>
            {" "}
            <img src={weather.icon} alt="Weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div> {form} </div>;
  }
}
