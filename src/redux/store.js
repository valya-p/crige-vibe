import {configureStore} from '@reduxjs/toolkit'
import {cringeCoreApi} from './services/cringeVibeCore'
import authSlice from './slices/authSlice'
import trackSlice from './slices/trackSlice'

export const store = configureStore({
    reducer: {
        [cringeCoreApi.reducerPath]: cringeCoreApi.reducer,
        authSlice,
        trackSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cringeCoreApi.middleware),
});
