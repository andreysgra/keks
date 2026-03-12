import {TReview, TReviews} from '../../types/review';
import {RequestStatus} from '../../services/api/const';

export type TReviewsState = {
  reviews: TReviews;
  reviewLast: TReview | null;
  loadingStatus: RequestStatus;
}
