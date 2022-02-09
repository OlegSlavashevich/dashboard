/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import Widget from '../../UI/Widget';
import { useQuery } from 'react-query';
import { pizzasImages } from '../../../configs/widgetConfig';

/**
  config: {
    id: number,
    type: 'string (currency | ...)',
    params: {
      name: string,
      city: string,
      street: string,
      house: string,
      apartment: string,
      phone: string,
      email: string
    }
  }
*/

const fetchPizza = (params) => () => {
  return fetch(`${process.env.REACT_APP_BACKEND}/api/pizza?name=${params.name}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
    .then((res) => {
      if (res.ok) {
        return res.blob();
      }
      throw new Error('Failed file generation');
    })
    .then((blob) => {
      console.log(blob);
      const fileBlob = new Blob([blob], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      });
      // saveAs(fileBlob, 'result.docx');
      const url = window.URL || window.webkitURL;
      const downloadUrl = url.createObjectURL(fileBlob);

      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = downloadUrl;

      a.download = `pizza.jpeg`;
      document.body.appendChild(a);
      a.click();
    });
};

const Pizza = (config) => {
  const { isFetching, refetch } = useQuery(config.id, fetchPizza(config.params), {
    refetchOnWindowFocus: false,
    enabled: false
  });

  useEffect(() => {});

  return (
    <Widget config={config}>
      <div className="flex justify-center">
        <div>{config.params.name}</div>
      </div>
      <div className="flex h-16 justify-center items-center">
        <div className="flex justify-center items-center mt-12">
          <img src={pizzasImages[config.params.name]} className="h-[6rem] mr-8" />
          {isFetching ? (
            'Loading...'
          ) : (
            <>
              <button
                onClick={refetch}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Order
              </button>
            </>
          )}
        </div>
      </div>
    </Widget>
  );
};

export default Pizza;
