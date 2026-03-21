import {RequestStatus} from '../../services/api/const';
import {TProducts} from '../../types/product';

export type TFavoritesState = {
  favoriteProducts: TProducts;
  loadingStatus: RequestStatus;
}
