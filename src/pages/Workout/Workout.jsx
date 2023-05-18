import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import S from './Workout.module.css';

function Workout() {
  const selectedTraining = useSelector((state) => state.selectedTraining);
  const { data: workouts, status, error } = useSelector((state) => state.workouts);
  
  let workoutData;
  const navigate = useNavigate(); // используйте хук useNavigate
  
  if (status === 'loading') {
    return <div>Loading...</div>; 
  }
  
  if (status === 'succeeded') {
    workoutData = workouts.find((workout) => workout._id === selectedTraining);
    
    if (!workoutData) {
      return <div>Тренировка не найдена</div>;
    }

    return (
      <div className={S.body}>
        <header className={S.header}>
          <img className={S.logo} src="./img/logo.svg" alt="Logo"></img>
          <div className={S.name}>Сергей</div>
        </header>
        <div className={S.main}>
          <h1 className={S.h1}>{workoutData.name}</h1>
          <h3 className={S.h3}>{workoutData.name}</h3>
          <video className={S.video} src={workoutData.link} controls></video>
        </div>
        <div className={S.footer}>
          <div className={S.leftMenu}>
            <p className={S.NameDrill}>Упражнения</p>
  
            <div className={S.Drill}>
              {workoutData.training.map((training, index) => (
                <p key={index}>{training}</p>
              ))}
              <button 
                className={S.button} 
                onClick={() => navigate('/progress')} // добавьте обработчик событий onClick
              >
                Заполнить свой прогресс
              </button>
            </div>
          </div>
  
          <div className={S.rightMenu}>
            <h3>Мой прогресс по тренировке 2:</h3>
            {workoutData.training.map((training, index) => (
              <p key={index}>{training}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
}

export default Workout;