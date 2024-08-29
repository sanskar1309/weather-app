import React from 'react';

const CityInput = ({ onCitySearchChange, onSearch, onSearchButton }) => {
  return (
    <div className="text-center w-full">
      <h1 className="text-4xl sm:text-6xl lg:text-8xl mt-2 mb-20 font-Courier text-white">
        CITY WEATHER FORECAST
      </h1>

      <div className="flex justify-center mt-4 mx-2">
        <input
          type="text"
          placeholder="City Name"
          name="CityName"
          onChange={onCitySearchChange}
          onKeyPress={onSearchButton}
          className="rounded-md h-11 w-full sm:w-1/2 lg:w-1/3 bg-indigo-300 text-black border-none text-center focus:bg-black focus:text-white"
        />
        <button
          onClick={onSearch}
          className="ml-2 h-11 w-1/4 sm:w-1/6 lg:w-1/12 rounded-md bg-blue-600 text-white border-none"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default CityInput;
