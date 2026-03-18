import {getUser} from '../../store/user/selectors';
import {useAppSelector} from '../../hooks/use-app-selector';

function UserInfo() {
  const user = useAppSelector(getUser);

  return (
    <div className="header__user-info-wrap">
      <div className="header__user-info">
        <div className="header__user-avatar">
          <picture>
            <source
              type="image/webp"
              srcSet={`${user?.avatarUrl}, ${user?.avatarUrl} 2x`}
            />
            <img
              src={user?.avatarUrl}
              srcSet={`${user?.avatarUrl} 2x`}
              width={62}
              height={62}
              alt={`Аватар ${user?.name}.`}
            />
          </picture>
        </div>
        <p className="header__user-mail">{user?.email}</p>
      </div>
    </div>
  );
}

export default UserInfo;
