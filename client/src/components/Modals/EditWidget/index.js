/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useWidget } from '../../../contexts/WidgetContext';
import Modal from '../../UI/Modal';
import WidgetConfigControler from '../../WidgetConfigView/WidgetConfigController';

const EditWidget = (props) => {
  const { widget } = props;
  const { updateWidget } = useWidget();

  const [widgetParams, setWidgetParams] = useState();

  const onSave = () => {
    updateWidget({
      id: widget.id,
      type: widget.type,
      params: widgetParams
    });
    setTimeout(() => {
      props?.onChange();
    });
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
      </div>
    </Modal>
  );
};

export default EditWidget;
