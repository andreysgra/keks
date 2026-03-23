import {STARS_COUNT} from '../../const';
import RatingStar from '../rating-star/rating-star';
import {ChangeEvent, useState} from 'react';

function ReviewForm() {
  const [rating, setRating] = useState<number>(0);

  const handleRadioChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setRating(Number(evt.target.value));

  return (
    <section className="review-form">
      <div className="container">
        <div className="review-form__wrapper">
          <h2 className="review-form__title">оставить отзыв</h2>
          <div className="review-form__form">
            <form action="#" method="post" autoComplete="off">
              <div className="review-form__inputs-wrapper">
                <div className="custom-input">
                  <label>
                    <span className="custom-input__label">Достоинства</span>
                    <input
                      type="text"
                      name="advantages"
                      placeholder="Достоинства"
                      required
                    />
                  </label>
                </div>
                <div className="custom-input">
                  <label>
                    <span className="custom-input__label">Недостатки</span>
                    <input
                      type="text"
                      name="disadvantages"
                      placeholder="Недостатки"
                      required
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
                  <button className="btn review-form__button" type="submit">
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
