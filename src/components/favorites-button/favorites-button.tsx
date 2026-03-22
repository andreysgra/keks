import classNames from 'classnames';
import {TProduct} from '../../types/product';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getFavorites, getIsFavoriteAdding} from '../../store/favorites/selectors';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {addFavorite, deleteFavorite} from '../../store/favorites/api-actions';
import {getIsAuthorized} from '../../store/user/selectors';

type FavoritesButtonProps = {
  id: TProduct['id'];
}

function FavoritesButton({id}: FavoritesButtonProps) {
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
      className={classNames('card-item__favorites', {'card-item__favorites--active': isFavorite && isAuthorized})}
      disabled={isFavoriteAdding}
      onClick={handleButtonClick}
    >
      <span className="visually-hidden">Добавить в избранное</span>
      <svg width={51} height={41} aria-hidden="true">
        <use xlinkHref="#icon-like" />
      </svg>
    </button>
  );
}

export default FavoritesButton;
