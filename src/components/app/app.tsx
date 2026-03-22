import MainPage from '../../pages/main-page/main-page';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import ProductPage from '../../pages/product-page/product-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import SignUpPage from '../../pages/sign-up-page/sign-up-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {AuthorizationStatus} from '../../services/api/const';
import {getIsAuthorized} from '../../store/user/selectors';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useEffect} from 'react';
import {fetchFavorites} from '../../store/favorites/api-actions';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../services/browser-history';

function App() {
  const isAuthorized = useAppSelector(getIsAuthorized);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthorized) {
      dispatch(fetchFavorites());
    }
  }, [isAuthorized, dispatch]);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          index
          element={<MainPage/>}
        />
        <Route
          path={AppRoute.Catalog}
          element={<CatalogPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute restrictedFor={AuthorizationStatus.NoAuth} redirectedTo={AppRoute.SignIn}>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Product}
          element={<ProductPage/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={
            <PrivateRoute restrictedFor={AuthorizationStatus.Auth} redirectedTo={AppRoute.Root}>
              <SignInPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.SignUp}
          element={
            <PrivateRoute restrictedFor={AuthorizationStatus.Auth} redirectedTo={AppRoute.Root}>
              <SignUpPage/>
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundPage/>}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
