import { useSelector } from 'react-redux';
import Categories from './components/Categories';
import Pagination from './components/Pagination';
import ProductsList from './components/ProductsList';
import Search from './components/Search';

function App() {
  const searchValue = useSelector((state) => state.search.searchValue);

  return (
    <div className="App dark: bg-slate-800">
      <h1 className="text-4xl font-bold text-center mt-10 text-white">Магазин</h1>
      <div className="container mt-10 m-auto w-auto bg-sky-900 text-white p-10 rounded-xl">
        <div className="flex w-full justify-between items-center">
          {searchValue === '' ? (
            <h2 className="text-2xl font-semibold">Каталог товаров нашего магазина</h2>
          ) : (
            <h2 className="text-2xl font-semibold">Поиск по запросу: {searchValue}</h2>
          )}
          <Pagination />
          <Search />
        </div>
        <div className="flex justify-between w-full">
          <ProductsList />
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default App;
