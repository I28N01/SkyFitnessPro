import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import React from 'react';
import S from './Login.module.scss';
// import LoginButton from '../../components/LoginButton/LoginButton';
import logo from '../../img/logo.png';

const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const navigate = useNavigate()

  // const handleEmailChange = ({ target }) => {
  //     setEmail(target.value)
  // }

  // const handlePasswordChange = ({ target }) => {
  //     setPassword(target.value)
  // }

  const handleSignup = () => {
      navigate('/Signup')
  }

  return (
    <div className={S.container}>
      <div className={S.formWrapper}>
        <form className={S.form}>
          <img className={S.logo} src={logo} alt="logo" />
          <input className={S.input} placeholder="Логин" type="text" />
          <input className={S.input} placeholder="Пароль" type="password" />
          <button className={S.loginButton}> Войти</button>
          <button className={S.signupButton} onClick={handleSignup} type="button">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
