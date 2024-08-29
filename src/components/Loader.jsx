import React from 'react';
import loaderGif from '../assets/weatherLoader.gif';

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={loaderGif} alt="Loading..." className="w-20 h-20" />
    </div>
  );
};

export default Loader;
