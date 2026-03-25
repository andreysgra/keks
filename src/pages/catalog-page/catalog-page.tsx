import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import BackLink from '../../components/back-link/back-link';
import CatalogFilters from '../../components/catalog-filters/catalog-filters';
import Catalog from '../../components/catalog/catalog';
import {PageTitle} from '../../const';
import {Helmet} from 'react-helmet-async';

function CatalogPage() {
  return (
    <>
      <Helmet>
        <title>{PageTitle.Catalog}</title>
      </Helmet>
      <div className="wrapper">
        <Header/>
        <main>
          <h1 className="visually-hidden">Каталог товаров</h1>
          <BackLink/>
          <CatalogFilters/>
          <Catalog/>
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default CatalogPage;
