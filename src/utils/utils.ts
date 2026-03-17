import {TFilterByCategoryProducts, TFilterReviews} from '../types/filter';
import {TReview, TReviews} from '../types/review';
import {ProductCategory, RATING_LOW} from '../const';
import {TSortReviews} from '../types/sorting';
import {TProducts} from '../types/product';


export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[random]] = [shuffled[random], shuffled[i]];
  }

  return shuffled;
};

export const getDate = (date: string): string =>
  new Date(date).toLocaleDateString('en-CA');

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
  Ascending: (a: TReview, b: TReview) => Date.parse(a.isoDate) - Date.parse(b.isoDate),
  Descending: (a: TReview, b: TReview) => Date.parse(b.isoDate) - Date.parse(a.isoDate)
};

export const FilterProductsByCategory: TFilterByCategoryProducts = {
  [ProductCategory.All]: (products: TProducts) => products,
  [ProductCategory.Bisque]: (products: TProducts) =>
    products.filter((product) => product.category === ProductCategory.Bisque as string),
  [ProductCategory.Cheesecake]: (products: TProducts) => products.filter((product) =>
    product.category === ProductCategory.Cheesecake as string),
  [ProductCategory.Shortbread]: (products: TProducts) => products.filter((product) =>
    product.category === ProductCategory.Shortbread as string),
  [ProductCategory.Dessert]: (products: TProducts) => products.filter((product) =>
    product.category === ProductCategory.Dessert as string)
};
