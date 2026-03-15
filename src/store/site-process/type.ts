import {TShopType} from '../../types/shop';
import {TFilterOption} from '../../types/filter';
import {TSortOption} from '../../types/sorting';

export type TSiteProcessState = {
  productsCount: number;
  reviewsCount: number;
  shopType: TShopType;
  reviewsFilterOption: TFilterOption;
  reviewsSortOption: TSortOption;
}
