import {ErrorMessage, RATING_LOW, REVIEW_MAX_LENGTH, STARS_COUNT, SuccessMessage} from '../../const';
import RatingStar from '../rating-star/rating-star';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector';
import {
  getIsReviewSubmitFailed,
  getIsReviewSubmitting,
  getIsReviewSubmitSuccess
} from '../../store/reviews/selectors';
import {toast} from 'react-toastify';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {postReview} from '../../store/reviews/api-actions';
import {TReviewContent} from '../../types/review';
import {TProduct} from '../../types/product';
import classNames from 'classnames';
import {setReviewStatus} from '../../store/reviews/slice';
import {RequestStatus} from '../../services/api/const';

type ReviewFormProps = {
  id: TProduct['id'];
}

function ReviewForm({id}: ReviewFormProps) {
  const [rating, setRating] = useState<number>(0);
  const [positiveReview, setPositiveReview] = useState<string>('');
  const [negativeReview, setNegativeReview] = useState<string>('');
  const [isValueValid, setIsValueValid] = useState({positiveReview: true, negativeReview: true});
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useAppDispatch();

  const isSubmitting = useAppSelector(getIsReviewSubmitting);
  const isSubmitSuccess = useAppSelector(getIsReviewSubmitSuccess);
  const isReviewSubmitFailed = useAppSelector(getIsReviewSubmitFailed);

  useEffect(() => {
    dispatch(setReviewStatus(RequestStatus.Idle));

    if (isSubmitSuccess) {
      toast.success(SuccessMessage.ReviewSubmit);

      setRating(0);
      setPositiveReview('');
      setNegativeReview('');
    }

    if (isReviewSubmitFailed) {
      toast.error(ErrorMessage.ReviewSubmit);
    }
  }, [isSubmitSuccess, isReviewSubmitFailed, dispatch]);

  const handleRadioChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setRating(Number(evt.target.value));

  const handlePositiveInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPositiveReview(evt.target.value);
  };

  const handleNegativeInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setNegativeReview(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>)=> {
    evt.preventDefault();

    if (rating > RATING_LOW && positiveReview.length === 0) {
      setErrorMessage(ErrorMessage.PositiveReview);
      setIsValueValid({positiveReview: false, negativeReview: true});

      return;
    }

    if (rating <= RATING_LOW && negativeReview.length === 0) {
      setErrorMessage(ErrorMessage.NegativeReview);
      setIsValueValid({positiveReview: true, negativeReview: false});

      return;
    }

    dispatch(postReview({id, positive: positiveReview, negative: negativeReview, rating} as TReviewContent));
  };

  const handleFormChange = ()=> {
    setIsValueValid({positiveReview: true, negativeReview: true});
    setErrorMessage('');
  };

  const isDisabled =
    isSubmitting || !rating || positiveReview.length > REVIEW_MAX_LENGTH || negativeReview.length > REVIEW_MAX_LENGTH;

  return (
    <section className="review-form">
      <div className="container">
        <div className="review-form__wrapper">
          <h2 className="review-form__title">оставить отзыв</h2>
          <div className="review-form__form">
            <form
              method="post"
              autoComplete="off"
              onSubmit={handleFormSubmit}
              onChange={handleFormChange}
              noValidate
            >
              <div className="review-form__inputs-wrapper">
                <div className={classNames('custom-input', {'is-invalid': !isValueValid.positiveReview})}>
                  <label>
                    <span className={classNames(
                      {'custom-input__label': isValueValid.positiveReview},
                      {'custom-input__message': !isValueValid.positiveReview}
                    )}
                    >
                      {isValueValid.positiveReview ? 'Достоинства' : errorMessage}
                    </span>
                    <input
                      type="text"
                      name="positive"
                      placeholder="Достоинства"
                      value={positiveReview}
                      required
                      onChange={handlePositiveInputChange}
                    />
                  </label>
                </div>
                <div className={classNames('custom-input', {'is-invalid': !isValueValid.negativeReview})}>
                  <label>
                    <span className={classNames(
                      {'custom-input__label': isValueValid.negativeReview},
                      {'custom-input__message': !isValueValid.negativeReview}
                    )}
                    >
                      {isValueValid.negativeReview ? 'Недостатки' : errorMessage}
                    </span>
                    <input
                      type="text"
                      name="negative"
                      placeholder="Недостатки"
                      value={negativeReview}
                      required
                      onChange={handleNegativeInputChange}
                    />
                  </label>
                </div>
              </div>
              <div className="review-form__submit-wrapper">
                <div className="review-form__rating-wrapper">
                  <div className="input-star-rating">
                    {Array.from({length: STARS_COUNT}, (_, i: number) => (
                      <RatingStar
                        key={`star-${STARS_COUNT - i}`}
                        value={STARS_COUNT - i}
                        rating={rating}
                        onChange={handleRadioChange}
                      />
                    ))}
                  </div>
                </div>
                <div className="review-form__button-wrapper">
                  <button className="btn review-form__button" type="submit" disabled={isDisabled}>
                    Отправить отзыв
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewForm;
