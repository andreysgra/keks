import Map from '../map/map';
import {Shops} from '../../const';
import MapAddress from '../map-address/map-address';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getShopType} from '../../store/site-process/selectors';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useState} from 'react';
import {TShopPoint, TShopType} from '../../types/shop';
import {setShopType} from '../../store/site-process/slice';

function MapContent() {
  const shopType = useAppSelector(getShopType);
  const dispatch = useAppDispatch();

  const [shopPoint, setShopPoint] = useState<TShopPoint>({
    location: Shops[shopType].location,
    markerUrl: Shops[shopType].markerUrl
  });

  const handleMapAddressChange = (type: TShopType) => {
    const {location, markerUrl} = Shops[type];

    dispatch(setShopType(type));
    setShopPoint({location, markerUrl});
  };

  return (
    <section className="map">
      <div className="container">
        <h2 className="map__title">адреса</h2>
        <Map shopPoint={shopPoint} />
        <ul className="map__addresses">
          {Object.entries(Shops).map(([type, shop], index) =>
            (
              <MapAddress
                key={type}
                shop={shop}
                index={index}
                isChecked={type === shopType}
                onChange={() => handleMapAddressChange(type)}
              />
            )
          )}
        </ul>
      </div>
    </section>
  );
}

export default MapContent;
