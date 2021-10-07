import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from './slices/signUp';

export const store = configureStore({
  reducer: { login: signUpSlice },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
