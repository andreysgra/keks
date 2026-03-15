import ReviewList from '../../components/review-list/review-list';
import {TReview} from '../../types/review';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getHasReviews, getIsReviewsFailed, getIsReviewsLoading} from '../../store/reviews/selectors';
import Loader from '../loader/loader';
import ErrorReviews from '../error-reviews/error-reviews';
import NoReviews from '../no-reviews/no-reviews';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useEffect} from 'react';
import {fetchReviews} from '../../store/reviews/api-actions';
import ReviewsFilter from '../../components/reviews-filter/reviews-filter';
import {getFilteredReviews} from '../../store/site-process/selectors';
import NoFilteredReviews from '../no-filtered-reviews/no-filtered-reviews';

type CommentsProps = {
  id: TReview['id'];
}

function ReviewsContent({id}: CommentsProps) {
  const reviews = useAppSelector(getFilteredReviews);

  const isReviewsLoading = useAppSelector(getIsReviewsLoading);
  const isReviewsFailed = useAppSelector(getIsReviewsFailed);
  const hasReviews = useAppSelector(getHasReviews);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReviews(id));
  }, [id, dispatch]);

  if (isReviewsLoading) {
    return <Loader />;
  }

  if (isReviewsFailed) {
    return <ErrorReviews id={id} />;
  }

  if (!hasReviews) {
    return <NoReviews />;
  }

  return (
    <>
      <ReviewsFilter />
      {reviews.length > 0 ? <ReviewList reviews={reviews} /> : <NoFilteredReviews />}
    </>
  );
}

export default ReviewsContent;
