import {useEffect} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getActiveCategory} from '../../store/category/selectors';
import {fetchCategories} from '../../store/category/api-actions';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import CatalogFilterSecond from '../catalog-filter-second/catalog-filter-second';
import CatalogFilterFirst from '../catalog-filter-first/catalog-filter-first';

function CatalogFilters() {
  const activeCategory = useAppSelector(getActiveCategory);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="catalog-filter">
      <div className="container">
        <CatalogFilterFirst />
        {activeCategory && <CatalogFilterSecond />}
      </div>
    </div>
  );
}

export default CatalogFilters;
