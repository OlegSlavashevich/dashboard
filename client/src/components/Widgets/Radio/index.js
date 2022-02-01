import React from 'react';
import Widget from '../../UI/Widget';

const Radio = (config) => {
  return (
    <Widget id={config.id}>
      <div className="flex justify-center">
        <div>Jazz Radio</div>
      </div>
      {config.text}
    </Widget>
  );
};

export default Radio;
