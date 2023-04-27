import React from 'react';
import S from './credit_progres.module.css';

const CreditProgress = () => {
  return (
    <div className={S.body}>
      <p className={S.text}>Ваш прогресс засчитан!</p>

      <img className={S.hand} src={'./img/hand.svg'} />
    </div>
  );
};

export default CreditProgress;
