import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold">{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <p>🌡 Temperature: {weather.main.temp}°C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
