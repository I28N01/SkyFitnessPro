import S from './ChooseWorkout.module.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkouts } from '../../../store/slices/workoutsSlice';
import { useLocation, useNavigate } from 'react-router-dom';

function Workouts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workouts);

  const location = useLocation(); 
  const currentPath = location.pathname.split('/'); 
  const currentCourse = currentPath.pop() || currentPath.pop(); 

  useEffect(() => {
    dispatch(fetchWorkouts(currentCourse));
  }, [dispatch, currentCourse]);

  function handleClick(index) {
    navigate(`/training/${index}`);
    console.log(index);
  }

  const parts = useLocation().pathname.split('/'); // Захватываем текущий URL
  const course = parts.pop() || parts.pop(); // Вырезаем последнее значание URL


  return (
    <div>
      <div className={S.container}>
        <div className={S.wrapper}>
          <h3 className={S.title}>Выберите тренировку</h3>
          <div className={S.workoutList}>
            {workouts.map((workout, index) => (
              <div
                key={index}
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
