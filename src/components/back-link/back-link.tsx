import {MouseEvent} from 'react';
import browserHistory from '../../services/browser-history';

function BackLink() {
  const handleBackLinkClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    browserHistory.back();
  };

  return (
    <div className="back-link">
      <div className="container">
        <a className="back-link__link" style={{cursor: 'pointer'}} onClick={handleBackLinkClick}>
          Назад
          <svg
            className="back-link__icon"
            width={30}
            height={16}
            aria-hidden="true"
          >
            <use xlinkHref="#icon-arrow-left" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default BackLink;
