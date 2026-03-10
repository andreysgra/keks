type ShowMoreButtonProps = {
  isShowed?: boolean;
  onClick: () => void;
}

function ShowMoreButton({isShowed, onClick}: ShowMoreButtonProps) {
  const handleButtonClick = () => window.scrollTo({top: 0, behavior: 'smooth'});

  return (
    <div className="catalog__button-wrapper">
      {isShowed ? (
        <button className="btn btn--second" type="button" onClick={onClick}>
        Показать еще
        </button>) : (
        <button className="btn btn--second" type="button" onClick={handleButtonClick}>
          В начало
        </button>
      )}
    </div>
  );
}

export default ShowMoreButton;
