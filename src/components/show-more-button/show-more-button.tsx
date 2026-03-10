type ShowMoreButtonProps = {
  onClick: () => void;
}

function ShowMoreButton({onClick}: ShowMoreButtonProps) {
  return (
    <div className="catalog__button-wrapper">
      <button className="btn btn--second" type="button" onClick={onClick}>
        Показать еще
      </button>
    </div>
  );
}

export default ShowMoreButton;
