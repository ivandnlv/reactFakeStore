import { createContext, useState } from 'react';
import ProductsList from './components/ProductsList';
import Search from './components/Search';

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="App dark: bg-slate-800">
      <h1 className="text-4xl font-bold text-center mt-10 text-white">Магазин</h1>
      <div className="container mt-10 m-auto w-auto bg-sky-900 text-white p-10 rounded-xl">
        <div className="flex w-full justify-between items-center">
          <SearchContext.Provider value={{ searchValue }}>
            {searchValue === '' ? (
              <h2 className="text-2xl font-semibold">Каталог товаров нашего магазина</h2>
            ) : (
              <h2 className="text-2xl font-semibold">Поиск по запросу: {searchValue}</h2>
            )}
            <Search onChange={onSearchChange} />
          </SearchContext.Provider>
        </div>
        <SearchContext.Provider value={{ searchValue }}>
          <ProductsList />
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
