import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const workoutApi = createApi({
  reducerPath: 'workoutApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fitness-587c7-default-rtdb.europe-west1.firebasedatabase.app' }),
  endpoints: (builder) => ({
    getWorkoutById: builder.query({
      query: (id) => `courses/${id}.json`,
    }),
  }),
});

export const { useGetWorkoutByIdQuery } = workoutApi;