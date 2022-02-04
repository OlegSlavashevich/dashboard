import Currency from '../components/Widgets/Currency';
import Weather from '../components/Widgets/Weather';
import Radio from '../components/Widgets/Radio';
import Pizza from '../components/Widgets/Pizza';
import CurrencyConfigForm from '../components/WidgetsConfigForms/CurrencyConfigForm';
import WeatherConfigForm from '../components/WidgetsConfigForms/WeatherConfigForm';
import RadioConfigForm from '../components/WidgetsConfigForms/RadioConfigForm';
import PizzaConfigForm from '../components/WidgetsConfigForms/PizzaConfigForm';

export const widgets = {
  currency: Currency,
  weather: Weather,
  radio: Radio,
  pizza: Pizza
};

export const widgetsConfigView = {
  currency: CurrencyConfigForm,
  weather: WeatherConfigForm,
  radio: RadioConfigForm,
  pizza: PizzaConfigForm
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

export const widgetsWithoutUpdate = ['radio', 'pizza'];

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

export const pizzas = [
  'Изи Фризи',
  'Чеддерони',
  'Карбонарахит',
  'Чикен Ранч',
  'Мексиканская',
  'Прованс',
  'Мюнхенская',
  'Ривьера',
  'Фермерская',
  'Маргарита',
  'Пепперони',
  'Лесная'
];
