import React from 'react';
import Temperature from '../assets/icons/temperature.png';
import Wind from '../assets/icons/wind.png'; 
import Humidity from '../assets/icons/humidity.png'; 

const WeatherDetails = ({ temp, windSpeed, humidity, condition, icon }) => {
  return (
    <div className="text-center my-4">
      <img src={icon} className="h-24 mx-auto" alt="Condition Icon" />
      <div className="font-medium text-3xl pt-2 text-white flex justify-center items-center">
        {"Temperature: "}{temp}°C
        <img className="h-10 ml-2 invert" alt="Temperature Icon" src={Temperature} />
      </div>
      <div className="font-medium text-3xl pt-2 text-white flex justify-center items-center">
        {"Wind Speed: "}{windSpeed} K/hr
        <img className="h-10 ml-2 invert" alt="Wind Icon" src={Wind} />
      </div>
      <div className="font-medium text-3xl pt-2 text-white flex justify-center items-center">
        {"Humidity: "}{humidity}%
        <img className="h-10 ml-2 invert" alt="Humidity Icon" src={Humidity} />
      </div>
      <h3 className="text-3xl text-white">{condition}</h3>
    </div>
  );
}

export default WeatherDetails;
