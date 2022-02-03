import React, { useState, useEffect, useMemo } from 'react';
import Widget from '../../UI/Widget';
import { RadioBrowserApi } from 'radio-browser-api';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './index.css';
import { useWidget } from '../../../contexts/WidgetContext';
import { getStationsApiConfig } from '../../../configs/widgetConfig';

/**
  config: {
    id: number,
    type: 'string (currency | ...)',
    params: {
      genre: string,
      id?: string
      name?: string,
      url?: string,
    }
  }
*/

const Radio = (config) => {
  const { updateWidget, setIsSaveDashboard } = useWidget();

  const [stations, setStations] = useState();
  const [currentStationPosition, setCurrentStationPosition] = useState(-1);

  useEffect(() => {
    setupApi(config?.params?.genre).then((data) => {
      setStations(data);
    });
  }, [config?.params?.genre]);

  useEffect(() => {
    console.log(currentStationPosition);
    if (
      stations &&
      currentStationPosition >= 0 &&
      stations[currentStationPosition]?.changeId !== config?.params?.id
    ) {
      updateWidget({
        id: config?.id,
        type: 'radio',
        params: {
          genre: config?.params?.genre,
          id: stations[currentStationPosition]?.changeId,
          name: stations[currentStationPosition].name,
          url: stations[currentStationPosition].url
        }
      });
      setIsSaveDashboard(true);
    }
  }, [currentStationPosition, stations]);

  const setupApi = async (genre) => {
    const api = new RadioBrowserApi(fetch.bind(window), 'My Radio App');

    const stationsFromApi = await api.searchStations(getStationsApiConfig(genre)).then((data) => {
      return data;
    });

    setCurrentStationPosition(getCurrentStationPosition(stationsFromApi));

    return stationsFromApi;
  };

  const getCurrentStationPosition = (stations) => {
    if (stations) {
      if (!config?.params?.id) return 0;
      const stationIndex = stations.findIndex((station) => station?.changeId === config.params?.id);
      return stationIndex > -1 ? stationIndex : 0;
    }
  };

  const changeCurrentStationPosition = (action) => {
    console.log(action);
    if (action === 'inc') {
      setCurrentStationPosition((position) => position + 1);
    } else {
      setCurrentStationPosition((position) => position - 1);
    }
  };

  const radioName = useMemo(
    () =>
      (config?.params?.name?.length > 15
        ? config?.params?.name.slice(0, 15) + '...'
        : config?.params?.name) || 'Radio',
    [config?.params?.name]
  );

  return (
    <Widget config={config}>
      <div className="flex justify-center mb-2">
        <div className="mr-2">{config.params.genre}</div>
        <div>{radioName}</div>
      </div>
      {stations ? (
        <div className="flex h-16 justify-center items-center">
          {currentStationPosition !== 0 ? (
            <button className="mr-4" onClick={() => changeCurrentStationPosition('dec')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          ) : (
            <div className="mr-4 h-8 w-8" />
          )}
          <AudioPlayer
            src={config?.params?.url}
            showJumpControls={false}
            layout="stacked"
            customProgressBarSection={[]}
            customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
            autoPlayAfterSrcChange={false}
          />
          {currentStationPosition !== stations.length - 1 ? (
            <button className="ml-4" onClick={() => changeCurrentStationPosition('inc')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          ) : (
            <div className="ml-4 h-8 w-8" />
          )}
        </div>
      ) : (
        <div className="flex h-16 justify-center items-center">Loading...</div>
      )}
    </Widget>
  );
};

export default Radio;
