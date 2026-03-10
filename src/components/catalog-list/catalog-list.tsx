import {useAppSelector} from '../../hooks/use-app-selector';
import {getIsProductsLoading} from '../../store/products/selectors';
import Loader from '../loader/loader';
import {TProducts} from '../../types/product';
import ProductCard from '../product-card/product-card';

type CatalogListProps = {
  products: TProducts;
}

function CatalogList({products}: CatalogListProps) {
  const isProductsLoading = useAppSelector(getIsProductsLoading);

  if (isProductsLoading) {
    return <Loader />;
  }

  return (
    <ul className="catalog__list">
      {products.map((product) => (
        <li className="catalog__item" key={product.id}>
          <ProductCard product={product} isBig />
        </li>
      ))}
    </ul>
  );
}

export default CatalogList;
