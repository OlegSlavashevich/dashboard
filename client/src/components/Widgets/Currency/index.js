/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import Widget from '../../UI/Widget';
import { useQuery } from 'react-query';
import { useWidget } from '../../../contexts/WidgetContext';
import { WidgetService } from '../../../services/WidgetService';

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
  return WidgetService.getCurrency(base, target);
};

const Currency = (config) => {
  const { update } = useWidget();

  const { isFetching, data, refetch } = useQuery(
    config.id,
    fetchCurrency(config.params.base, config.params.target),
    {
      refetchOnWindowFocus: false,
      refetchInterval: config?.refetchInterval || 0
    }
  );

  useEffect(() => {
    refetch();
  }, [update]);

  return (
    <Widget refetch={refetch} config={config}>
      <div className="flex justify-center mt-4">
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
