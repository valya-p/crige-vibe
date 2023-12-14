import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'

export const trackFetch = createAsyncThunk(
    'track',
    async ({ trackId }, { getState, rejectWithValue }) => {
        const track = getState().trackSlice.data
        if (track?.id === trackId) {
            return
        }
        try {
            const {data} = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/tracks/${trackId}`,
            )

            return data
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