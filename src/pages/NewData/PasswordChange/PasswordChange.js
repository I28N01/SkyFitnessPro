import S from './PasswordChange.module.scss';
import React from 'react';
import logo from '../../../img/logo.png';

const PasswordChange = () => {
  return (
    <div className={S.container}>
      <div className={S.formWrapper}>
        <form className={S.form}>
          <img className={S.logo} src={logo} alt="logo" />
          <h3 className={S.subTitle}>Новый пароль:</h3>
          <input className={S.input} placeholder="Пароль" type="text" />
          <input
            className={S.input}
            placeholder="Новый пароль"
            type="password"
          />
          <button className={S.saveButton} type="button">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordChange;
