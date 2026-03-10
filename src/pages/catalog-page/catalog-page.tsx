import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CatalogList from '../../components/catalog-list/catalog-list';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getProducts} from '../../store/products/selectors';
import {getProductsCount} from '../../store/site-process/selectors';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {setProductsCount} from '../../store/site-process/slice';
import {PRODUCTS_PER_LOAD} from '../../const';
import BackLink from '../../components/back-link/back-link';

function CatalogPage() {
  const products = useAppSelector(getProducts);
  const displayedProducts = useAppSelector(getProductsCount);

  const dispatch = useAppDispatch();

  const handleShowMoreButtonClick = () =>
    dispatch(setProductsCount(displayedProducts + PRODUCTS_PER_LOAD));

  const isShowMoreButtonShowed = products.length > displayedProducts;

  return (
    <div className="wrapper">
      <Header />
      <main>
        <h1 className="visually-hidden">Каталог товаров</h1>
        <BackLink />
        <div className="catalog-filter">
          <div className="container">
            <div className="catalog-filter__first-level">
              <h3 className="catalog-filter__title catalog-filter__title--first-level">
                основы
              </h3>
              <ul className="catalog-filter__list catalog-filter__list--first-level">
                <li className="catalog-filter__item catalog-filter__item--first-level">
                  <button className="btn btn--filter-first-level" type="button">
                    Бисквит
                  </button>
                </li>
                <li className="catalog-filter__item catalog-filter__item--first-level">
                  <button className="btn btn--filter-first-level" type="button">
                    Десерт
                  </button>
                </li>
                <li className="catalog-filter__item catalog-filter__item--first-level">
                  <button className="btn btn--filter-first-level" type="button">
                    Чизкейк
                  </button>
                </li>
                <li className="catalog-filter__item catalog-filter__item--first-level">
                  <button className="btn btn--filter-first-level" type="button">
                    Песочное
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="catalog">
          <div className="container">
            <h2 className="visually-hidden">Каталог</h2>
            <div className="catalog__wrapper">
              <CatalogList products={products.slice(0, displayedProducts)} />
              <ShowMoreButton onClick={handleShowMoreButtonClick} isShowed={isShowMoreButtonShowed} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CatalogPage;
