import React from 'react';

const SaveButton = () => (
  <button
    onClick={() => alert('save all')}
    className="mr-8 bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
    Save Dashboard
  </button>
);

export default SaveButton;
