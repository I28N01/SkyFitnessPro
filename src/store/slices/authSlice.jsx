import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: false,
  reducers: {
    setIsAuthenticated: (state, action) => action.payload,
  },
});

export const { setIsAuthenticated } = authSlice.actions;

export default authSlice.reducer;