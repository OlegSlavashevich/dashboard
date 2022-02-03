/* eslint-disable react/prop-types */
import React from 'react';
import { widgetsConfigView } from '../../configs/widgetConfig';

const WidgetConfigFormControler = (props) => {
  const type = props.type;

  const Component = widgetsConfigView[type];

  return <Component {...props} />;
};

export default WidgetConfigFormControler;
