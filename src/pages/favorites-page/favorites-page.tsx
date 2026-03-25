import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Favorites from '../../components/favorites/favorites';
import BackLink from '../../components/back-link/back-link';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getIsFavoritesFailed} from '../../store/favorites/selectors';
import classNames from 'classnames';
import {PageTitle} from '../../const';
import {Helmet} from 'react-helmet-async';

function FavoritesPage() {
  const isFavoritesFailed = useAppSelector(getIsFavoritesFailed);

  return (
    <>
      <Helmet>
        <title>{PageTitle.Favorites}</title>
      </Helmet>
      <div className="wrapper">
        <Header/>
        <main>
          <div className={classNames('favorites-page', {'favorites-page--error': isFavoritesFailed})}>
            <h1 className="visually-hidden">Избранное</h1>
            <BackLink/>
            <Favorites/>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default FavoritesPage;
