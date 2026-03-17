import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CatalogList from '../../components/catalog-list/catalog-list';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getFilteredProducts} from '../../store/category/selectors';
import {getProductsCount} from '../../store/site-process/selectors';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {setProductsCount} from '../../store/site-process/slice';
import {PRODUCTS_PER_LOAD} from '../../const';
import BackLink from '../../components/back-link/back-link';
import CatalogFilters from '../../components/catalog-filters/catalog-filters';

function CatalogPage() {
  const products = useAppSelector(getFilteredProducts);
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
        <CatalogFilters />
        <section className="catalog">
          <div className="container">
            <h2 className="visually-hidden">Каталог</h2>
            <div className="catalog__wrapper">
              <CatalogList products={products.slice(0, displayedProducts)} />
              <div className="catalog__button-wrapper">
                <ShowMoreButton onClick={handleShowMoreButtonClick} isShowed={isShowMoreButtonShowed} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CatalogPage;
