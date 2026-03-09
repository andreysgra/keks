import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type UserNavigationProps = {
  isAuthorized: boolean;
}

function UserNavigation({isAuthorized}: UserNavigationProps) {
  return (
    <div className="header__buttons">
      {isAuthorized ? (
        <>
          <Link className="header__favourite" to={AppRoute.Favorites}>
            <span className="header__favourite-icon">
              <svg width={33} height={29} aria-hidden="true">
                <use xlinkHref="#icon-favourite" />
              </svg>
            </span>
            <span className="visually-hidden">Избранное</span>
          </Link>
          <div className="header__buttons-authorized">
            <div className="header__btn">
              <Link className="btn btn--second" to={AppRoute.Root}>
                Выйти
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="header__btn">
            <Link className="btn btn--third header__link header__link--reg" to={AppRoute.SignUp}>
              Регистрация
            </Link>
          </div>
          <div className="header__btn">
            <Link className="btn" to={AppRoute.SignIn}>
              Войти
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default UserNavigation;
