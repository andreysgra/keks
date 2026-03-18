import {ProductCategoryName, ProductTypeName, ReviewsRating} from '../const';
import {TReviews} from './review';
import {TProducts} from './product';

export type TFilterOption = keyof typeof ReviewsRating

export type TFilterReviews = Record<TFilterOption, (reviews: TReviews) => TReviews>

export type TFilterByCategoryProducts = Record<keyof typeof ProductCategoryName, (products: TProducts) => TProducts>

export type TFilterByTypeProducts = Record<keyof typeof ProductTypeName, (products: TProducts) => TProducts>
