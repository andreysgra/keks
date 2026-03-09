import Logo from '../logo/logo';
import {useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';

function Header() {
  const isRoot = useLocation().pathname === AppRoute.Root as string;

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo isRoot={isRoot} />
          <div className="header__buttons">
            <div className="header__btn">
              <a
                className="btn btn--third header__link header__link--reg"
                href="register-page.html"
              >
                Регистрация
              </a>
            </div>
            <div className="header__btn">
              <a className="btn" href="login-page.html">
                Войти
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
