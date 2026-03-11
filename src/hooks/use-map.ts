import {MutableRefObject, useEffect, useRef, useState} from 'react';
import {Map, TileLayer} from 'leaflet';
import {TShopPoint} from '../types/shop';
import {MAP_DEFAULT_ZOOM, MAP_TILE_LAYER_ATTRIBUTION, MAP_TILE_LAYER_URL} from '../const';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, shopPoint: TShopPoint): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  const {location: [latitude, longitude]} = shopPoint;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const mapInstance = new Map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude
        },
        zoom: MAP_DEFAULT_ZOOM
      });

      const mapLayer = new TileLayer(
        MAP_TILE_LAYER_URL,
        {
          attribution: MAP_TILE_LAYER_ATTRIBUTION
        }
      );

      mapInstance.addLayer(mapLayer);

      setMap(mapInstance);

      isRenderedRef.current = true;
    }
  }, [mapRef, latitude, longitude]);

  return map;
}

export default useMap;
