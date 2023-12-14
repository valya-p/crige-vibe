import {createSlice} from '@reduxjs/toolkit'
import { trackFetch } from '../services/musicService'

const initialState = {
    data: null,
    isLoading: false,
    error: null,
    isPlaying: false,
};

const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        pause: (state) => {
            state.isPlaying = false
        },
    },
    extraReducers: {
        [trackFetch.pending]: (state) => {
            state.isLoading = true
            state.isPlaying = false
            state.error = null
        },
        [trackFetch.fulfilled]: (state, { payload }) => {
            if (payload !== undefined) {
                state.data = payload
            }
            state.isLoading = false
            state.isPlaying = true
        },
        [trackFetch.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        },
    },
});


export const {pause} = trackSlice.actions
export default trackSlice.reducer
