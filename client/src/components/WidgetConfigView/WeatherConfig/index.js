/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Select from '../../UI/Select';

const WeatherConfig = ({ defaultParams, setWidgetParams }) => {
  const [city, setCity] = useState(defaultParams?.city || 'Minsk');

  useEffect(() => {
    setWidgetParams({
      city
    });
  }, [city]);

  return (
    <div>
      <div>
        <div className="mb-2">City:</div>
        <Select
          options={['Minsk', 'Brest', 'Grodno', 'Vitebsk']}
          selected={defaultParams?.city || 'Minsk'}
          onChange={setCity}
        />
      </div>
    </div>
  );
};

export default WeatherConfig;