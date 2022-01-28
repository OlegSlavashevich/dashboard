import React from 'react';
import WidgetControler from './WidgetControler';

const widgetsConfig = [
  {
    id: 'currency_1',
    type: 'currency',
    params: {
      base: 'EUR',
      target: 'USD'
    }
  },
  {
    id: 'weather_1',
    type: 'weather',
    params: {
      city: 'Minsk'
    }
  },
  {
    id: 'currency_2',
    type: 'currency',
    params: {
      base: 'USD',
      target: 'EUR'
    }
  },
  {
    id: 'weather_2',
    type: 'weather',
    params: {
      city: 'London'
    }
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
