/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Select from '../../UI/Select';
import { genres } from '../../../configs/widgetConfig';

const RadioConfigForm = ({ defaultParams, setWidgetParams }) => {
  const [genre, setGenre] = useState(defaultParams?.genre || 'pop');

  useEffect(() => {
    setWidgetParams({
      genre
    });
  }, [genre]);

  return (
    <div>
      <div>
        <div className="mb-2">Genre:</div>
        <Select options={genres} selected={defaultParams?.genre || genres[0]} onChange={setGenre} />
      </div>
    </div>
  );
};

export default RadioConfigForm;
