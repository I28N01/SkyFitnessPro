import S from './ChooseWorkout.module.scss';
import React from 'react';
import { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
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

  useEffect(() => {
    fetch(
      'https://fitness-587c7-default-rtdb.europe-west1.firebasedatabase.app/workouts.json'
    )
      .then((response) => response.json())
      .then((data) => {
        const workoutsData = Object.values(data); // Преобразование объекта данных в массив значений
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
                className={`${S.singleWorkout} ${
                  isActive.includes(workout) && S.singleWorkout_active
                }`}
                onClick={() => handleClick(workout)}
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
