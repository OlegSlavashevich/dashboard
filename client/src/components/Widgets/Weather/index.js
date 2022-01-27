import React from 'react';
import Widget from '../../UI/Widget';

const Weather = (config) => {
  return (
    <Widget>
      <div className="flex justify-center">
        <div>Minsk</div>
      </div>
      {config.text}
    </Widget>
  );
};

export default Weather;
