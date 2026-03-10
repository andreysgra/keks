import {TReview} from '../../types/review';
import classNames from 'classnames';
import {getDate, getTime} from '../../utils/utils';
import Rating from '../rating/rating';

type ReviewProps = {
  review: TReview;
  isBordered?: boolean;
}

function Review({review, isBordered}: ReviewProps) {
  const {
    user,
    positive,
    negative,
    isoDate,
    rating
  } = review;

  return (
    <div className="review">
      <div className={classNames('review__inner-wrapper', {'review__inner-wrapper--border': isBordered})}>
        <time className="review__date" dateTime={getDate(isoDate)}>
          {getTime(isoDate)}
        </time>
        <span className="review__author">Уважаемый(-ая) {user.name}</span>
        <Rating rating={rating} />
        <div className="review__text-wrapper">
          <p className="review__text">{positive}</p>
          <p className="review__text">{negative}</p>
        </div>
        <div className="review__image-wrapper">
          <picture>
            <source
              type="image/webp"
              srcSet={`${user.avatarUrl}, ${user.avatarUrl} 2x`}
            />
            <img
              src={user.avatarUrl}
              srcSet={`${user.avatarUrl} 2x`}
              width={162}
              height={162}
              alt={user.name}
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default Review;
