import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {fetchFavorites} from '../../store/favorites/api-actions';
import './error-favorites.css';

function ErrorFavorites() {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(fetchFavorites());
  };

  return (
    <section className="error-favorites">
      <div className="container">
        <div className="error-favorites__wrapper">
          <h2 className="error-favorites__title">
            Не удалось загрузить избранное
          </h2>
          <button className="btn error-favorites__button" type="button" onClick={handleButtonClick}>
            Попробовать ещё
          </button>
        </div>
      </div>
    </section>
  );
}

export default ErrorFavorites;
