import {useAppSelector} from '../../hooks/use-app-selector';
import {getFavorites, getIsFavoritesLoading} from '../../store/favorites/selectors';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useEffect} from 'react';
import {fetchFavorites} from '../../store/favorites/api-actions';
import CatalogList from '../catalog-list/catalog-list';
import Loader from '../loader/loader';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

function Favorites() {
  const products = useAppSelector(getFavorites);
  const isFavoritesLoading = useAppSelector(getIsFavoritesLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  if (isFavoritesLoading) {
    return <Loader />;
  }

  if (products.length === 0) {
    return <FavoritesEmpty />;
  }

  return (
    <section className="favourites">
      <div className="container">
        <h2 className="visually-hidden">Избранные товары</h2>
        <div className="favourites__button">
          <button className="btn btn--second" type="button">
            Очистить
          </button>
        </div>
      </div>
      <section className="catalog">
        <div className="container">
          <h2 className="visually-hidden">Каталог</h2>
          <div className="catalog__wrapper">
            <CatalogList products={products} />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Favorites;
