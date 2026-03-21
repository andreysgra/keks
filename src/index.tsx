import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import store from './store';
import {fetchProducts} from './store/products/api-actions';
import {fetchUserStatus} from './store/user/api-actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {fetchFavorites} from './store/favorites/api-actions';

store.dispatch(fetchUserStatus());
store.dispatch(fetchProducts());
store.dispatch(fetchFavorites());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
