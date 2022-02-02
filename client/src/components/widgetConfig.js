import Currency from './Widgets/Currency';
import Weather from './Widgets/Weather';
import Radio from './Widgets/Radio';
import CurrencyConfig from './WidgetConfigView/CurrencyConfig';
import WeatherConfig from './WidgetConfigView/WeatherConfig';

export const widgets = {
  currency: Currency,
  weather: Weather,
  radio: Radio
};

export const widgetsConfigView = {
  currency: CurrencyConfig,
  weather: WeatherConfig
};

export const widgetRefetchIntevalAccordance = {
  none: 0,
  '5 sec': 5000,
  '30 sec': 30 * 1000,
  '1 min': 60 * 1000,
  '10 min': 10 * 60 * 1000
};
