import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {fetchReviews} from '../../store/reviews/api-actions';
import {TReview} from '../../types/review';

type ErrorReviewsProps = {
  id: TReview['id'];
}

function ErrorReviews({id}: ErrorReviewsProps) {
  const dispatch = useAppDispatch();

  const handleButtonCommentsClick = () => {
    if (id) {
      dispatch(fetchReviews(id));
    }
  };

  return (
    <section className="error-comments">
      <div className="container">
        <div className="error-comments__wrapper">
          <h2 className="error-comments__title">
            Не удалось загрузить комментарии
          </h2>
          <button className="btn error-comments__button" type="button" onClick={handleButtonCommentsClick}>
            Попробовать ещё
          </button>
        </div>
      </div>
    </section>

  );
}

export default ErrorReviews;
