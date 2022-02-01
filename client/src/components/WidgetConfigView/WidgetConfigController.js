/* eslint-disable react/prop-types */
import React from 'react';
import { widgetsConfigView } from '../widgetConfig';

const WidgetConfigControler = (props) => {
  const type = props.type;

  const Component = widgetsConfigView[type];

  return <Component {...props} />;
};

export default WidgetConfigControler;
