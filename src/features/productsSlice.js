import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue, dispatch }) => {
    const result = await axios.get('https://fakestoreapi.com/products?limit=8');
    dispatch(setProducts(result.data));
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: false,
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state) => {
      state.loading = false;
      state.error = false;
    },
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.error]: (state) => {
      state.error = true;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
