import {ReviewsSortType} from '../../const';
import {TSortOption} from '../../types/sorting';
import classNames from 'classnames';
import {MouseEvent} from 'react';

type ReviewsSortProps = {
  activeSort: TSortOption;
  onClick: (evt: MouseEvent<HTMLButtonElement>) => void;
}

function ReviewsSort({activeSort, onClick}: ReviewsSortProps) {
  const handleButtonClick = (evt: MouseEvent<HTMLButtonElement>) => onClick(evt);

  return (
    <div className="filter-sort__sort-wrap">
      <h3 className="filter-sort__sort-title">Сортировать по дате</h3>
      <div className="filter-sort__sort-btns-wrap">
        {Object.entries(ReviewsSortType).map(([option, title]) => (
          <button
            key={option}
            className={classNames('filter-sort__sort-btn',
              option === 'Ascending' ? 'filter-sort__sort-btn--inc' : 'filter-sort__sort-btn--desc',
              {'filter-sort__sort-btn--active': option === activeSort})}
            type="button"
            aria-label={title}
            onClick={handleButtonClick}
            value={option}
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
        ))}
      </div>
    </div>
  );
}

export default ReviewsSort;
