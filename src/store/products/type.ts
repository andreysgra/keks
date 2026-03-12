import {TProducts} from '../../types/product';
import {RequestStatus} from '../../services/api/const';

export type TProductsState = {
  products: TProducts;
  loadingStatus: RequestStatus;
}
