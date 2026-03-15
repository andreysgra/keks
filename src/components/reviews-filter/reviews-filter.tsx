import FilterList from '../filter-list/filter-list';
import {ReviewsRating} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getReviewsFilterOption, getReviewsSortOption} from '../../store/site-process/selectors';
import {setReviewsFilterOption, setReviewsSortOption} from '../../store/site-process/slice';
import {ChangeEvent} from 'react';
import {TFilterOption} from '../../types/filter';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import ReviewsSort from '../reviews-sort/reviews-sort';
import {MouseEvent} from 'react';
import {TSortOption} from '../../types/sorting';

function ReviewsFilter() {
  const activeFilter = useAppSelector(getReviewsFilterOption);
  const activeSort = useAppSelector(getReviewsSortOption);

  const dispatch = useAppDispatch();

  const handleFilterListChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(setReviewsFilterOption(evt.target.value as TFilterOption));
  };

  const handleReviewSortClick = (evt: MouseEvent<HTMLButtonElement>) => {
    dispatch(setReviewsSortOption(evt.currentTarget.value as TSortOption));
  };

  return (
    <div className="filter-sort">
      <div className="container">
        <div className="filter-sort__inner">
          <div className="filter-sort__filter-wrap">
            <h3 className="filter-sort__filter-title">Показать с рейтингом</h3>
            <div className="filter-sort__filter">
              <button className="filter-sort__filter-btn" type="button">
                {ReviewsRating[activeFilter]}
                <svg
                  className="filter-sort__filter-icon"
                  width={14}
                  height={15}
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-polygon"/>
                </svg>
              </button>
              <FilterList activeFilter={activeFilter} onChange={handleFilterListChange} />
            </div>
          </div>
          <ReviewsSort activeSort={activeSort} onClick={handleReviewSortClick} />
        </div>
      </div>
    </div>
  );
}

export default ReviewsFilter;
