import React from 'react';
import WidgetControler from './WidgetControler';

const widgetsConfig = [
  {
    id: 1,
    type: 'currency',
    text: 'Currency'
  },
  {
    id: 2,
    type: 'weather',
    text: 'Weather'
  },
  {
    id: 3,
    type: 'radio',
    text: 'Radio'
  },
  {
    id: 4,
    type: 'radio',
    text: 'Radio'
  }
];

const WidgetList = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8  lg:grid-cols-3 lg:gap-12 xl:grid-cols-4">
      {widgetsConfig.map((widgetConfig) => (
        <div key={widgetConfig.id} className="m-auto">
          <WidgetControler {...widgetConfig} />
        </div>
      ))}
    </div>
  );
};

export default WidgetList;
