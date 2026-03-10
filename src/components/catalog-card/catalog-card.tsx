import classNames from 'classnames';
import {TProduct} from '../../types/product';
import {AppRoute, RouteParam} from '../../const';
import {Link} from 'react-router-dom';

type CatalogCardProps = {
  product: TProduct;
}

function CatalogCard({product}: CatalogCardProps) {
  const {
    id,
    title,
    price,
    previewImage,
    previewImageWebp,
    isNew,
    isFavorite
  } = product;

  const link = AppRoute.Product.replace(RouteParam.Id, id);

  return (
    <li className="catalog__item">
      <div className="card-item card-item--big">
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
        <button className={classNames('card-item__favorites', {'card-item__favorites--active': isFavorite})}>
          <span className="visually-hidden">Добавить в избранное</span>
          <svg width={51} height={41} aria-hidden="true">
            <use xlinkHref="#icon-like" />
          </svg>
        </button>
        <span className="card-item__price">{price} p</span>
        <Link className="card-item__link" to={link}>
          <h3 className="card-item__title">
            <span>{title}</span>
          </h3>
        </Link>
      </div>
    </li>
  );
}

export default CatalogCard;
