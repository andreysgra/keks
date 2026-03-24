import CatalogList from '../catalog-list/catalog-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getFilteredProducts} from '../../store/category/selectors';
import {getProductsCount} from '../../store/site-process/selectors';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {setProductsCount} from '../../store/site-process/slice';
import {AppRoute, PRODUCTS_PER_LOAD} from '../../const';
import NoFilteredProducts from '../no-filtered-products/no-filtered-products';
import {getIsProductsFailed, getIsProductsLoading} from '../../store/products/selectors';
import Loader from '../loader/loader';
import {useEffect} from 'react';
import {fetchProducts} from '../../store/products/api-actions';
import {setActiveCategory} from '../../store/category/slice';
import {useNavigate} from 'react-router-dom';

function Catalog() {
  const products = useAppSelector(getFilteredProducts);
  const displayedProducts = useAppSelector(getProductsCount);
  const isProductsLoading = useAppSelector(getIsProductsLoading);
  const isProductsFailed = useAppSelector(getIsProductsFailed);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(setActiveCategory(null));
  }, [dispatch]);

  if (isProductsLoading) {
    return <Loader />;
  }

  if (isProductsFailed) {
    navigate(AppRoute.Error);
  }

  if (products.length === 0) {
    return <NoFilteredProducts />;
  }

  const handleShowMoreButtonClick = () =>
    dispatch(setProductsCount(displayedProducts + PRODUCTS_PER_LOAD));

  const isShowMore = products.length > displayedProducts;
  const isShowMoreDisplayed = products.length > PRODUCTS_PER_LOAD;

  return (
    <section className="catalog">
      <div className="container">
        <h2 className="visually-hidden">Каталог</h2>
        <div className="catalog__wrapper">
          <CatalogList products={products.slice(0, displayedProducts)} />
          {isShowMoreDisplayed && (
            <div className="catalog__button-wrapper">
              <ShowMoreButton onClick={handleShowMoreButtonClick} isShowMore={isShowMore}/>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Catalog;
