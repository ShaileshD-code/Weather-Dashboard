import React from "react";

const ForecastCard = ({ forecast }) => {
  return (
    <div className="flex gap-2 overflow-x-auto py-2">
      {forecast.map((day, idx) => (
        <div key={idx} className="border p-3 rounded min-w-[100px] text-center">
          <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
          <p>{day.weather[0].description}</p>
          <p>🌡 {day.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;
