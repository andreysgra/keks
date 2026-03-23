import {ChangeEvent} from 'react';
import {getPlural} from '../../utils/utils';

type RatingStarProps = {
  value: number;
  rating: number;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingStar({value, rating, onChange}: RatingStarProps) {
  const handleRadioChange = (evt: ChangeEvent<HTMLInputElement>) => onChange(evt);

  const ariaLabelText = `${value} ${getPlural(value, ['звезда', 'звёзды', 'звёзд'])}`;

  return (
    <>
      <input
        type="radio"
        name="rating"
        id={`input-star-rating-${value}`}
        value={value}
        checked={value === rating}
        aria-label={ariaLabelText}
        onChange={handleRadioChange}
      />
      <label htmlFor={`input-star-rating-${value}`}>
        <svg width={40} height={40} aria-hidden="true">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default RatingStar;
