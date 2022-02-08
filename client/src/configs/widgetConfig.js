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

export const pizzasImages = {
  'Изи Фризи': 'https://images.dominos.by/media/dominos/osg/api/2021/10/14/izi_frizi_small.png',
  Чеддерони: 'https://images.dominos.by/media/dominos/osg/api/2021/10/14/chedderoni_small.png',
  Карбонарахит: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/carbonara.png',
  'Чикен Ранч': 'https://images.dominos.by/media/dominos/osg/api/2020/11/18/chiken_fresh_small.png',
  Мексиканская:
    'https://images.dominos.by/media/dominos/osg/api/2021/06/10/meksikanskaya_small.png',
  Прованс: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/provence.png',
  Мюнхенская: 'https://images.dominos.by/media/dominos/osg/api/2019/07/03/myunkhenskaya_small.png',
  Ривьера: 'https://images.dominos.by/media/dominos/osg/api/2021/03/23/rivyera_small_mNcDSaS.png',
  Фермерская: 'https://images.dominos.by/media/dominos/osg/api/2019/10/18/fermerskaya_small.png',
  Маргарита: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/margarita.png',
  Пепперони: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/pepperoni.png',
  Лесная: 'https://images.dominos.by/media/dominos/osg/api/2020/11/18/lesnaya_small.png'
};

export const pizzas = Object.keys(pizzasImages);

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
