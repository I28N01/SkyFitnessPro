import React from 'react';
import S from './credit_progres.module.css';
import Hand from './img/hand.svg'

const CreditProgress = () => {
  return (
    <div className={S.body}>
      <p className={S.text}>Ваш прогресс засчитан!</p>

      <img className={S.hand} src={Hand} />
    </div>
  );
};

export default CreditProgress;
