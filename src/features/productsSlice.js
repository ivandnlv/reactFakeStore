import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue, dispatch }) => {
    const result = await axios.get('https://fakestoreapi.com/products');
    dispatch(setProducts(result.data));
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    productsFiltred: [],
    loading: false,
    error: false,
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    filterProducts(state, action) {
      action.payload
        ? (state.productsFiltred = state.products.filter(
            (item) => item.category === action.payload,
          ))
        : (state.productsFiltred = []);
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

export const { setProducts, filterProducts } = productsSlice.actions;
export default productsSlice.reducer;
