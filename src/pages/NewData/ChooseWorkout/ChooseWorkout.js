import S from './ChooseWorkout.module.scss';
import { Workout } from './Workout';
import checked from './cheked.png';
import React from 'react';

const ChooseWorkout = () => {
  return (
    <div className={S.container}>
      <div className={S.wrapper}>
        <h3 className={S.title}>Выберите тренировку</h3>
        <div className={S.workoutList}>
          {/* пример */}
          <div className={S.singleWorkout_active}>
            <img className={S.checked} src={checked} alt="logo" />
            <p className={S.singleWorkout_active__title}>Утренняя практика</p>
            <p className={S.singleWorkout_active__subTitle}>
              Йога на каждый день / 1 день
            </p>
          </div>
          {/* конец примера */}
          {Workout.map((i) => (
            <div className={S.singleWorkout} key={i.id}>
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
