import {useAppSelector} from '../../hooks/use-app-selector';
import {getIsProductsFailed, getProducts} from '../../store/products/selectors';
import {shuffleArray} from '../../utils/utils';
import {RANDOM_PRODUCTS_COUNT} from '../../const';
import ProductCard from '../product-card/product-card';
import ProductCardAll from '../product-card-all/product-card-all';

function RandomList() {
  const products = useAppSelector(getProducts);
  const isProductsFailed = useAppSelector(getIsProductsFailed);

  if (isProductsFailed) {
    return ;
  }

  const randomProducts = shuffleArray(products).slice(0, RANDOM_PRODUCTS_COUNT);

  return (
    <ul className="random-main__list">
      {randomProducts.map((product) => (
        <li className="random-main__item" key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
      <li className="random-main__item">
        <ProductCardAll />
      </li>
    </ul>
  );
}

export default RandomList;
