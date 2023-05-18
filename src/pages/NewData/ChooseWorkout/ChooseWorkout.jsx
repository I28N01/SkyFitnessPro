import S from './ChooseWorkout.module.scss';
import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom';

function Workouts() {
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState([]);
  // const [isActive, setIsActive] = useState([]);

  function handleClick(index) {
    navigate(`/training/${index}`);
    console.log(index);
  }

  const parts = useLocation().pathname.split('/'); // Захватываем текущий URL
  const course = parts.pop() || parts.pop(); // Вырезаем последнее значание URL

  useEffect(() => {
    fetch(
      'https://fitness-587c7-default-rtdb.europe-west1.firebasedatabase.app/courses.json'
    )
      .then((response) => response.json())
      .then((data) => {
        const workoutsData = Object.values(data[course].workout); // Преобразование объекта данных в массив значений
        setWorkouts(workoutsData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className={S.container}>
        <div className={S.wrapper}>
          <h3 className={S.title}>Выберите тренировку</h3>
          <div className={S.workoutList}>
            {workouts.map((workout) => (
              <div
                key={workout.id}
                className={S.singleWorkout}
                onClick={() => handleClick(workout._id)}
              >
                <p className={S.singleWorkout__title}>{workout.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
