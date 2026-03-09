import MainPage from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import ProductPage from '../../pages/product-page/product-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import SignUpPage from '../../pages/sign-up-page/sign-up-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Catalog}
          element={<CatalogPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesPage />}
        />
        <Route
          path={AppRoute.Product}
          element={<ProductPage />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.SignUp}
          element={<SignUpPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
