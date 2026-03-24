import {TShopLocation} from './types/shop';

export enum AppRoute {
  Root = '/',
  Catalog = '/catalog',
  Error = '/error',
  Favorites = '/favorites',
  NotFound = '/404',
  Product = '/product/:id',
  SignIn = '/sign-in',
  SignUp = '/sign-up'
}

export enum RouteParam {
  Id = ':id'
}

export enum ReviewsRating {
  All = 'Любой',
  High = 'Высокий',
  Low = 'Низкий'
}

export enum ReviewsSortType {
  Ascending = 'сортировка по возрастанию',
  Descending = 'сортировка по убыванию'
}

export enum ProductCategory {
  Bisque = 'bisque',
  Cheesecake = 'cheesecake',
  Dessert = 'dessert',
  Shortbread = 'shortbread'
}

export enum ProductType {
  Chocolate = 'chocolate',
  Vanilla = 'vanilla',
  Vegetarian = 'vegetarian',
  HoneyCake = 'honey-cake',
  Lemon = 'lemon',
  NewYork = 'new-york',
  Tart = 'tart',
  FunnelCake = 'funnel-cake',
  BasketCake = 'basket-cake',
  ChocolateMuffin = 'chocolate-muffin',
  BrandMuffin = 'brand-muffin'
}

export const ProductCategoryName: Record<string, string> = {
  [ProductCategory.Bisque]: 'Бисквит',
  [ProductCategory.Cheesecake]: 'Чизкейк',
  [ProductCategory.Shortbread]: 'Песочное',
  [ProductCategory.Dessert]: 'Десерт'
};

export const ProductTypeName: Record<string, string> = {
  [ProductType.Chocolate]: 'Шоколадный',
  [ProductType.Vanilla]: 'Ваниль',
  [ProductType.Vegetarian]: 'Вегетарианский',
  [ProductType.HoneyCake]: 'Медовый',
  [ProductType.Lemon]: 'Лимонный',
  [ProductType.NewYork]: 'Нью-Йорк',
  [ProductType.Tart]: 'Тарт',
  [ProductType.FunnelCake]: 'Муравейник',
  [ProductType.BasketCake]: 'Корзинка',
  [ProductType.ChocolateMuffin]: 'Шоколадный маффин',
  [ProductType.BrandMuffin]: 'Фирменный маффин'
};

export enum SuccessMessage {
  ReviewSubmit = 'Спасибо, за ваш отзыв',
  Registration = 'Вы успешно зарегистрировались на сайте'
}

export enum ErrorMessage {
  Avatar = 'Файл не более 100x100, размер менее 1 мб',
  Email = 'Некорректный адрес электронной почты',
  Login = 'Произошла ошибка авторизации',
  Name = 'Имя должно содержать хотя бы одну букву',
  NegativeReview = 'Опишите недостатки',
  Password = 'Пароль должен содержать минимум одну букву и одну цифру',
  PositiveReview = 'Опишите достоинства',
  Registration = 'Произошла ошибка регистрации',
  ReviewSubmit = 'Произошла ошибка, попробуйте отправить ещё раз'
}

export const Shops: TShopLocation = {
  FIRST_SHOP: {
    name: 'Кондитерская 1',
    address: 'ул. Попова, 9А',
    location: [59.970969, 30.316252],
    markerUrl: 'img/content/map-marker2.svg'
  },
  SECOND_SHOP: {
    name: 'Кондитерская 2',
    address: 'ул. Вязов, 13',
    location: [59.967975, 30.273566],
    markerUrl: 'img/content/map-marker2.svg'
  },
  THIRD_SHOP: {
    name: 'Производство',
    address: 'ул. Ленина, 10',
    location: [59.960380, 30.308725],
    markerUrl: 'img/content/map-marker1.svg'
  }
};

export const MAP_TILE_LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const MAP_TILE_LAYER_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
  'contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const MAP_DEFAULT_ZOOM = 16;

export const MapIcon = {
  Size: [26, 24] as [number, number],
  Anchor: [13, 12] as [number, number]
} as const;

export const PRODUCTS_PER_LOAD = 6;

export const REVIEWS_PER_LOAD = 2;

export const RANDOM_PRODUCTS_COUNT = 3;

export const STARS_COUNT = 5;

export const DESCRIPTION_MAX_LENGTH = 140;

export const RATING_LOW = 3;

export const REVIEW_MAX_LENGTH = 500;

export const AVATAR_IMAGE_TYPES = ['jpg', 'jpeg', 'png'];

export const AVATAR_IMAGE_SIZE = 1048576;

export const AVATAR_IMAGE_WIDTH = 100, AVATAR_IMAGE_HEIGHT = 100;

export const VALID_NAME_PATTERN = /^[A-Za-zА-яЁё]{1,}$/;

export const VALID_EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const VALID_PASSWORD_PATTERN = /^(?=.*[a-zA-Z])(?=.*\d)(?=.+$)/;

