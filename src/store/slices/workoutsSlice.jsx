import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Асинхронное действие для получения данных тренировок
export const fetchWorkouts = createAsyncThunk('workouts/fetchWorkouts', async (course) => {
  const response = await fetch(`https://fitness-587c7-default-rtdb.europe-west1.firebasedatabase.app/courses.json`);
  const data = await response.json();
  return Object.values(data[course].workout);
});

export const workoutsSlice = createSlice({
  name: 'workouts',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWorkouts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default workoutsSlice.reducer;