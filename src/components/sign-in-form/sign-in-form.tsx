import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {FormEvent} from 'react';
import {TUserAuth} from '../../types/user';
import {VALID_PASSWORD_PATTERN} from '../../const';
import {loginUser} from '../../store/user/api-actions';

function SignInForm() {
  const dispatch = useAppDispatch();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = Object.fromEntries(new FormData(evt.currentTarget)) as TUserAuth;

    if (!formData.password.match(VALID_PASSWORD_PATTERN)) {
      return;
    }

    dispatch(loginUser({
      email: formData.email,
      password: formData.password
    }));
  };

  return (
    <div className="login-page__form">
      <form action="#" method="post" autoComplete="off" onSubmit={handleFormSubmit}>
        <div className="login-page__fields">
          <div className="custom-input login-page__field">
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
          <div className="custom-input login-page__field">
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
        </div>
        <button className="btn login-page__btn btn--large" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default SignInForm;

