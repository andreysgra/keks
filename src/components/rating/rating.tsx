import {STARS_COUNT} from '../../const';
import classNames from 'classnames';

type RatingProps = {
  rating: number;
}

function Rating({rating}: RatingProps) {
  const roundedRating = Math.round(rating);

  return (
    <div className="star-rating">
      {Array.from({length: STARS_COUNT}, (_, i) =>
        (
          <svg key={i}
            className={classNames('star-rating__star', {'star-rating__star--active': i < roundedRating})}
            width={30}
            height={30}
            aria-hidden="true"
          >
            <use xlinkHref="#icon-star" />
          </svg>
        )
      )}
    </div>
  );
}

export default Rating;
