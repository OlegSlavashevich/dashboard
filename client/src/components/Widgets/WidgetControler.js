/* eslint-disable react/prop-types */
import React from 'react';
import { widgets } from '../widgetConfig';

const WidgetControler = (props) => {
  const type = props.type;

  const Component = widgets[type];

  return <Component {...props} />;
};

export default WidgetControler;
