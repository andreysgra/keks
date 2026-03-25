import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Hero from '../../components/hero/hero';
import RandomList from '../../components/random-list/random-list';
import ReviewLast from '../../components/review-last/review-last';
import {fetchReviewLast} from '../../store/reviews/api-actions';
import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import MapContent from '../../components/map-content/map-content';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../const';

function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchReviewLast());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>{PageTitle.Main}</title>
      </Helmet>
      <div className="wrapper">
        <Header/>
        <main>
          <Hero/>
          <section className="random-main">
            <div className="container">
              <h2 className="random-main__title">кексы</h2>
              <RandomList/>
            </div>
          </section>
          <ReviewLast/>
          <MapContent/>
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default MainPage;
