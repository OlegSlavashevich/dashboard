import React from 'react';
import { useWidget } from '../../contexts/WidgetContext';
import WidgetControler from './WidgetControler';

const WidgetList = () => {
  const { widgetsConfig } = useWidget();

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8  lg:grid-cols-3 lg:gap-12 xl:grid-cols-4">
      {widgetsConfig
        ? widgetsConfig.map((widgetConfig) => (
            <div key={widgetConfig.id} className="m-auto">
              <WidgetControler {...widgetConfig} />
            </div>
          ))
        : null}
    </div>
  );
};

export default WidgetList;
