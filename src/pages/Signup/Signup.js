import S from './Signup.module.scss';
import logo from '../../img/logo.png';

const Signup = () => {
    return (
        <div className={S.container}>
            <div className={S.formWrapper}>
                <form className={S.form}>
                    <img className={S.logo} src={logo} alt="logo" />
                    <input className={S.input}
                        placeholder="Логин"
                        type="text"
                    />
                    <input className={S.input}
                        placeholder="Пароль"
                        type="password"
                    />
                    <input className={S.input}
                        placeholder="Повторите пароль"
                        type="password"
                    />
                    <button className={S.signupButton} type="button">
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Signup;

