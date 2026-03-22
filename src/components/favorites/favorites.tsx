import {useAppSelector} from '../../hooks/use-app-selector';
import {getFavorites, getIsFavoritesLoading} from '../../store/favorites/selectors';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useEffect} from 'react';
import {deleteFavorite, fetchFavorites} from '../../store/favorites/api-actions';
import CatalogList from '../catalog-list/catalog-list';
import Loader from '../loader/loader';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getFormattedNumber, getPlural} from '../../utils/utils';

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

  const productsTotalAmount =
    products.reduce((amount, product) => amount + product.price, 0);

  const formattedText = getPlural(products.length, ['кекс', 'кекса', 'кексов']);
  const formattedAmount = getFormattedNumber(productsTotalAmount);

  const handleButtonClick = () =>
    products.forEach((item) => {
      dispatch(deleteFavorite(item.id));
    });

  return (
    <>
      <section className="number-of-favourites favorites-page__qty">
        <div className="container">
          <h2 className="visually-hidden">Количество товаров в избранном.</h2>
          <p className="number-of-favourites__cakes">{products.length} {formattedText}</p>
          <div className="number-of-favourites__wrapper">
            <div className="number-of-favourites__wrap-price">
              <p className="number-of-favourites__text">Всего</p>
              <p className="number-of-favourites__price">{formattedAmount}&nbsp;р</p>
            </div>
          </div>
          <div className="number-of-favourites__button">
            <Link className="btn" to={AppRoute.Catalog}>
              В каталог
            </Link>
          </div>
        </div>
      </section>
      <section className="favourites">
        <div className="container">
          <h2 className="visually-hidden">Избранные товары</h2>
          <div className="favourites__button">
            <button className="btn btn--second" type="button" onClick={handleButtonClick}>
              Очистить
            </button>
          </div>
        </div>
        <section className="catalog">
          <div className="container">
            <h2 className="visually-hidden">Каталог</h2>
            <div className="catalog__wrapper">
              <CatalogList products={products}/>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Favorites;
