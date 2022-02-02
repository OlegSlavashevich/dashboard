/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Select = ({ options, onChange, selected }) => {
  const [selectedState, setSelectedState] = useState(selected || options[0]);

  const handleChange = (e) => {
    onChange(e.target.value);
    setSelectedState(e.target.value);
  };

  return (
    <div className="relative inline-block text-gray-700 w-full">
      <select
        value={selectedState}
        onChange={handleChange}
        className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        placeholder="Regular input">
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
            fillRule="evenodd"></path>
        </svg>
      </div>
    </div>
  );
};

export default Select;
