import {TReview} from '../../types/review';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getIsReviewsLoading, getReviews} from '../../store/reviews/selectors';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useEffect} from 'react';
import {fetchReviews} from '../../store/reviews/api-actions';
import Review from '../review/review';
import Loader from '../loader/loader';

type ReviewListProps = {
  id: TReview['id'];
}

function ReviewList({id}: ReviewListProps) {
  const reviews = useAppSelector(getReviews);
  const isReviewsLoading = useAppSelector(getIsReviewsLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReviews(id));
  }, [id, dispatch]);

  if (isReviewsLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="comments__wrapper">
        {reviews.map((review) => <Review key={review.id} review={review} />)}
      </div>
      <div className="comments__show-more">
        <button className="btn btn--second comments__button" type="button">
          Показать еще
        </button>
      </div>
    </div>
  );
}

export default ReviewList;
