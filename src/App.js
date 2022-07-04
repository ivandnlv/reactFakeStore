import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Categories from './components/Categories';
import Header from './components/Header';
import Pagination from './components/Pagination';
import ProductsList from './components/ProductsList';
import Search from './components/Search';
import { getAllProductsCount, getProducts } from './redux/slices/productsSlice';
import { getCategories } from './redux/slices/categoriesSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsCount());
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  return (
    <div className="App dark: bg-slate-800">
      <h1 className="text-4xl font-bold text-center mt-10 text-white">Магазин</h1>
      <div className="container mt-10 m-auto w-auto bg-sky-900 text-white p-10 rounded-xl">
        <Search />
        <Header />
        <Categories />
        <div className="flex justify-between w-full">
          <ProductsList />
        </div>
        <div className="mt-5">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;
