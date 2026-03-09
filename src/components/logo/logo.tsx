import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type LogoProps = {
  isRoot: boolean;
}

function Logo({isRoot}: LogoProps) {
  const logoImage = <img src="img/svg/logo.svg" width={170} height={69} alt="Кондитерская кекс" />;

  return (
    isRoot ? (
      <span className="header__logo">
        {logoImage}
      </span>)
      :
      (
        <Link className="header__logo" to={AppRoute.Root} aria-label="Переход на главную">
          {logoImage}
        </Link>)
  );
}

export default Logo;
