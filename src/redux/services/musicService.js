import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'

export const nextTrack = createAsyncThunk(
    'track/next',
    async (_, { getState, dispatch }) => {
        const state = getState().trackSlice
        let currentTrackIndex = state.trackIds.indexOf(state.data.id)
        if (currentTrackIndex !== state.trackIds.length - 1) currentTrackIndex++
        else currentTrackIndex = 0
        dispatch(trackFetch({trackId: state.trackIds[currentTrackIndex]}))

    }
)

export const prevTrack = createAsyncThunk(
    'track/prev',
    async (_, { getState, dispatch }) => {
        const state = getState().trackSlice
        let currentTrackIndex = state.trackIds.indexOf(state.data.id)
        if (currentTrackIndex === 0) currentTrackIndex = state.trackIds.length - 1
        else currentTrackIndex--
        dispatch(trackFetch({trackId: state.trackIds[currentTrackIndex]}))

    }
)

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