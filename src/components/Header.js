import { useSelector } from 'react-redux';

const Header = () => {
  const searchValue = useSelector((state) => state.search.searchValue);

  return (
    <div className="flex w-full justify-between items-center mt-5">
      {searchValue === '' ? (
        <h2 className="text-2xl font-semibold">Каталог товаров нашего магазина</h2>
      ) : (
        <h2 className="text-2xl font-semibold">Поиск по запросу: {searchValue}</h2>
      )}
      <div className="rounded-3xl bg-sky-600 hover:bg-sky-500 active:bg-sky-700 transition-colors flex items-center p-4 pl-8 pr-8 cursor-pointer font-bold">
        Корзина
        <div className="w-0.5 h-6 bg-white ml-2 "></div>
        <span className="ml-2">0$</span>
      </div>
    </div>
  );
};

export default Header;
