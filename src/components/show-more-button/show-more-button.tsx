import classNames from 'classnames';

type ShowMoreButtonProps = {
  isShowed?: boolean;
  isComments?: boolean;
  onClick: () => void;
}

function ShowMoreButton({isShowed, isComments, onClick}: ShowMoreButtonProps) {
  const handleButtonClick = () => window.scrollTo({top: 0, behavior: 'smooth'});

  return (
    isShowed ? (
      <button
        className={classNames('btn btn--second', {'comments__button': isComments})}
        type="button"
        onClick={onClick}
      >
        Показать еще
      </button>) : (
      <button
        className={classNames('btn btn--second', {'comments__button': isComments})}
        type="button"
        onClick={handleButtonClick}
      >
          В начало
      </button>
    )
  );
}

export default ShowMoreButton;
