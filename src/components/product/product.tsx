import {getIsProductFailed, getIsProductLoading, getProduct} from '../../store/product/selectors';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useEffect, useState} from 'react';
import {fetchProduct} from '../../store/product/api-actions';
import Loader from '../loader/loader';
import {getFormattedNumber} from '../../utils/utils';
import Rating from '../rating/rating';
import {DESCRIPTION_MAX_LENGTH} from '../../const';
import DetailsButton from '../details-button/details-button';
import FavoritesButton from '../favorites-button/favorites-button';

type ProductProps = {
  id: string;
}

function Product({id}: ProductProps) {
  const product = useAppSelector(getProduct);
  const isProductLoading = useAppSelector(getIsProductLoading);
  const isProductFailed = useAppSelector(getIsProductFailed);

  const [isDescriptionLong, setDescriptionLong] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (product) {
      setDescriptionLong(product.description.length > DESCRIPTION_MAX_LENGTH);
    }
  }, [product]);

  if (isProductLoading) {
    return <Loader />;
  }

  if (isProductFailed || !product) {
    return ;
  }

  const {
    title,
    price,
    previewImage,
    previewImageWebp,
    description,
    isNew,
    weight,
    images,
    rating,
    reviewCount
  } = product;

  const shortDescription = description.slice(0, DESCRIPTION_MAX_LENGTH);

  const handleDetailsButtonClick = () => {
    setDescriptionLong((prevState) => !prevState);
  };

  return (
    <section className="item-details">
      <div className="container">
        <div className="item-details__wrapper">
          <div className="item-details__top-wrapper">
            <h2 className="item-details__name">{title}</h2>
            <span className="item-details__price">{getFormattedNumber(price)} р</span>
          </div>
          <div className="item-details__weight-wrapper">
            <span className="item-details__weight">{getFormattedNumber(weight)} грамм</span>
          </div>
          <div className="item-details__bottom-wrapper">
            <div className="item-details__image-wrapper">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${previewImageWebp}, ${previewImageWebp} 2x`}
                />
                <img
                  src={previewImage}
                  srcSet={`${images[0]} 2x`}
                  width={241}
                  height={245}
                  alt={title}
                />
              </picture>
              {isNew && <span className="item-details__label">Новинка</span>}
            </div>
            <div className="item-details__review-wrapper">
              <Rating rating={rating} reviewCount={reviewCount} isBig />
              <div className="item-details__text-wrapper">
                <span className="item-details__text">{isDescriptionLong ? shortDescription : description}</span>
                {isDescriptionLong && <DetailsButton onClick={handleDetailsButtonClick} />}
              </div>
              <div className="item-details__button-wrapper">
                <FavoritesButton id={id} />
                <button className="btn btn--second" type="button">
                  Оставить отзыв
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
