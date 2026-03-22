import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Favorites from '../../components/favorites/favorites';
import BackLink from '../../components/back-link/back-link';

function FavoritesPage() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="favorites-page">
          <h1 className="visually-hidden">Избранное</h1>
          <BackLink />
          <Favorites />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
