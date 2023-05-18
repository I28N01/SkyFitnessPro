import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userCourses: ['sw35tf', 'ab1c3f', 'trq4kl'], // тренировки по умолчанию
  };

const userCoursesSlice = createSlice({
  name: 'userCourses',
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.userCourses.push(action.payload);
    },
    removeCourse: (state, action) => {
      state.userCourses = state.userCourses.filter(courseId => courseId !== action.payload);
    },
  },
});

export const { addCourse, removeCourse } = userCoursesSlice.actions;

export default userCoursesSlice.reducer;