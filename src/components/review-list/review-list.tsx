import {TReviews} from '../../types/review';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useEffect} from 'react';
import Review from '../review/review';
import ShowMoreButton from '../show-more-button/show-more-button';
import {getReviewsCount} from '../../store/site-process/selectors';
import {setReviewsCount} from '../../store/site-process/slice';
import {REVIEWS_PER_LOAD} from '../../const';

type ReviewListProps = {
  reviews: TReviews;
}

function ReviewList({reviews}: ReviewListProps) {
  const displayedComments = useAppSelector(getReviewsCount);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setReviewsCount(REVIEWS_PER_LOAD));
  }, [dispatch]);

  const handleShowMoreButtonClick = () =>
    dispatch(setReviewsCount(displayedComments + REVIEWS_PER_LOAD));

  const isShowMore = reviews.length > displayedComments;
  const isShowMoreDisplayed = reviews.length > REVIEWS_PER_LOAD;

  return (
    <section className="comments">
      <h2 className="visually-hidden">Список комментариев</h2>
      <div className="container">
        <div className="comments__wrapper">
          {reviews.slice(0, displayedComments).map((review) => <Review key={review.id} review={review}/>)}
        </div>
        {isShowMoreDisplayed && (
          <div className="comments__show-more">
            <ShowMoreButton onClick={handleShowMoreButtonClick} isComments isShowMore={isShowMore}/>
          </div>
        )}
      </div>
    </section>
  );
}

export default ReviewList;
