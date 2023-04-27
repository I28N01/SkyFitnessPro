import S from './ChooseWorkout.module.scss';
import { Workout } from './Workout';
import React from 'react';
import { useState } from 'react';

const ChooseWorkout = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
    if (isActive) {
      event.currentTarget.className = `${S.singleWorkout_active}`;
    } else {
      event.currentTarget.className = `${S.singleWorkout}`;
    }
  };

  return (
    <div className={S.container}>
      <div className={S.wrapper}>
        <h3 className={S.title}>Выберите тренировку</h3>
        <div className={S.workoutList}>
          {Workout.map((i) => (
            <div className={S.singleWorkout} key={i.id} onClick={handleClick}>
              <p className={S.singleWorkout__title}>{i.name}</p>
              <p className={S.singleWorkout__subTitle}>{i.programm}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseWorkout;
