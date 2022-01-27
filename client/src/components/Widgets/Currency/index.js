import React from 'react';
import Widget from '../../UI/Widget';
// import { useQuery } from 'react-query';

/**
  config: {
    id: number,
    type: 'string (currency | ...)',
    data: {
      ....
    }
  }
 */

const Currency = (config) => {
  // const { data } = useQuery('currency', () =>
  //   fetch('https://www.nbrb.by/api/exrates/currencies').then((res) => res.json())
  // );
  return (
    <Widget>
      <div className="flex justify-center">
        <div>EUR / USD</div>
      </div>
      {config.text}
    </Widget>
  );
};

export default Currency;
