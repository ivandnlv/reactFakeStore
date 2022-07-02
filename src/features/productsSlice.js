import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productsToShow } from '../components/Pagination';
import axios from 'axios';
axios.defaults.baseURL = 'https://fakestoreapi.com/';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue, dispatch }) => {
    const result = await axios.get('products');
    dispatch(setProducts(result.data));
  },
);

export const getProductsByFilter = createAsyncThunk(
  'products/getProductsByFilter',
  async (_, { rejectWithValue, dispatch }) => {
    const result = await axios.get('products');
    dispatch(filterProducts(result.data));
  },
);

export const getAllProductsCount = createAsyncThunk(
  'products/getAllProductsCount',
  async (_, { rejectWithValue, dispatch }) => {
    const result = await axios.get('products');
    dispatch(setAllProductsCount(result.data.length));
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    firstNumber: 0,
    category: '',
    lastNumber: productsToShow,
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
      state.products = action.payload.slice(state.firstNumber, state.lastNumber);
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    filterProducts(state, action) {
      action.payload
        ? (state.productsFiltred = action.payload.filter(
            (item) => item.category === state.category,
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
    [getProductsByFilter.fulfilled]: (state) => {
      state.loading = false;
      state.error = false;
    },
    [getProductsByFilter.pending]: (state) => {
      state.loading = true;
    },
  },
});

export const {
  setProducts,
  filterProducts,
  setFirstNumber,
  setLastNumber,
  setAllProductsCount,
  setCategory,
} = productsSlice.actions;
export default productsSlice.reducer;
