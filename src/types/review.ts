import {TUser} from './user';

export type TReview = {
  id: string;
  isoDate: string;
  user: Pick<TUser, 'name' | 'avatarUrl'>;
  positive: string;
  negative: string;
  rating: number;
}

export type TReviews = TReview[];

export type TReviewContent = Omit<TReview, 'isoDate' | 'user'>
