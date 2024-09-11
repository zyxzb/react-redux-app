import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './features/users/usersSlice';
import filterReducer from './features/filter/filterSlice';
import darkModeSlice from './features/darkMode/darkModeSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filters: filterReducer,
    darkMode: darkModeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
