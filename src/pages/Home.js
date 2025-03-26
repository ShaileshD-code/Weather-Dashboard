import React, { useState } from "react";
import { fetchWeather, fetchForecast } from "../services/weatherService";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    try {
      const weatherData = await fetchWeather(city);
      const forecastData = await fetchForecast(city);
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">🌦 Weather Dashboard</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button onClick={handleSearch} disabled={loading} className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
      {forecast.length > 0 && <ForecastCard forecast={forecast} />}
    </div>
  );
};

export default Home;
