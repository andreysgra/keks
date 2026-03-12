import {TDetailedProduct} from '../../types/product';
import {RequestStatus} from '../../services/api/const';

export type TProductState = {
  product: TDetailedProduct | null;
  loadingStatus: RequestStatus;
}
