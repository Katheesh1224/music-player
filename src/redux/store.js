import { configureStore } from '@reduxjs/toolkit';

// Import slices
import { shazamCoreApi } from './services/shazamCore';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer, // API reducer
    player: playerReducer, // Player reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware), // Add API middleware
});

export default store;
