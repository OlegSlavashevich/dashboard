import React, { useState } from 'react';
import { useWidget } from '../../contexts/WidgetContext';
import WidgetControler from './WidgetControler';

const WidgetList = () => {
  const { widgets, setWidgets, setIsSaveDashboard } = useWidget();
  const [dragWidget, setDragWidget] = useState();

  const dragStartHandler = (e, widget) => {
    setDragWidget(widget);
  };

  const dragEndHandler = () => {};

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dragLeaveHandler = () => {};

  const dropHandler = (e, dropWidget) => {
    e.preventDefault();
    if (dropWidget.id === dragWidget.id) return;
    const tmpWidgets = [...widgets];
    const dragWidgetPosition = tmpWidgets.findIndex((widget) => widget.id === dragWidget.id);
    const dropWidgetPosition = tmpWidgets.findIndex((widget) => widget.id === dropWidget.id);
    [tmpWidgets[dragWidgetPosition], tmpWidgets[dropWidgetPosition]] = [
      tmpWidgets[dropWidgetPosition],
      tmpWidgets[dragWidgetPosition]
    ];
    setWidgets(tmpWidgets);
    setIsSaveDashboard(true);
  };

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8  lg:grid-cols-3 lg:gap-12 xl:grid-cols-4">
      {widgets
        ? widgets.map((widget) => (
            <div
              key={widget.id}
              draggable="true"
              className="m-auto"
              onDragStart={(e) => dragStartHandler(e, widget)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDrop={(e) => dropHandler(e, widget)}>
              <WidgetControler {...widget} />
            </div>
          ))
        : null}
    </div>
  );
};

export default WidgetList;
