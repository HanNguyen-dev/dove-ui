import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Job } from './domain/model/Job';

export const jobApi = createApi({
  reducerPath: 'jobApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/jobs' }),
  endpoints: (builder) => ({
    getJobs: builder.query<Job[], void>({
      query: () => ``,
    }),
  }),
});

export const { useGetJobsQuery } = jobApi;