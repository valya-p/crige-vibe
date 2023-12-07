import {configureStore} from '@reduxjs/toolkit';
import track from './slices/trackSlice';
import {cringeCoreApi} from './services/cringeVibeCore';
import auth from './slices/authSlice'

export const store = configureStore({
    reducer: {
        track,
        [cringeCoreApi.reducerPath]: cringeCoreApi.reducer,
        auth,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cringeCoreApi.middleware),
});
