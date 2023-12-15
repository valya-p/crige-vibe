import {createSlice} from '@reduxjs/toolkit'
import {trackFetch} from '../services/musicService'

const initialState = {
    data: null,
    isLoading: false,
    error: null,
    isPlaying: false,
    duration: 0.0,
    progress: 0.0,
    durationText: '00:00',
    trackIds: [],
};

const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        pause: (state) => {
            state.isPlaying = false
        },
        disableLoading: (state) => {
            state.isLoading = false
        },
        setProgress: (state, {payload}) => {
            state.progress = payload.progress
            state.duration = payload.duration
            state.durationText = payload.durationText
        },
        saveTrackIds: (state, {payload}) => {
            state.trackIds = payload
        }
    },
    extraReducers: {
        [trackFetch.pending]: (state, {meta}) => {
            const {trackId} = meta.arg
            if (trackId !== state.data?.id) {
                state.isLoading = true
            }
            state.isPlaying = false
            state.error = null
        },
        [trackFetch.fulfilled]: (state, {payload}) => {
            if (payload !== undefined) {
                state.data = payload
                state.progress = 0.0
                state.duration = 0.0
                state.durationText = '00:00'
            }
            state.isPlaying = true
        },
        [trackFetch.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        },
    },
});


export const {pause, disableLoading, setProgress, saveTrackIds} = trackSlice.actions
export default trackSlice.reducer
