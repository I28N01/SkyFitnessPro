import S from './Signup.module.scss';
import logo from '../../img/logo.png';
import React from 'react';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../database/db'
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validatePassword, setValidatePassword] = useState('');

  
  function register(email, password, validatePassword, e) {
    if (password !== validatePassword) {
      console.error('Пароли не совпадают');
      return;
    }

    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Регистрация успешна:', user);
        navigate('/login');

      })
      .catch((error) => {
        console.error('Ошибка регистрации:', error);
      });
  }

  return (
    <div className={S.container}>
      <div className={S.formWrapper}>
        <form className={S.form}>
          <img className={S.logo} src={logo} alt="logo" />
          <input className={S.input} 
            placeholder="Email"
            type="text"
            value={email} 
            onChange={(event) => setEmail(event.target.value)}
            />
          <input className={S.input} 
            placeholder="Пароль"
            type="password" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)}
            />
          <input
            className={S.input}
            placeholder="Повторите пароль"
            type="password"
            value={validatePassword} 
            onChange={(event) => setValidatePassword(event.target.value)}
          />
        <button
          className={S.signupButton}
          onClick={(e) => register(email, password, validatePassword, e)}
          type="button"
        >
          Зарегистрироваться
        </button>
        </form>
      </div>
    </div>
  );
};
export default Signup;