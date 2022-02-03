import Currency from '../components/Widgets/Currency';
import Weather from '../components/Widgets/Weather';
import Radio from '../components/Widgets/Radio';
import CurrencyConfig from '../components/WidgetsConfigForms/CurrencyConfigForm';
import WeatherConfig from '../components/WidgetsConfigForms/WeatherConfigForm';

export const widgets = {
  currency: Currency,
  weather: Weather,
  radio: Radio
};

export const widgetsConfigView = {
  currency: CurrencyConfig,
  weather: WeatherConfig
};

export const cities = ['Minsk', 'Brest', 'Grodno', 'Vitebsk'];

export const currencys = ['EUR', 'USD', 'CAD', 'JPY'];

export const widgetRefetchIntevalAccordance = {
  none: 0,
  '5 sec': 5000,
  '30 sec': 30 * 1000,
  '1 min': 60 * 1000,
  '10 min': 10 * 60 * 1000
};
