import React from 'react';
import S from './Progress.module.css';

const Progress = () => {
  return (
    <div className={S.Body}>
      <h1>Мой прогресс</h1>
      <div className={S.ProgressBox}>
        <p className={S.ProgressText}>Сколько раз вы сделали наклоны вперед?</p>
        <input className={S.ProgressInput} type="number" />
      </div>
      <div className={S.ProgressBox}>
        <p className={S.ProgressText}>Сколько раз вы сделали наклоны назад?</p>
        <input className={S.ProgressInput} type="number" />
      </div>

      <div className={S.ProgressBox}>
        <p className={S.ProgressText}>
          Сколько раз вы сделали поднятие ног, согнутых в коленях?
        </p>
        <input className={S.ProgressInput} type="number" />
      </div>

      <button className={S.Button}>Отправить</button>
    </div>
  );
};

export default Progress;
