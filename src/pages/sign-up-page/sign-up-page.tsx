import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import SignUpForm from '../../components/sign-up-form/sign-up-form';

function SignUpPage() {
  return (
    <div className="wrapper">
      <main>
        <section className="register-page">
          <div className="register-page__header">
            <div className="register-page__img-wrap">
              <img
                className="register-page__img"
                src="/img/svg/hero-keks.svg"
                width={727}
                height={569}
                alt="Картинка кота."
              />
            </div>
          </div>
          <div className="register-page__content">
            <div className="register-page__inner">
              <h1 className="register-page__title">Регистрация</h1>
              <SignUpForm />
              <p className="register-page__text-wrap">
                Уже зарегистрированы?{' '}
                <Link className="register-page__link" to={AppRoute.SignIn}>
                  Войдите
                </Link>{' '}
                в свой аккаунт.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignUpPage;
