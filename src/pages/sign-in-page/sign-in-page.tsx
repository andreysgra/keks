import SignInForm from '../../components/sign-in-form/sign-in-form';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function SignInPage() {
  return (
    <div className="wrapper">
      <main>
        <section className="login-page">
          <div className="login-page__header">
            <div className="login-page__img-wrap">
              <img
                className="login-page__img"
                src="img/svg/hero-keks.svg"
                width={727}
                height={569}
                alt="Картика кота."
              />
            </div>
          </div>
          <div className="login-page__content">
            <div className="login-page__inner">
              <h1 className="login-page__title">Вход</h1>
              <SignInForm />
              <p className="login-page__text-wrap">
                Ещё не зарегистрированы?{' '}
                <Link className="login-page__link" to={AppRoute.SignUp}>
                  Создайте
                </Link>{' '}
                аккаунт прямо сейчас.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignInPage;
