import S from './ChooseWorkout.module.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkouts } from '../../../store/slices/workoutsSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectTraining } from '../../../store/slices/selectedTrainingSlice';

function Workouts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const workouts = useSelector((state) => state.workouts.data);

  const location = useLocation();
  const currentPath = location.pathname.split('/');
  const currentCourse = currentPath.pop() || currentPath.pop();

  useEffect(() => {
    dispatch(fetchWorkouts(currentCourse));
  }, [dispatch, currentCourse]);

  function handleClick(id) {
    dispatch(selectTraining(id));
    navigate(`/training/${id}`);

    console.log(id);
  }

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
