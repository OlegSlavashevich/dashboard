/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { pizzas } from '../../../configs/widgetConfig';
import Select from '../../UI/Select';

const PizzaConfigForm = ({ defaultParams, setWidgetParams }) => {
  const [name, setName] = useState(defaultParams?.name || pizzas[0]);
  useEffect(() => {
    setWidgetParams({
      name
    });
  }, [name]);

  return (
    <div>
      <div>
        <div className="mb-2">Pizza:</div>
        <Select options={pizzas} selected={defaultParams?.name || pizzas[0]} onChange={setName} />
      </div>
    </div>
  );
};

export default PizzaConfigForm;
