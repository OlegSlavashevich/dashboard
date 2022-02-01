/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useContext, useEffect, useState } from 'react';

const WidgetContext = React.createContext();

export const useWidget = () => {
  return useContext(WidgetContext);
};

export const WidgetProvider = ({ children }) => {
  const [widgetsConfig, setWidgetsConfig] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaveDashboard, setIsSaveDashboard] = useState(false);
  const [update, setUpdate] = useState(false);

  const getWidgetsConfigFromApi = async () => {
    setIsLoading(true);
    const widgets = await fetch(`${process.env.REACT_APP_BACKEND}/api/widgets`).then((res) =>
      res.json()
    );
    setWidgetsConfig(widgets);
    setIsLoading(false);
  };

  const setWidgetsConfigToApi = async () => {
    await fetch(`${process.env.REACT_APP_BACKEND}/api/widgets`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ widgets: widgetsConfig })
    });
  };

  const addWidgetConfig = (widgetConfig) => {
    setWidgetsConfig((widgetConfigList) => [...widgetConfigList, widgetConfig]);
    setIsSaveDashboard(true);
  };

  const deleteWidget = (id) => {
    setWidgetsConfig((widgetsConfig) => [...widgetsConfig].filter((widget) => widget.id !== id));
  };

  useEffect(getWidgetsConfigFromApi, []);

  return (
    <WidgetContext.Provider
      value={{
        widgetsConfig,
        addWidgetConfig,
        deleteWidget,
        isLoading,
        isSaveDashboard,
        setIsSaveDashboard,
        update,
        setUpdate,
        setWidgetsConfigToApi
      }}>
      {children}
    </WidgetContext.Provider>
  );
};
