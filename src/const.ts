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

export const PRODUCTS_PER_LOAD = 6;
