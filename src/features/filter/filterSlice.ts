import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FiltersState = {
  name: string;
  username: string;
  email: string;
  phone: string;
};

const initialState: FiltersState = {
  name: '',
  username: '',
  email: '',
  phone: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{ field: keyof FiltersState; value: string }>,
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetFilters(state) {
      state.name = '';
      state.username = '';
      state.email = '';
      state.phone = '';
    },
  },
});

export const { setFilter, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
