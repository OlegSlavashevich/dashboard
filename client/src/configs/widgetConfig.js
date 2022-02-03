import Currency from '../components/Widgets/Currency';
import Weather from '../components/Widgets/Weather';
import Radio from '../components/Widgets/Radio';
import CurrencyConfigForm from '../components/WidgetsConfigForms/CurrencyConfigForm';
import WeatherConfigForm from '../components/WidgetsConfigForms/WeatherConfigForm';
import RadioConfigForm from '../components/WidgetsConfigForms/RadioConfigForm';

export const widgets = {
  currency: Currency,
  weather: Weather,
  radio: Radio
};

export const widgetsConfigView = {
  currency: CurrencyConfigForm,
  weather: WeatherConfigForm,
  radio: RadioConfigForm
};

export const cities = ['Minsk', 'Brest', 'Grodno', 'Vitebsk'];

export const currencys = ['EUR', 'USD', 'CAD', 'JPY'];

export const genres = [
  'all',
  'classical',
  'country',
  'dance',
  'disco',
  'house',
  'jazz',
  'pop',
  'rap',
  'retro',
  'rock'
];

export const getStationsApiConfig = (genre) => ({
  language: 'russian',
  tag: genre || 'all',
  limit: 30
});

export const widgetRefetchIntevalAccordance = {
  none: 0,
  '5 sec': 5000,
  '30 sec': 30 * 1000,
  '1 min': 60 * 1000,
  '10 min': 10 * 60 * 1000
};
