import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import React from 'react';
import S from './Login.module.scss';
import logo from '../../img/logo.png';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../database/db'
import { AuthContext } from '../../context/authContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/Signup');
  };

  const { setAuth } = useContext(AuthContext)


  const loginButton = (email, password, e) => {
    e.preventDefault();
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Выполнен вход:', user);
        
        setAuth(true);
        localStorage.setItem('auth', 'true');

        navigate('/profile');
      })
      .catch((error) => {
        console.error('Ошибка входа:', error);
      });
  };

  return (
    <div className={S.container}>
      <div className={S.formWrapper}>
        <form className={S.form}>
          <img className={S.logo} src={logo} alt="logo" />
          <input className={S.input} placeholder="Email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input className={S.input} placeholder="Пароль"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className={S.loginButton} onClick={(e) => loginButton(email, password, e)}  type="button"> Войти</button>
          <button className={S.signupButton} onClick={handleSignup} type="button">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;