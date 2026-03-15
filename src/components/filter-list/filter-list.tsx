import {ReviewsRating} from '../../const';
import {TFilterOption} from '../../types/filter';
import {ChangeEvent} from 'react';

type FilterList = {
  activeFilter: TFilterOption;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function FilterList({activeFilter, onChange}: FilterList) {
  const handleRadioChange = (evt: ChangeEvent<HTMLInputElement>) => onChange(evt);

  return (
    <ul className="filter-sort__filter-list">
      {Object.entries(ReviewsRating).map(([option, title], index) => (
        <li key={option} className="filter-sort__filter-item">
          <div className="custom-toggle custom-toggle--sorting">
            <input
              type="radio"
              id={`review-sort-${index}`}
              name="review-sort"
              checked={activeFilter === option}
              onChange={handleRadioChange}
              value={option}
            />
            <label
              className="custom-toggle__label"
              htmlFor={`review-sort-${index}`}
            >
              {title}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FilterList;
