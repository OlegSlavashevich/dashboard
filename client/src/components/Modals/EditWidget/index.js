/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useWidget } from '../../../contexts/WidgetContext';
import Modal from '../../UI/Modal';
import WidgetConfigControler from '../../WidgetConfigView/WidgetConfigController';
import Select from '../../UI/Select';
import { widgetRefetchIntevalAccordance } from '../../widgetConfig';

const EditWidget = (props) => {
  const { widget } = props;
  const { updateWidget } = useWidget();

  const [widgetParams, setWidgetParams] = useState();
  const [refetchInterval, setRefreshInterval] = useState();

  const onSave = () => {
    updateWidget({
      id: widget.id,
      type: widget.type,
      refetchInterval,
      params: widgetParams
    });
    setTimeout(() => {
      props?.onChange();
    });
  };

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  const onChangeInterval = (interval) => {
    setRefreshInterval(widgetRefetchIntevalAccordance[interval]);
  };

  return (
    <Modal {...props} title={'Update Widget'} onSave={onSave}>
      <div className="max-w-xl break-words w-96">
        <div className="mt-0">
          {widget?.type && (
            <WidgetConfigControler
              defaultParams={widget.params}
              type={widget.type}
              setWidgetParams={setWidgetParams}
            />
          )}
        </div>
        <p className="mt-4 mb-2">Choose update time:</p>
        <Select
          options={Object.keys(widgetRefetchIntevalAccordance)}
          selected={
            widget.refetchInterval
              ? getKeyByValue(widgetRefetchIntevalAccordance, widget.refetchInterval)
              : 'none'
          }
          onChange={onChangeInterval}
        />
      </div>
    </Modal>
  );
};

export default EditWidget;
