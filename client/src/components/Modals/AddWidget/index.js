import React, { useState, useEffect } from 'react';
import { useWidget } from '../../../contexts/WidgetContext';
import Modal from '../../UI/Modal';
import Select from '../../UI/Select';
import WidgetConfigControler from '../../WidgetConfigView/WidgetConfigController';

function AddWidget(props) {
  const { addWidgetConfig } = useWidget();

  const [widgetType, setWidgetType] = useState('currency');
  const [widgetParams, setWidgetParams] = useState();

  const onSave = () => {
    addWidgetConfig({
      id: `${widgetType}_${new Date().getTime()}`,
      type: widgetType,
      params: widgetParams
    });
  };

  useEffect(() => {
    setWidgetParams(undefined);
  }, [widgetType]);

  return (
    <Modal {...props} title={'Add Widget'} onSave={onSave}>
      <div className="max-w-xl break-words w-96">
        <p className="mb-2">Choose type of widget:</p>
        <Select options={['currency', 'weather']} onChange={setWidgetType} />
        <div className="mt-8">
          {widgetType && (
            <WidgetConfigControler type={widgetType} setWidgetParams={setWidgetParams} />
          )}
        </div>
      </div>
    </Modal>
  );
}

export default AddWidget;
