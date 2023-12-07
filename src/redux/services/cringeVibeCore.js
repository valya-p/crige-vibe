import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userRefresh } from './authService';

const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/`,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const { userToken } = getState().auth
      if (userToken) {
        headers.set("Authorization", `Bearer ${userToken}`)
      }
      return headers
    }
  }
);

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result?.error?.status === 401) {
    await api.dispatch(userRefresh())
    const { error } = api.getState().auth 
    if (error === null) {
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}

export const cringeCoreApi = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: 'cringeCoreApi',
  endpoints: (builder) => ({
    getCharts: builder.query({ query: ({ limit, offset }) => `charts?limit=${limit}&offset=${offset}` }),
  }),
});

export const {
  useGetChartsQuery,
} = cringeCoreApi;
