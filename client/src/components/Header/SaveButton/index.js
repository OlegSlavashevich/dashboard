import React from 'react';
import { useWidget } from '../../../contexts/WidgetContext';

const SaveButton = () => {
  const { isSaveDashboard, setIsSaveDashboard, setWidgetsConfigToApi } = useWidget();

  const saveDashboard = async () => {
    await setWidgetsConfigToApi();
    setIsSaveDashboard(false);
  };

  return (
    <button
      onClick={isSaveDashboard ? saveDashboard : () => {}}
      className={`mr-8 bg-blue-500 text-white font-bold py-2 px-4 rounded ${
        !isSaveDashboard && 'opacity-50 cursor-not-allowed'
      }`}>
      Save Dashboard
    </button>
  );
};

export default SaveButton;
