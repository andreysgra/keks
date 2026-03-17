import classNames from 'classnames';
import {ProductCategoryName} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getActiveCategory, getCategories} from '../../store/category/selectors';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {MouseEvent} from 'react';
import {TCategory} from '../../types/category';
import {setActiveCategory, setActiveCategoryTypes} from '../../store/category/slice';
import {TProductCategory} from '../../store/category/type';

function CatalogFilterFirst() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);
  const activeCategory = useAppSelector(getActiveCategory);

  const handleButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    const value = evt.currentTarget.value;
    const selectedCategory = ((activeCategory !== value) ? value : null) as TProductCategory;
    const currentCategory = categories.find(({category}) => category === selectedCategory) as TCategory;

    dispatch(setActiveCategory(selectedCategory));

    if (currentCategory) {
      dispatch(setActiveCategoryTypes(currentCategory.types));
    }
  };

  return (
    <div className="catalog-filter__first-level">
      <h3 className="catalog-filter__title catalog-filter__title--first-level">
        основы
      </h3>
      <ul className="catalog-filter__list catalog-filter__list--first-level">
        {categories.map(({category}) => (
          <li key={category} className="catalog-filter__item catalog-filter__item--first-level">
            <button
              className={
                classNames('btn btn--filter-first-level',
                  {'is-active': activeCategory === category})
              }
              type="button"
              value={category}
              onClick={handleButtonClick}
            >
              {ProductCategoryName[category]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogFilterFirst;
