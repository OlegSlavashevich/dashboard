/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';

const WidgetContext = React.createContext();

export const useWidget = () => {
  return useContext(WidgetContext);
};

export const WidgetProvider = ({ children }) => {
  const [update, setUpdate] = useState(false);

  return (
    <WidgetContext.Provider
      value={{
        update,
        setUpdate
      }}>
      {children}
    </WidgetContext.Provider>
  );
};
