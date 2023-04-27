import S from './NameChange.module.scss';
import React from 'react';
import logo from '../../../img/logo.png';

const NameChange = () => {
  return (
    <div className={S.container}>
      <div className={S.formWrapper}>
        <form className={S.form}>
          <img className={S.logo} src={logo} alt="logo" />
          <h3 className={S.subTitle}>Новый логин:</h3>
          <input className={S.input} placeholder="Логин" type="text" />
          <button className={S.saveButton} type="button">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default NameChange;
