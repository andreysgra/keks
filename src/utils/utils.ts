import {TFilterReviews} from '../types/filter';
import {TReview, TReviews} from '../types/review';
import {AVATAR_IMAGE_SIZE, AVATAR_IMAGE_TYPES, RATING_LOW} from '../const';
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

export const validateImageFile = (avatar: File) => {
  const fileName = avatar.name.toLowerCase();

  const validImageType = AVATAR_IMAGE_TYPES.some((fileType) => fileName.endsWith(fileType));
  const validImageSize = avatar.size <= AVATAR_IMAGE_SIZE;

  return validImageType && validImageSize;
};

export const getPlural = (count: number, words: [string, string, string]): string => {
  const [one, few, many] = words;

  if (count % 100 >= 11 && count % 100 <= 14) {
    return many;
  }

  switch (count % 10) {
    case 1:
      return one;
    case 2:
    case 3:
    case 4:
      return few;
    default:
      return many;
  }
};
