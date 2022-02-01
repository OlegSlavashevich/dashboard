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
