import Logo from '../logo/logo';
import {useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';
import UserNavigation from '../user-navigation/user-navigation';
import UserInfo from '../user-info/user-info';
import classNames from 'classnames';

function Header() {
  const isRoot = useLocation().pathname === AppRoute.Root as string;
  const isAuthorized = false;

  return (
    <header className={classNames('header', {'header--authorized': isAuthorized})}>
      <div className="container">
        <div className="header__inner">
          <Logo isRoot={isRoot} />
          {isAuthorized && <UserInfo />}
          <UserNavigation isAuthorized={isAuthorized} />
        </div>
      </div>
    </header>
  );
}

export default Header;
