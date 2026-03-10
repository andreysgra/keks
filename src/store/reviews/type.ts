import {TReview} from '../../types/review';
import {RequestStatus} from '../../services/api/const';

export type TReviewsState = {
  reviewLast: TReview | null;
  loadingStatus: RequestStatus;
}
