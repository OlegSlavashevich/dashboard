/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from 'react';

const WidgetContext = React.createContext();

export const useWidget = () => {
  return useContext(WidgetContext);
};

export const WidgetProvider = ({ children }) => {
  const [widgets, setWidgets] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaveDashboard, setIsSaveDashboard] = useState(false);
  const [update, setUpdate] = useState(false);

  const getWidgetsFromApi = async () => {
    setIsLoading(true);
    const widgetsFromApi = await fetch(`${process.env.REACT_APP_BACKEND}/api/widgets`).then((res) =>
      res.json()
    );
    setWidgets(widgetsFromApi);
    setIsLoading(false);
  };

  const setWidgetsToApi = async () => {
    await fetch(`${process.env.REACT_APP_BACKEND}/api/widgets`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ widgets })
    });
  };

  const addWidget = (widget) => {
    setWidgets((widgets) => [...widgets, widget]);
    setIsSaveDashboard(true);
  };

  const deleteWidget = (id) => {
    setWidgets((widgets) => [...widgets].filter((widget) => widget.id !== id));
  };

  const updateWidget = (newWidget) => {
    setWidgets((widgets) =>
      [...widgets].map((widget) => (widget.id !== newWidget.id ? widget : newWidget))
    );
  };

  useEffect(getWidgetsFromApi, []);

  return (
    <WidgetContext.Provider
      value={{
        widgets,
        addWidget,
        deleteWidget,
        updateWidget,
        isLoading,
        isSaveDashboard,
        setIsSaveDashboard,
        update,
        setUpdate,
        setWidgetsToApi
      }}>
      {children}
    </WidgetContext.Provider>
  );
};
