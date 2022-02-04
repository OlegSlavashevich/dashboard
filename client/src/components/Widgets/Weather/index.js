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
      city: 'minsk'
    }
  }
*/

const fetchWeather = (city) => () => {
  return fetch(`${process.env.REACT_APP_BACKEND}/api/weather?city=${city}`)
    .then((res) => res.json())
    .then((data) => data.temp);
};

const Weather = (config) => {
  const { update } = useWidget();

  const { isFetching, data, refetch } = useQuery(config.id, fetchWeather(config.params.city), {
    refetchOnWindowFocus: false,
    refetchInterval: config?.refetchInterval || 0
  });

  useEffect(() => {
    refetch();
  }, [update]);

  return (
    <Widget refetch={refetch} config={config}>
      <div className="flex justify-center mt-4">
        <div>{config.params.city}</div>
      </div>
      <div className="flex h-16 justify-center items-center">
        <div>{isFetching ? 'Loading...' : <>{data} °C</>}</div>
      </div>
    </Widget>
  );
};

export default Weather;
