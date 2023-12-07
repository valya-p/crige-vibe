import {createSlice} from '@reduxjs/toolkit'
import {userLogin, userRefresh} from '../services/authService'
import {jwtDecode} from "jwt-decode";

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null
const userInfo = userToken !== null ? jwtDecode(userToken).subject : null

const initialState = {
    loading: false,
    userInfo: userInfo,
    userToken: userToken,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken') // delete token from storage
            state.loading = false
            state.userInfo = null
            state.userToken = null
        },
        setCredentials: (state, {payload}) => {
            state.userInfo = payload
        },
    },
    extraReducers: {
        // login user
        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, {payload}) => {
            state.loading = false
            const decoded = jwtDecode(payload)
            state.userInfo = decoded.subject
            state.userToken = payload
        },
        [userLogin.rejected]: (state, {payload}) => {
            state.loading = false
            state.error = payload
        },
        [userRefresh.pending]: (state) => {
            state.error = null
        },
        [userRefresh.fulfilled]: (state, {payload}) => {
            const decoded = jwtDecode(payload)
            state.userInfo = decoded.subject
            state.userToken = payload
        },
        [userRefresh.rejected]: (state, {payload}) => {
            state.error = payload
            authSlice.caseReducers.logout(state)
        },
    },
})

export const {logout, setCredentials} = authSlice.actions

export default authSlice.reducer