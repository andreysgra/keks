import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function ProductCardAll() {
  return (
    <Link className="random-main__link" to={AppRoute.Catalog}>
      <div className="random-main__icon-wrapper">
        <div className="random-main__icon">
          <svg width={120} height={130} aria-hidden="true">
            <use xlinkHref="#icon-keks" />
          </svg>
        </div>
      </div>
      <h3 className="random-main__subtitle">Все кексы</h3>
    </Link>
  );
}

export default ProductCardAll;
