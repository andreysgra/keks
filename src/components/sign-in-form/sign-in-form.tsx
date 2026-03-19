import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {FormEvent, useState} from 'react';
import {TUserAuth} from '../../types/user';
import {ErrorMessage, VALID_EMAIL_PATTERN, VALID_PASSWORD_PATTERN} from '../../const';
import {loginUser} from '../../store/user/api-actions';
import classNames from 'classnames';

function SignInForm() {
  const [isValueValid, setIsValueValid] = useState({email: true, password: true});
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useAppDispatch();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = Object.fromEntries(new FormData(evt.currentTarget)) as TUserAuth;

    if (!formData.email.match(VALID_EMAIL_PATTERN)) {
      setErrorMessage(ErrorMessage.Email);
      setIsValueValid({email: false, password: true});

      return;
    }

    if (!formData.password.match(VALID_PASSWORD_PATTERN)) {
      setErrorMessage(ErrorMessage.Password);
      setIsValueValid({email: true, password: false});

      return;
    }

    dispatch(loginUser(formData));
  };

  const handleFormChange = ()=> {
    setIsValueValid({email: true, password: true});
  };

  return (
    <div className="login-page__form">
      <form action="#" method="post" autoComplete="off" onSubmit={handleFormSubmit} noValidate>
        <div className="login-page__fields">
          <div className={classNames('custom-input login-page__field', {'is-invalid': !isValueValid.email})}>
            <label>
              <span className={classNames(
                {'custom-input__label': isValueValid.email},
                {'custom-input__message': !isValueValid.email}
              )}
              >
                {isValueValid.email ? 'Введите вашу почту' : errorMessage}
              </span>
              <input
                type="email"
                name="email"
                placeholder="Почта"
                required
                onChange={handleFormChange}
              />
            </label>
          </div>
          <div className={classNames('custom-input login-page__field', {'is-invalid': !isValueValid.password})}>
            <label>
              <span className={classNames(
                {'custom-input__label': isValueValid.password},
                {'custom-input__message': !isValueValid.password}
              )}
              >
                {isValueValid.password ? 'Введите ваш пароль' : errorMessage}
              </span>
              <input
                type="password"
                name="password"
                placeholder="Пароль"
                required
                onChange={handleFormChange}
              />
            </label>
          </div>
        </div>
        <button className="btn login-page__btn btn--large" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default SignInForm;

