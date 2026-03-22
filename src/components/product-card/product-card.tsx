import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {TProduct} from '../../types/product';
import {AppRoute, RouteParam} from '../../const';
import {getFormattedNumber} from '../../utils/utils';
import FavoritesButton from '../favorites-button/favorites-button';

type ProductCardProps = {
  product: TProduct;
  isBig?: boolean;
}

function ProductCard({product, isBig}: ProductCardProps) {
  const {
    id,
    title,
    price,
    previewImage,
    previewImageWebp,
    isNew
  } = product;

  const link = AppRoute.Product.replace(RouteParam.Id, id);

  return (
    <div className={classNames('card-item', {'card-item--big': isBig})}>
      <Link className="card-item__img-link" to={link}>
        <div className="card-item__img-wrapper">
          <picture>
            <source
              type="image/webp"
              srcSet={`${previewImageWebp}, ${previewImageWebp} 2x`}
            />
            <img
              src={previewImage}
              srcSet={`${previewImage} 2x`}
              width={326}
              height={332}
              alt={title}
            />
          </picture>
        </div>
        {isNew && <span className="card-item__label">Новинка</span>}
      </Link>
      <FavoritesButton id={id} />
      {isBig && <span className="card-item__price">{getFormattedNumber(price)} p</span>}
      <Link className="card-item__link" to={link}>
        <h3 className="card-item__title">
          <span>{title}</span>
        </h3>
      </Link>
    </div>
  );
}

export default ProductCard;
