import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${API_URL}/weather`, {
      params: { q: city, appid: API_KEY, units: "metric" },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Error fetching data";
  }
};

export const fetchForecast = async (city) => {
  try {
    const response = await axios.get(`${API_URL}/forecast`, {
      params: { q: city, appid: API_KEY, units: "metric" },
    });
    return response.data.list.filter((_, index) => index % 8 === 0);
  } catch (error) {
    throw error.response?.data?.message || "Error fetching forecast";
  }
};
