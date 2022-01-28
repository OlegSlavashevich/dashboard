/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import Widget from '../../UI/Widget';
import { useQuery } from 'react-query';
import { useWidget } from '../../../contexts/WidgetContext';

/**
  config: {
    id: number,
    type: 'string (currency | ...)',
    params: {
      base: 'USD',
      target: 'EUR',
    }
  }
*/

const fetchCurrency = (base, target) => () => {
  return fetch(`${process.env.REACT_APP_BACKEND}/api/currency?base=${base}&target=${target}`)
    .then((res) => res.json())
    .then((data) => data.ratio);
};

const Currency = (config) => {
  const { update } = useWidget();

  const { isFetching, data, refetch } = useQuery(
    config.id,
    fetchCurrency(config.params.base, config.params.target),
    {
      refetchOnWindowFocus: false,
      enabled: false
    }
  );

  useEffect(() => {
    refetch();
  }, [update]);

  return (
    <Widget refetch={refetch}>
      <div className="flex justify-center mt-2">
        <div>
          {config.params.base} / {config.params.target}
        </div>
      </div>
      <div className="flex h-16 justify-center items-center">
        <div>{isFetching ? 'Loading...' : data}</div>
      </div>
    </Widget>
  );
};

export default Currency;
