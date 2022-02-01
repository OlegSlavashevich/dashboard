/* eslint-disable react/prop-types */
import React from 'react';

const AddWidgetButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="mr-8 bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
    Add Widget
  </button>
);

export default AddWidgetButton;
