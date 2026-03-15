import {TShopLocation} from './types/shop';

export enum AppRoute {
  Root = '/',
  Catalog = '/catalog',
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
