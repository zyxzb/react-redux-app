import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

interface DarkModeState {
  isDarkMode: boolean;
}

const initialState: DarkModeState = {
  isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleDarkMode, setDarkMode } = darkModeSlice.actions;

export const selectDarkMode = (state: RootState) => state.darkMode.isDarkMode;

export default darkModeSlice.reducer;
