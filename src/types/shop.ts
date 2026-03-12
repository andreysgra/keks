import {Shops} from '../const';

export type TShop = {
  name: string;
  address: string;
  location: [number, number];
  markerUrl: string;
}

export type TShopLocation = Record<string, TShop>

export type TShopPoint = Pick<TShop, 'location' | 'markerUrl'>

export type TShopType = keyof typeof Shops
