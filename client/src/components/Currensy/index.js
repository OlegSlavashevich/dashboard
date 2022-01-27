import React from 'react';
import { useQuery } from 'react-query';

const Currency = () => {
  const { data } = useQuery('currency', () =>
    fetch('https://www.nbrb.by/api/exrates/currencies').then((res) => res.json())
  );
  return (
    <div className="flex justify-center items-center h-[100vh]">
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export default Currency;
