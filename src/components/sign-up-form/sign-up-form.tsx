import {FormEvent} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {registerUser} from '../../store/user/api-actions';
import {TUserRegistration} from '../../types/user';
import {VALID_NAME_PATTERN, VALID_PASSWORD_PATTERN} from '../../const';

function SignUpForm() {
  const dispatch = useAppDispatch();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = Object.fromEntries(new FormData(evt.currentTarget)) as TUserRegistration;

    if (!formData.name.match(VALID_NAME_PATTERN) || !formData.password.match(VALID_PASSWORD_PATTERN)) {
      return;
    }

    dispatch(registerUser({
      name: formData.name,
      email: formData.email,
      password: formData.password
    }));
  };

  return (
    <div className="register-page__form">
      <form action="#" method="post" autoComplete="off" onSubmit={handleFormSubmit}>
        <div className="register-page__fields">
          <div className="custom-input register-page__field">
            <label>
              <span className="custom-input__label">Введите ваше имя</span>
              <input
                type="text"
                name="name"
                placeholder="Имя"
                required
              />
            </label>
          </div>
          <div className="custom-input register-page__field">
            <label>
              <span className="custom-input__label">Введите вашу почту</span>
              <input
                type="email"
                name="email"
                placeholder="Почта"
                required
              />
            </label>
          </div>
          <div className="custom-input register-page__field">
            <label>
              <span className="custom-input__label">Введите ваш пароль</span>
              <input
                type="password"
                name="password"
                placeholder="Пароль"
                required
              />
            </label>
          </div>
          <div className="custom-input register-page__field">
            <label>
              <span className="custom-input__label">Загрузите ваш аватар</span>
              <input
                type="file"
                name="avatar"
                data-text="Аватар"
                accept="image/jpeg"
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
