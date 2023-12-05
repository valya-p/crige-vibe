import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userRefresh } from './authService';

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/`,
});

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions)

//   if (result?.error?.originalStatus === 401) {
//     api.dispatch(userRefresh())
//   }
// }

export const cringeCoreApi = createApi({
  baseQuery: baseQuery,
  reducerPath: 'cringeCoreApi',
  endpoints: (builder) => ({
    getCharts: builder.query({ query: ({ limit, offset }) => `charts?limit=${limit}&offset=${offset}` }),
  }),
});

export const {
  useGetChartsQuery,
} = cringeCoreApi;
