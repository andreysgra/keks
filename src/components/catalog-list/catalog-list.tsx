import {TProducts} from '../../types/product';
import ProductCard from '../product-card/product-card';

type CatalogListProps = {
  products: TProducts;
}

function CatalogList({products}: CatalogListProps) {
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
