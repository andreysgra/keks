import {useAppSelector} from '../../hooks/use-app-selector';
import {getLoadingStatus, getReviewsLast} from '../../store/reviews/selectors';
import {RequestStatus} from '../../services/api/const';
import Review from '../review/review';

function ReviewLast() {
  const review = useAppSelector(getReviewsLast);
  const loadingStatus = useAppSelector(getLoadingStatus);

  if (loadingStatus === RequestStatus.Error || !review) {
    return;
  }

  return (
    <section className="last-review">
      <div className="container">
        <h2 className="last-review__title">последний отзыв</h2>
        <Review review={review} isBordered />
      </div>
    </section>
  );
}

export default ReviewLast;
