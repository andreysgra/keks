import {useAppSelector} from '../../hooks/use-app-selector';
import {getIsProductsLoading} from '../../store/products/selectors';
import Loader from '../loader/loader';
import CatalogCard from '../catalog-card/catalog-card';
import {TProducts} from '../../types/product';

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
      {products.map((product) => <CatalogCard key={product.id} product={product} />)}
    </ul>
  );
}

export default CatalogList;
