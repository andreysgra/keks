import {TShop} from '../../types/shop';

type MapAddressProps = {
  shop: TShop;
  index: number;
  isChecked: boolean;
  onChange: () => void;
}

function MapAddress({shop, index, isChecked, onChange}: MapAddressProps) {
  const {name, address} = shop;

  return (
    <li className="map__address">
      <div className="custom-toggle custom-toggle--radio custom-toggle--address">
        <input
          type="radio"
          defaultValue={`user-agreement-${index}`}
          id={`user-agreement-${index}`}
          name="user-agreement"
          checked={isChecked}
          onChange={onChange}
        />
        <label
          className="custom-toggle__label"
          htmlFor={`user-agreement-${index}`}
        >
          {name}
        </label>
        <address className="custom-toggle__address">
          {address}
          <svg
            className="custom-toggle__icon"
            width={26}
            height={24}
            aria-hidden="true"
          >
            <use xlinkHref="#icon-keks-footprint" />
          </svg>
        </address>
      </div>
    </li>
  );
}

export default MapAddress;
