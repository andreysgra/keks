import {TShopLocation} from './types/shop';

export enum AppRoute {
  Root = '/',
  Catalog = '/catalog',
  Favorites = '/favorites',
  Product = '/product/:id',
  SignIn = '/sign-in',
  SignUp = '/sign-up'
}

export enum RouteParam {
  Id = ':id'
}

export const Shops: TShopLocation = {
  FIRST_SHOP: {
    name: 'Кондитерская 1',
    address: 'Морской пр. 2А',
    location: [59.970969, 30.316252],
    markerUrl: 'img/content/map-marker2.svg'
  },
  SECOND_SHOP: {
    name: 'Кондитерская 2',
    address: 'Морской пр. 2А',
    location: [59.967947, 30.274708],
    markerUrl: 'img/content/map-marker2.svg'
  },
  THIRD_SHOP: {
    name: 'Производство',
    address: 'Морской пр. 2А',
    location: [59.960380, 30.308725],
    markerUrl: 'img/content/map-marker1.svg'
  }
};

export const PRODUCTS_PER_LOAD = 6;

export const RANDOM_PRODUCTS_COUNT = 3;

export const STARS_COUNT = 5;
