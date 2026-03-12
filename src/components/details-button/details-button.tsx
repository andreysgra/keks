type DetailsButtonProps = {
  onClick: () => void;
}

function DetailsButton({onClick}: DetailsButtonProps) {
  return (
    <button className="item-details__more" onClick={onClick}>
      <span className="visually-hidden">Читать полностью</span>
      <svg width={27} height={17} aria-hidden="true">
        <use xlinkHref="#icon-more"/>
      </svg>
    </button>
  );
}

export default DetailsButton;
