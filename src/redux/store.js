import { configureStore } from '@reduxjs/toolkit';
import track from './slices/trackSlice';
import { cringeCoreApi } from './services/cringeVibeCore'; 

export const store = configureStore({
  reducer: {
    track,
    [cringeCoreApi.reducerPath]: cringeCoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cringeCoreApi.middleware),
});
