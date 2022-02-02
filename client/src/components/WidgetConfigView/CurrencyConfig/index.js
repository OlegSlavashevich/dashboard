/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Select from '../../UI/Select';

const CurrencyConfig = ({ defaultParams, setWidgetParams }) => {
  const [base, setBase] = useState(defaultParams?.base || 'EUR');
  const [target, setTarget] = useState(defaultParams?.target || 'USD');

  useEffect(() => {
    setWidgetParams({
      base,
      target
    });
  }, [base, target]);

  return (
    <div>
      <div className="">
        <div className="mb-2">From:</div>
        <Select
          options={['EUR', 'USD', 'CAD', 'JPY']}
          selected={defaultParams?.base || 'EUR'}
          onChange={setBase}
        />
      </div>
      <div className="mt-2">
        <div className="mb-2">To:</div>
        <Select
          options={['USD', 'EUR', 'CAD', 'JPY']}
          selected={defaultParams?.target || 'USD'}
          onChange={setTarget}
        />
      </div>
    </div>
  );
};

export default CurrencyConfig;
