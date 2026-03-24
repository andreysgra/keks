import {ReviewsRating} from '../const';
import {TReviews} from './review';

export type TFilterOption = keyof typeof ReviewsRating

export type TFilterReviews = Record<TFilterOption, (reviews: TReviews) => TReviews>
