import {ReviewsSortType} from '../const';
import {TReview} from './review';

export type TSortOption = keyof typeof ReviewsSortType

export type TSortReviews = Record<TSortOption, (a: TReview, b: TReview) => number>
