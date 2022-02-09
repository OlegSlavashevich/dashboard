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
      city: 'minsk'
    }
  }
*/

const fetchWeather = (city) => () => {
  return WidgetService.getWeather(city);
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
      <div className="flex justify-center">
        <div>{config.params.city}</div>
      </div>
      <div className="flex h-16 justify-center items-center">
        <div>
          {isFetching ? (
            'Loading...'
          ) : (
            <>
              <img src={`http://openweathermap.org/img/w/${data.icon}.png`} className="h-16 mt-4" />
              <div>{data.temp} °C</div>
            </>
          )}
        </div>
      </div>
    </Widget>
  );
};

export default Weather;
