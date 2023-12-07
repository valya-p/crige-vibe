import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const config = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
}

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ code }, { rejectWithValue }) => {
    console.log(code)
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/oauth/token`,
        { code },
        config
      )
      localStorage.setItem('userToken', data.access_token)

      return data.access_token
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.detail) {
        return rejectWithValue(error.response.data.detail)
      } else {
        return rejectWithValue(error.detail)
      }
    }
  }
)

export const userRefresh = createAsyncThunk(
  'auth/refresh',
  async (_ , { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON

      const { data } = await axios.post(
       `${import.meta.env.VITE_BACKEND_URL}/api/oauth/token/refresh`,
       {},
        config,
    )

      // store user's token in local storage
      localStorage.setItem('userToken', data.access_token)

      return data.access_token
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.detail) {
        return rejectWithValue(error.response.data.detail)
      } else {
        return rejectWithValue(error.detail)
      }
    }
  }
)