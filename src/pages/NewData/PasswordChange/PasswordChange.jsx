import S from './PasswordChange.module.scss';
import React from 'react';
import logo from '../../../img/logo.png';
import { getAuth, updatePassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PasswordChange = () => {
  const [password, setPassword] = useState('');
  const [validatePassword, setValidatePassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  const handleSave = () => {
    console.log(password);

    if (password === validatePassword) {
      updatePassword(user, password)
        .then(() => {
          console.log('пароль изменен');
        })
        .catch((error) => {
          console.error('Ошибка:', error);
        });

      navigate('/');
    } else {
      console.error('Пароли не совпадают');
      return;
    }
  };

  return (
    <div className={S.container}>
      <div className={S.formWrapper}>
        <form className={S.form}>
          <img className={S.logo} src={logo} alt="logo" />
          <h3 className={S.subTitle}>Новый пароль:</h3>
          <input
            className={S.input}
            placeholder="Новый пароль"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            className={S.input}
            placeholder="Повторите пароль"
            type="password"
            onChange={(event) => setValidatePassword(event.target.value)}
          />
          <button className={S.saveButton} onClick={handleSave} type="button">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordChange;
