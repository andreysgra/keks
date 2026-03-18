import classNames from 'classnames';

type ShowMoreButtonProps = {
  isShowMore?: boolean;
  isComments?: boolean;
  onClick: () => void;
}

function ShowMoreButton({isShowMore, isComments, onClick}: ShowMoreButtonProps) {
  const handleButtonClick = () => window.scrollTo({top: 0, behavior: 'smooth'});

  return (
    isShowMore ? (
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
