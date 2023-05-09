import S from './NameChange.module.scss';
import React from 'react';
import logo from '../../../img/logo.png';
import { getAuth, updateEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NameChange = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();
  const handleSave = () => {
    console.log(email);
    updateEmail(auth.currentUser, email)
      .then(() => {
        console.log('Email изменен на:', email);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
    navigate('/');
  };

  return (
    <div className={S.container}>
      <div className={S.formWrapper}>
        <form className={S.form}>
          <img className={S.logo} src={logo} alt="logo" />
          <h3 className={S.subTitle}>Новый логин:</h3>
          <input
            className={S.input}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Логин"
            type="text"
          />
          <button className={S.saveButton} onClick={handleSave} type="button">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default NameChange;
