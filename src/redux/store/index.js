import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from '../slices/categoriesSlice';
import productsSlice from '../slices/productsSlice';
import searchSlice from '../slices/searchSlice';

export default configureStore({
  reducer: {
    search: searchSlice,
    categories: categoriesSlice,
    products: productsSlice,
  },
});
