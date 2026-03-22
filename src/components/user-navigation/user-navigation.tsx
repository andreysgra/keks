import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getIsAuthorized} from '../../store/user/selectors';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {logoutUser} from '../../store/user/api-actions';
import {getFavorites} from '../../store/favorites/selectors';

function UserNavigation() {
  const isAuthorized = useAppSelector(getIsAuthorized);
  const favoritesCount = useAppSelector(getFavorites).length;

  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    if (isAuthorized) {
      dispatch(logoutUser());
    }
  };

  return (
    <div className="header__buttons">
      {isAuthorized ? (
        <>
          <Link className="header__favourite" to={AppRoute.Favorites}>
            <span className="header__favourite-icon">
              <svg width={33} height={29} aria-hidden="true">
                <use xlinkHref="#icon-favourite"/>
              </svg>
            </span>
            {favoritesCount > 0 && <span className="header__favourite-number">{favoritesCount}</span>}
            <span className="visually-hidden">Избранное</span>
          </Link>
          <div className="header__buttons-authorized">
            <div className="header__btn">
              <Link className="btn btn--second" to={AppRoute.Root} onClick={handleLogoutClick}>
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
