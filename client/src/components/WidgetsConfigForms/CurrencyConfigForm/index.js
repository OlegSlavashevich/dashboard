/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { currencys } from '../../../configs/widgetConfig';
import Select from '../../UI/Select';

const CurrencyConfigForm = ({ defaultParams, setWidgetParams }) => {
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
          options={currencys}
          selected={defaultParams?.base || currencys[0]}
          onChange={setBase}
        />
      </div>
      <div className="mt-2">
        <div className="mb-2">To:</div>
        <Select
          options={currencys}
          selected={defaultParams?.target || currencys[1]}
          onChange={setTarget}
        />
      </div>
    </div>
  );
};

export default CurrencyConfigForm;
