import {ProductTypeName} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getActiveCategory, getActiveTypes, getCategories} from '../../store/category/selectors';
import {ChangeEvent} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {setActiveTypes} from '../../store/category/slice';
import {TCategory} from '../../types/category';

function CatalogFilterSecond() {
  const activeCategoryTypes = useAppSelector(getActiveTypes);
  const activeCategory = useAppSelector(getActiveCategory);
  const categories = useAppSelector(getCategories);
  const {types} = categories.find(({category}) => category === activeCategory) as TCategory;

  const dispatch = useAppDispatch();

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(setActiveTypes(evt.currentTarget.value));
  };

  return (
    <div className="catalog-filter__second-level">
      <h3 className="catalog-filter__title catalog-filter__title--second-level">
        начинки
      </h3>
      <ul className="catalog-filter__list catalog-filter__list--second-level">
        {types?.map((type, index) => (
          <li key={type} className="catalog-filter__item catalog-filter__item--second-level">
            <div className="custom-toggle custom-toggle--checkbox">
              <input
                type="checkbox"
                value={type}
                id={`catalog-second-level-id-${index}`}
                name="catalog-second-level"
                onChange={handleInputChange}
                checked={activeCategoryTypes.includes(type)}
              />
              <label
                className="custom-toggle__label"
                htmlFor={`catalog-second-level-id-${index}`}
              >
                {ProductTypeName[type]}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogFilterSecond;
