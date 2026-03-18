import {useEffect} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getActiveCategory, getIsCategoriesFailed} from '../../store/category/selectors';
import {fetchCategories} from '../../store/category/api-actions';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import CatalogFilterTypes from '../catalog-filter-types/catalog-filter-types';
import CatalogFilterCategories from '../catalog-filter-categories/catalog-filter-categories';

function CatalogFilters() {
  const activeCategory = useAppSelector(getActiveCategory);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const isCategoriesFailed = useAppSelector(getIsCategoriesFailed);

  return (
    <div className="catalog-filter">
      <div className="container">
        {!isCategoriesFailed && <CatalogFilterCategories />}
        {activeCategory && <CatalogFilterTypes />}
      </div>
    </div>
  );
}

export default CatalogFilters;
