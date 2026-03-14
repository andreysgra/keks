import {TFilterReviews} from '../types/filter';
import {TReview, TReviews} from '../types/review';
import {RATING_LOW} from '../const';
import {TSortReviews} from '../types/sorting';

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[random]] = [shuffled[random], shuffled[i]];
  }

  return shuffled;
};

export const getDate = (date: string): string =>
  new Date(date).toISOString().split('T')[0];

export const getTime = (date: string): string =>
  new Date(date).toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'})
    .replace(':', '.');

export const getFormattedNumber = (digits: number): string =>
  new Intl.NumberFormat('ru-RU').format(digits);

export const FilterReviewsByRating: TFilterReviews = {
  All: (reviews: TReviews) => reviews,
  High: (reviews: TReviews) => reviews.filter((review) => review.rating > RATING_LOW),
  Low: (reviews: TReviews) => reviews.filter((review) => review.rating <= RATING_LOW),
};

export const SortReviewsByDate: TSortReviews = {
  Ascending: (a: TReview, b: TReview) => Date.parse(b.isoDate) - Date.parse(a.isoDate),
  Descending: (a: TReview, b: TReview) => Date.parse(a.isoDate) - Date.parse(b.isoDate)
};
