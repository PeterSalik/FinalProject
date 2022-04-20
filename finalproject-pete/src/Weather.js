// import React from "react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [isWLoading, setWLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=45.532900&lon=-73.670600&appid=81ec57cb43610763418f868620de5190&units=metric"
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      })
      .then(() => {
        setWLoading(false);
      });
  }, []);

  if (isWLoading) return "Loading weather data please wait...";

  //console.log("Weather Object: ", weather);
  const weatherIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  //console.log("Weather Icon Image Location: ", weatherIcon);

  return (
    <WeatherWidget>
      <div>Weather: {weather.name}</div>
      <div>
        Temp: {weather.main.temp}°C, Feels Like: {weather.main.feels_like}°C
      </div>
      <div>
        Clouds: {weather.weather[0].description}, {weather.clouds.all}%
        coverage.
      </div>
      <div>
        Wind: {weather.wind.speed}m/sec, {weather.wind.deg}deg, (RH):{" "}
        {weather.main.humidity}%
      </div>
      <img width="80" src={weatherIcon} alt="Weather Icon" />
    </WeatherWidget>
  );
}

export default Weather;

const WeatherWidget = styled.div`
  border: 1px solid black;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
  align-content: space-evenly;
  color: blue;

  background-color: transparent;
  width: 300px;
  height: 150px;
  block-size: fit-content;
  border-radius: 20px;
  padding: 10px;
  text-align: left;

  -webkit-box-shadow: 5px 5px 15px 0px #000000;
  box-shadow: 5px 5px 15px 0px #000000;

  img {
    align-self: center;
  }
`;
