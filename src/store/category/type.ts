import {TCategories} from '../../types/category';
import {RequestStatus} from '../../services/api/const';

export type TCategoriesState = {
  categories: TCategories;
  loadingStatus: RequestStatus;
}
