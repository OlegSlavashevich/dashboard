/* eslint-disable react/prop-types */
import React from 'react';
import Currency from './Currency';
import Weather from './Weather';
import Radio from './Radio';

const widgets = {
  currency: Currency,
  weather: Weather,
  radio: Radio
};

const WidgetControler = (props) => {
  const type = props.type;

  const Component = widgets[type];

  return <Component {...props} />;
};

export default WidgetControler;
