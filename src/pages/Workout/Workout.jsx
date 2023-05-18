import React from 'react';
import { useSelector } from 'react-redux';
import S from './Workout.module.css';

function Workout() {
  const selectedTraining = useSelector((state) => state.selectedTraining);
  const workouts = useSelector((state) => state.workouts);

  console.log('Selected Training:', selectedTraining);
  console.log('Workouts:', workouts);

  const workoutData = workouts.find((workout) => workout._id === selectedTraining);

  if (!workoutData) {
    return <div>Тренировка не найдена</div>;
  }

  let trainingData = workoutData.workout[selectedTraining];

  return (
    <div className={S.body}>
      <header className={S.header}>
        <img className={S.logo} src="./img/logo.svg" alt="Logo"></img>
        <div className={S.name}>Сергей</div>
      </header>
      <div className={S.main}>
        <h1 className={S.h1}>{workoutData.name}</h1>
        <h3 className={S.h3}>{trainingData.name}</h3>
        <video className={S.video} src={trainingData.link} controls></video>
      </div>
      <div className={S.footer}>
        <div className={S.leftMenu}>
          <p className={S.NameDrill}>Упражнения</p>

          <div className={S.Drill}>
            {trainingData.training.map((training, index) => (
              <p key={index}>{training}</p>
            ))}
            <button className={S.button}>Заполнить свой прогресс</button>
          </div>
        </div>

        <div className={S.rightMenu}>
          <h3>Мой прогресс по тренировке 2:</h3>
          {trainingData.training.map((training, index) => (
            <p key={index}>{training}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workout;