/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { cities } from '../../../configs/widgetConfig';
import Select from '../../UI/Select';

const WeatherConfigForm = ({ defaultParams, setWidgetParams }) => {
  const [city, setCity] = useState(defaultParams?.city || cities[0]);

  useEffect(() => {
    setWidgetParams({
      city
    });
  }, [city]);

  return (
    <div>
      <div>
        <div className="mb-2">City:</div>
        <Select options={cities} selected={defaultParams?.city || cities[0]} onChange={setCity} />
      </div>
    </div>
  );
};

export default WeatherConfigForm;
