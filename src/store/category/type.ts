import {TCategories} from '../../types/category';
import {RequestStatus} from '../../services/api/const';
import {ProductCategory} from '../../const';

export type TProductCategory = keyof typeof ProductCategory | null;

export type TCategoriesState = {
  categories: TCategories;
  loadingStatus: RequestStatus;
  activeCategory: TProductCategory;
  activeTypes: string[];
}
