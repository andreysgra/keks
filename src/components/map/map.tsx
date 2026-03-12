import {useEffect, useRef} from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import {Icon, Marker} from 'leaflet';
import {TShopPoint} from '../../types/shop';
import {MapIcon} from '../../const';

type MapProps = {
  shopPoint: TShopPoint;
}

function Map({shopPoint}: MapProps) {
  const mapRef = useRef(null);

  const map = useMap(mapRef, shopPoint);

  useEffect(() => {
    const {location: [latitude, longitude], markerUrl} = shopPoint;

    const defaultIcon = new Icon({
      iconUrl: markerUrl,
      iconSize: MapIcon.Size,
      iconAnchor: MapIcon.Anchor
    });

    const marker = new Marker({
      lat: latitude,
      lng: longitude
    });

    if (map) {
      marker.setIcon(defaultIcon).addTo(map);

      map.setView({lat: latitude, lng: longitude});
    }

    return () => {
      if (map) {
        map.removeLayer(marker);
      }
    };
  }, [map, shopPoint]);

  return <div className="map__wrapper" ref={mapRef} />;
}

export default Map;
