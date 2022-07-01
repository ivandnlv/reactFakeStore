import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue, dispatch }) => {
    const result = await axios.get('https://fakestoreapi.com/products');
    dispatch(setProducts(result.data));
  },
);

export const getAllProductsCount = createAsyncThunk(
  'products/getAllProductsCount',
  async (_, { rejectWithValue, dispatch }) => {
    const result = await axios.get('https://fakestoreapi.com/products');
    dispatch(setAllProductsCount(result.data.length));
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    firstNumber: 0,
    lastNumber: 8,
    allProductsCount: 0,
    productsFiltred: [],
    loading: false,
    error: false,
  },
  reducers: {
    setAllProductsCount(state, action) {
      state.allProductsCount = action.payload;
    },
    setFirstNumber(state, action) {
      state.firstNumber = action.payload;
    },
    setLastNumber(state, action) {
      state.lastNumber = action.payload;
    },
    setProducts(state, action) {
      console.log(state.firstNumber);
      console.log(state.lastNumber);
      state.products = action.payload.slice(state.firstNumber, state.lastNumber);
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

export const { setProducts, filterProducts, setFirstNumber, setLastNumber, setAllProductsCount } =
  productsSlice.actions;
export default productsSlice.reducer;
