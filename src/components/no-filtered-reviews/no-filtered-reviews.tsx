import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {setReviewsFilterOption} from '../../store/site-process/slice';

function NoFilteredReviews() {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => dispatch(setReviewsFilterOption('All'));

  return (
    <section className="empty-results empty-results--has-sort">
      <div className="container">
        <div className="empty-results__wrapper">
          <h2 className="empty-results__title">
            По вашему запросу информации не найдено
          </h2>
          <button className="btn btn--second empty-results__button" type="button" onClick={handleButtonClick}>
            Сбросить фильтры
          </button>
          <svg width={180} height={166} aria-hidden="true">
            <use xlinkHref="#icon-cake" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default NoFilteredReviews;
