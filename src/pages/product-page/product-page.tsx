import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {useParams} from 'react-router-dom';
import Product from '../../components/product/product';
import BackLink from '../../components/back-link/back-link';

function ProductPage() {
  const id = useParams().id as string;

  return (
    <div className="wrapper">
      <Header />
      <main>
        <h1 className="visually-hidden">Карточка: пользователь не авторизован</h1>
        <BackLink />
        <Product id={id} />
        <div className="filter-sort">
          <div className="container">
            <div className="filter-sort__inner">
              <div className="filter-sort__filter-wrap">
                <h3 className="filter-sort__filter-title">Показать с рейтингом</h3>
                <div className="filter-sort__filter">
                  <button className="filter-sort__filter-btn" type="button">
                    Любой
                    <svg
                      className="filter-sort__filter-icon"
                      width={14}
                      height={15}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-polygon" />
                    </svg>
                  </button>
                  <ul className="filter-sort__filter-list">
                    <li className="filter-sort__filter-item">
                      <div className="custom-toggle custom-toggle--sorting">
                        <input
                          type="radio"
                          id="review-sort-1"
                          name="review-sort"
                          defaultChecked
                        />
                        <label
                          className="custom-toggle__label"
                          htmlFor="review-sort-1"
                        >
                          Любой
                        </label>
                      </div>
                    </li>
                    <li className="filter-sort__filter-item">
                      <div className="custom-toggle custom-toggle--sorting">
                        <input type="radio" id="review-sort-2" name="review-sort" />
                        <label
                          className="custom-toggle__label"
                          htmlFor="review-sort-2"
                        >
                          Высокий
                        </label>
                      </div>
                    </li>
                    <li className="filter-sort__filter-item">
                      <div className="custom-toggle custom-toggle--sorting">
                        <input type="radio" id="review-sort-3" name="review-sort" />
                        <label
                          className="custom-toggle__label"
                          htmlFor="review-sort-3"
                        >
                          Низкий
                        </label>
                      </div>
                    </li>
                  </ul>
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
                      <use xlinkHref="#icon-chevron-top" />
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
                      <use xlinkHref="#icon-chevron-top" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="comments">
          <h2 className="visually-hidden">Список комментариев</h2>
          <div className="container">
            <div className="comments__wrapper">
              <div className="review">
                <div className="review__inner-wrapper">
                  <time className="review__date" dateTime="2023-05-15">
                    15.05
                  </time>
                  <span className="review__author">Уважаемый(-ая) Кот</span>
                  <div className="star-rating">
                    <svg
                      className="star-rating__star star-rating__star--active"
                      width={30}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <svg
                      className="star-rating__star star-rating__star--active"
                      width={30}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <svg
                      className="star-rating__star star-rating__star--active"
                      width={30}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <svg
                      className="star-rating__star star-rating__star--active"
                      width={30}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <svg
                      className="star-rating__star star-rating__star--active"
                      width={30}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-star" />
                    </svg>
                  </div>
                  <div className="review__text-wrapper">
                    <p className="review__text">
                      Отличный сервис! Очень вкусный, сочный и&nbsp;яркий торт.
                      Удобная коробка для транспортировки. Свежие фрукты
                      и&nbsp;съедобный дизайн.
                    </p>
                    <p className="review__text">
                      Недостатков нет, обязательно будем заказывать и&nbsp;приходить
                      в&nbsp;Кексик
                    </p>
                  </div>
                  <div className="review__image-wrapper">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="img/content/review-1.webp, img/content/review-1@2x.webp 2x"
                      />
                      <img
                        src="img/content/review-1.jpg"
                        srcSet="img/content/review-1@2x.jpg 2x"
                        width={162}
                        height={162}
                        alt="Кот"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <div className="review">
                <div className="review__inner-wrapper">
                  <time className="review__date" dateTime="2023-05-13">
                    13.05
                  </time>
                  <span className="review__author">Уважаемый(-ая) Барсук</span>
                  <div className="star-rating">
                    <svg
                      className="star-rating__star star-rating__star--active"
                      width={30}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <svg
                      className="star-rating__star star-rating__star--active"
                      width={30}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <svg
                      className="star-rating__star star-rating__star--active"
                      width={30}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <svg
                      className="star-rating__star star-rating__star--active"
                      width={30}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <svg
                      className="star-rating__star star-rating__star--active"
                      width={30}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-star" />
                    </svg>
                  </div>
                  <div className="review__text-wrapper">
                    <p className="review__text">
                      Свежие, вкусные, быстро доставили, интересные украшения Всё
                      понравилось, будем заказывать и&nbsp;покупать на&nbsp;все
                      праздники
                    </p>
                  </div>
                  <div className="review__image-wrapper">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="img/content/review-2.webp, img/content/review-2@2x.webp 2x"
                      />
                      <img
                        src="img/content/review-2.jpg"
                        srcSet="img/content/review-2@2x.jpg 2x"
                        width={162}
                        height={162}
                        alt="Барсук"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <div className="review">
                <div className="review__inner-wrapper">
                  <time className="review__date" dateTime="2023-05-10">
                    10.05
                  </time>
                  <span className="review__author">Уважаемый(-ая) Собакевич</span>
                  <div className="star-rating">
                    <svg
                      className="star-rating__star star-rating__star--active"
                      width={30}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <svg
                      className="star-rating__star star-rating__star--active"
                      width={30}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <svg
                      className="star-rating__star star-rating__star--active"
                      width={30}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <svg
                      className="star-rating__star"
                      width={30}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-star" />
                    </svg>
                    <svg
                      className="star-rating__star"
                      width={30}
                      height={30}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-star" />
                    </svg>
                  </div>
                  <div className="review__text-wrapper">
                    <p className="review__text">
                      Отличный сервис! Отзывчивы персонал, но&nbsp;вкус
                      не&nbsp;обрадовал: украшения подсохли, начинка слишком
                      сладкая. На&nbsp;любителя.
                    </p>
                  </div>
                  <div className="review__image-wrapper">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="img/content/review-3.webp, img/content/review-3@2x.webp 2x"
                      />
                      <img
                        src="img/content/review-3.jpg"
                        srcSet="img/content/review-3@2x.jpg 2x"
                        width={162}
                        height={162}
                        alt="Собакевич"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;
