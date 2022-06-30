import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, { rejectWithValue, dispatch }) => {
    const result = await axios.get('https://fakestoreapi.com/products?limit=8');
    dispatch(setCategories(result.data));
  },
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    loading: false,
    error: false,
  },
  reducers: {
    setCategories(state, action) {
      action.payload.forEach((item) => {
        !state.categories.includes(item.category) && state.categories.push(item.category);
      });
    },
  },
  extraReducers: {
    [getCategories.fulfilled]: (state) => {
      state.loading = false;
      state.error = false;
    },
    [getCategories.pending]: (state) => {
      state.loading = true;
    },
    [getCategories.rejected]: (state) => {
      state.error = true;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
