import classNames from 'classnames';
import {TProduct} from '../../types/product';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getFavorites, getIsFavoriteAdding} from '../../store/favorites/selectors';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {addFavorite, deleteFavorite} from '../../store/favorites/api-actions';
import {getIsAuthorized} from '../../store/user/selectors';

type FavoritesButtonProps = {
  id: TProduct['id'];
  isSmall?: boolean;
}

function FavoritesButton({id, isSmall}: FavoritesButtonProps) {
  const isFavoriteAdding = useAppSelector(getIsFavoriteAdding);
  const isFavorite = useAppSelector(getFavorites).some((favorite: TProduct) => favorite.id === id);
  const isAuthorized = useAppSelector(getIsAuthorized);

  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    if (isFavorite) {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <button
      className={classNames(
        isSmall ? 'item-details__like-button' : 'card-item__favorites',
        {
          'item-details__like-button--active': isFavorite && isAuthorized && isSmall,
          'card-item__favorites--active': isFavorite && isAuthorized && !isSmall
        }
      )}
      disabled={isFavoriteAdding}
      onClick={handleButtonClick}
    >
      <span className="visually-hidden">Добавить в избранное</span>
      <svg width={isSmall ? 45 : 51} height={isSmall ? 37 : 41} aria-hidden="true">
        <use xlinkHref="#icon-like" />
      </svg>
    </button>
  );
}

export default FavoritesButton;
