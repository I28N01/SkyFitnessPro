import S from './ChooseWorkout.module.scss';
import { Workout } from './Workout';
import React from 'react';
import { useState } from 'react';

const ChooseWorkout = () => {

  const [isActive, setIsActive] = useState([]);

  function handleClick(index) {
    const currentIndex = isActive.indexOf(index);
    const newIndexes = [...isActive];

    if (currentIndex === -1) {
      newIndexes.push(index);
    } else {
      newIndexes.splice(currentIndex, 1);
    }
    setIsActive(newIndexes);
  }

  return (
    <div className={S.container}>
      <div className={S.wrapper}>
        <h3 className={S.title}>Выберите тренировку</h3>
        <div className={S.workoutList}>
          {Workout.map((item, index) => (
            <div
              key={item.id}
              className={`${S.singleWorkout} ${isActive.includes(index) && S.singleWorkout_active}`}
              onClick={() => handleClick(index)}
            >
              <p className={S.singleWorkout__title}>{item.name}</p>
              <p className={S.singleWorkout__subTitle}>{item.programm}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseWorkout;
