import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Hero from '../../components/hero/hero';
import RandomList from '../../components/random-list/random-list';
import ReviewLast from '../../components/review-last/review-last';
import store from '../../store';
import {fetchReviewLast} from '../../store/reviews/api-actions';

function MainPage() {
  store.dispatch(fetchReviewLast());

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <section className="random-main">
          <div className="container">
            <h2 className="random-main__title">кексы</h2>
            <RandomList />
          </div>
        </section>
        <ReviewLast />
        <section className="map">
          <div className="container">
            <h2 className="map__title">адреса</h2>
            <div className="map__wrapper" />
            <ul className="map__addresses">
              <li className="map__address">
                <div className="custom-toggle custom-toggle--radio custom-toggle--address">
                  <input
                    type="radio"
                    defaultValue="user-agreement-10"
                    id="user-agreement-id-10"
                    name="user-agreement"
                  />
                  <label
                    className="custom-toggle__label"
                    htmlFor="user-agreement-id-10"
                  >
                    Кондитерская 1
                  </label>
                  <address className="custom-toggle__address">
                    Морской пр. 2А
                    <svg
                      className="custom-toggle__icon"
                      width={26}
                      height={24}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-keks-footprint" />
                    </svg>
                  </address>
                </div>
              </li>
              <li className="map__address">
                <div className="custom-toggle custom-toggle--radio custom-toggle--address">
                  <input
                    type="radio"
                    defaultValue="user-agreement-12"
                    id="user-agreement-id-12"
                    name="user-agreement"
                    defaultChecked
                  />
                  <label
                    className="custom-toggle__label"
                    htmlFor="user-agreement-id-12"
                  >
                    Кондитерская 2
                  </label>
                  <address className="custom-toggle__address">
                    Морской пр. 2А
                    <svg
                      className="custom-toggle__icon"
                      width={26}
                      height={24}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-keks-footprint" />
                    </svg>
                  </address>
                </div>
              </li>
              <li className="map__address">
                <div className="custom-toggle custom-toggle--radio custom-toggle--address">
                  <input
                    type="radio"
                    defaultValue="user-agreement-13"
                    id="user-agreement-id-13"
                    name="user-agreement"
                  />
                  <label
                    className="custom-toggle__label"
                    htmlFor="user-agreement-id-13"
                  >
                    Производство
                  </label>
                  <address className="custom-toggle__address">
                    Морской пр. 2А
                    <svg
                      className="custom-toggle__icon"
                      width={26}
                      height={24}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-keks-footprint" />
                    </svg>
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
