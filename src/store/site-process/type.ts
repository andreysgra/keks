import {TShopType} from '../../types/shop';
import {TFilterOption} from '../../types/filter';

export type TSiteProcessState = {
  productsCount: number;
  reviewsCount: number;
  shopType: TShopType;
  filterRating: TFilterOption;
}
