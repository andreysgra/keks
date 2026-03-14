import FilterList from '../filter-list/filter-list';
import {ReviewsRating} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getFilterRating} from '../../store/site-process/selectors';
import {setFilterRating} from '../../store/site-process/slice';
import {ChangeEvent} from 'react';
import {TFilterOption} from '../../types/filter';
import {useAppDispatch} from '../../hooks/use-app-dispatch';

function ReviewsFilter() {
  const activeFilterRating = useAppSelector(getFilterRating);

  const dispatch = useAppDispatch();

  const handleFilterListChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterRating(evt.target.value as TFilterOption));
  };

  return (
    <div className="filter-sort">
      <div className="container">
        <div className="filter-sort__inner">
          <div className="filter-sort__filter-wrap">
            <h3 className="filter-sort__filter-title">Показать с рейтингом</h3>
            <div className="filter-sort__filter">
              <button className="filter-sort__filter-btn" type="button">
                {ReviewsRating[activeFilterRating]}
                <svg
                  className="filter-sort__filter-icon"
                  width={14}
                  height={15}
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-polygon"/>
                </svg>
              </button>
              {<FilterList activeFilter={activeFilterRating} onChange={handleFilterListChange} />}
            </div>
          </div>
          <div className="filter-sort__sort-wrap">
            <h3 className="filter-sort__sort-title">Сортировать по дате</h3>
            <div className="filter-sort__sort-btns-wrap">
              <button
                className="filter-sort__sort-btn filter-sort__sort-btn--inc filter-sort__sort-btn--active"
                type="button"
                aria-label="сортировка по возрастанию"
              >
                <svg
                  className="filter-sort__sort-icon"
                  width={19}
                  height={13}
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-chevron-top"/>
                </svg>
              </button>
              <button
                className="filter-sort__sort-btn filter-sort__sort-btn--desc"
                type="button"
                aria-label="сортировка по убыванию"
              >
                <svg
                  className="filter-sort__sort-icon"
                  width={19}
                  height={13}
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-chevron-top"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsFilter;
