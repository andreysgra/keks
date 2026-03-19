import {FormEvent, useState} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {registerUser} from '../../store/user/api-actions';
import {TUserRegistration} from '../../types/user';
import {ErrorMessage, VALID_EMAIL_PATTERN, VALID_NAME_PATTERN, VALID_PASSWORD_PATTERN} from '../../const';
import classNames from 'classnames';
import {validateAvatarFile} from '../../utils/utils';

function SignUpForm() {
  const [isValueValid, setIsValueValid] = useState({name: true, email: true, password: true, avatar: true});
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useAppDispatch();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = Object.fromEntries(new FormData(evt.currentTarget)) as TUserRegistration;

    if (!formData.name.match(VALID_NAME_PATTERN)) {
      setErrorMessage(ErrorMessage.Name);
      setIsValueValid({name: false, email: true, password: true, avatar: true});

      return;
    }

    if (!formData.email.match(VALID_EMAIL_PATTERN)) {
      setErrorMessage(ErrorMessage.Email);
      setIsValueValid({name: true, email: false, password: true, avatar: true});

      return;
    }

    if (!formData.password.match(VALID_PASSWORD_PATTERN)) {
      setErrorMessage(ErrorMessage.Password);
      setIsValueValid({name: true, email: true, password: false, avatar: true});

      return;
    }

    if (!validateAvatarFile(formData.avatar as File)) {
      setErrorMessage(ErrorMessage.Avatar);
      setIsValueValid({name: true, email: true, password: true, avatar: false});

      return;
    }

    dispatch(registerUser(formData));
  };

  const handleFormChange = ()=> {
    setIsValueValid({name: true, email: true, password: true, avatar: true});
  };

  return (
    <div className="register-page__form">
      <form action="#" method="post" autoComplete="off" onSubmit={handleFormSubmit} noValidate>
        <div className="register-page__fields">
          <div className={classNames('custom-input register-page__field', {'is-invalid': !isValueValid.name})}>
            <label>
              <span className={classNames(
                {'custom-input__label': isValueValid.name},
                {'custom-input__message': !isValueValid.name}
              )}
              >
                {isValueValid.name ? 'Введите ваше имя' : errorMessage}
              </span>
              <input
                type="text"
                name="name"
                placeholder="Имя"
                required
                onChange={handleFormChange}
              />
            </label>
          </div>
          <div className={classNames('custom-input register-page__field', {'is-invalid': !isValueValid.email})}>
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
          <div className={classNames('custom-input register-page__field', {'is-invalid': !isValueValid.password})}>
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
          <div className={classNames('custom-input register-page__field', {'is-invalid': !isValueValid.avatar})}>
            <label>
              <span className={classNames(
                {'custom-input__label': isValueValid.avatar},
                {'custom-input__message': !isValueValid.avatar}
              )}
              >
                {isValueValid.avatar ? 'Загрузите ваш аватар' : errorMessage}
              </span>
              <input
                type="file"
                name="avatar"
                data-text="Аватар"
                accept="image/jpeg, image/png"
                onChange={handleFormChange}
              />
            </label>
          </div>
        </div>
        <button className="btn register-page__btn btn--large" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
