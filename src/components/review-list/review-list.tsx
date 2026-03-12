import {TReview} from '../../types/review';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getIsReviewsLoading, getReviews} from '../../store/reviews/selectors';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useEffect} from 'react';
import {fetchReviews} from '../../store/reviews/api-actions';
import Review from '../review/review';
import Loader from '../loader/loader';
import ShowMoreButton from '../show-more-button/show-more-button';
import {getReviewsCount} from '../../store/site-process/selectors';
import {setReviewsCount} from '../../store/site-process/slice';
import {REVIEWS_PER_LOAD} from '../../const';

type ReviewListProps = {
  id: TReview['id'];
}

function ReviewList({id}: ReviewListProps) {
  const reviews = useAppSelector(getReviews);
  const isReviewsLoading = useAppSelector(getIsReviewsLoading);
  const displayedComments = useAppSelector(getReviewsCount);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReviews(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(setReviewsCount(REVIEWS_PER_LOAD));
  }, [dispatch]);

  if (isReviewsLoading) {
    return <Loader />;
  }

  const handleShowMoreButtonClick = () =>
    dispatch(setReviewsCount(displayedComments + REVIEWS_PER_LOAD));

  const isShowMoreButtonShowed = reviews.length > displayedComments;

  return (
    <div className="container">
      <div className="comments__wrapper">
        {reviews.slice(0, displayedComments).map((review) => <Review key={review.id} review={review} />)}
      </div>
      <div className="comments__show-more">
        <ShowMoreButton onClick={handleShowMoreButtonClick} isComments isShowed={isShowMoreButtonShowed} />
      </div>
    </div>
  );
}

export default ReviewList;
