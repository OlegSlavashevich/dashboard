/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { widgetsWithoutUpdate } from '../../../configs/widgetConfig';
import { useWidget } from '../../../contexts/WidgetContext';
import EditWidget from '../../Modals/EditWidget';

const Widget = ({ children, refetch, config }) => {
  const { deleteWidget, setIsSaveDashboard } = useWidget();

  const onDeleteWidget = () => {
    deleteWidget(config.id);
    setIsSaveDashboard(true);
  };

  return (
    <div className="shadow-lg px-4 py-1 bg-white w-72 h-[12rem] rounded-lg border border-inherit border-slate-100">
      <WidgetHeader
        config={config}
        refetch={refetch}
        deleteWidget={onDeleteWidget}
        setIsSaveDashboard={setIsSaveDashboard}
      />
      {children}
    </div>
  );
};

const WidgetHeader = ({ refetch = () => {}, deleteWidget, config, setIsSaveDashboard }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex h-[2.7rem]">
      <EditWidget
        widget={config}
        showModal={showModal}
        setShowModal={setShowModal}
        onChange={() => {
          console.log('change');
          refetch();
          setIsSaveDashboard(true);
        }}
      />
      <button onClick={() => setShowModal(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
        </svg>
      </button>
      <div className="mt-3 ml-auto">
        {!widgetsWithoutUpdate.includes(config.type) && (
          <button className="" onClick={refetch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        )}
        <button className="ml-4" onClick={deleteWidget}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Widget;
