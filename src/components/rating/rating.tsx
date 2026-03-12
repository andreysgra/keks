import {STARS_COUNT} from '../../const';
import classNames from 'classnames';

type RatingProps = {
  rating: number;
  reviewCount?: number;
  isBig?: boolean;
}

function Rating({rating, reviewCount, isBig}: RatingProps) {
  const roundedRating = Math.round(rating);

  return (
    <div className={classNames('star-rating', {'star-rating--big': isBig})}>
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
      {reviewCount && <span className="star-rating__count">{reviewCount}</span>}
    </div>
  );
}

export default Rating;
