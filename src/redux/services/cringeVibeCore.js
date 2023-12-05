import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cringeCoreApi = createApi({
  reducerPath: 'cringeCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.0.105:8000/api/',
  }),
  endpoints: (builder) => ({
    getCharts: builder.query({ query: ({ limit, offset }) => `charts?limit=${limit}&offset=${offset}` }),
  }),
});

export const {
  useGetChartsQuery,
} = cringeCoreApi;
