import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { workoutApi } from '../api/api';
import authReducer from './slices/authSlice';
import loadingReducer from './slices/loadingSlice';
import selectedWorkoutReducer from './slices/selectedWorkoutSlice'
import userCoursesReducer from './slices/userCoursesSlice';
import workoutsReducer from './slices/workoutsSlice';
import selectedTrainingReducer from './slices/selectedTrainingSlice';

export const store = configureStore({
  reducer: {
    [workoutApi.reducerPath]: workoutApi.reducer,
    auth: authReducer,
    loading: loadingReducer,
    selectedWorkout: selectedWorkoutReducer,
    userCourses: userCoursesReducer,
    workouts: workoutsReducer,
    selectedTraining: selectedTrainingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(workoutApi.middleware),
});

setupListeners(store.dispatch);