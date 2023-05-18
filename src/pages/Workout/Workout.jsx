import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetWorkoutByIdQuery } from '../../api/api';
import S from './Workout.module.css';

function Workout() {
  const { id } = useParams();
  const { data: workoutData, isLoading } = useGetWorkoutByIdQuery(id);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  return (
    <div className={S.body}>
      <header className={S.header}>
        <img className={S.logo} src="./img/logo.svg"></img>
        <div className={S.name}>Сергей</div>
      </header>
      <div className={S.main}>
        <h1 className={S.h1}>{workoutData.title}</h1>
        <h3 className={S.h3}>{workoutData.subtitle}</h3>
        <video className={S.video} src={workoutData.videoUrl}></video>
      </div>
      <div className={S.footer}>
        <div className={S.leftMenu}>
          <p className={S.NameDrill}>Упражнения</p>

          <div className={S.Drill}>
            <p>Наклон вперед (10 повторений)</p>
            <p>Наклон назад (10 повторений) </p>
            <p>
              Поднятие ног,согнутых в коленях <wbr></wbr>(5 повторений){' '}
            </p>
            <button className={S.button}>Заполнить свой прогресс</button>
          </div>
        </div>

        <div className={S.rightMenu}>
          <h3>Мой прогресс по тренеровке 2:</h3>
          <p>Наклоны вперед</p>
          <p>Наклоны назад</p>
          <p>Поднятие ног,согнутых в коленях</p>
        </div>
      </div>
    </div>
  );
}

export default Workout;
