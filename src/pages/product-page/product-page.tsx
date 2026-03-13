import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {useParams} from 'react-router-dom';
import Product from '../../components/product/product';
import BackLink from '../../components/back-link/back-link';
import ReviewsContent from '../../components/reviews-content/reviews-content';

function ProductPage() {
  const id = useParams().id as string;

  return (
    <div className="wrapper">
      <Header />
      <main>
        <h1 className="visually-hidden">Карточка товара</h1>
        <BackLink />
        <Product id={id} />
        <ReviewsContent id={id} />
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;
