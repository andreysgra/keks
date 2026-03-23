import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {useParams} from 'react-router-dom';
import Product from '../../components/product/product';
import BackLink from '../../components/back-link/back-link';
import ReviewsContent from '../../components/reviews-content/reviews-content';
import ReviewForm from '../../components/review-form/review-form';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getReviewFormShown} from '../../store/site-process/selectors';

function ProductPage() {
  const id = useParams().id as string;
  const isReviewFormShown = useAppSelector(getReviewFormShown);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <h1 className="visually-hidden">Карточка товара</h1>
        <BackLink />
        <Product id={id} />
        {isReviewFormShown && <ReviewForm id={id}/>}
        <ReviewsContent id={id} />
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;
