import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/searchSlice';
import searchIcon from './search.svg';

const Search = ({}) => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.searchValue);
  const isProductsLoading = useSelector((state) => state.products.loading);

  const onSearchChange = (value) => {
    dispatch(setSearchValue(value));
  };

  return (
    <label className="flex bg-white p-2 pl-3 pr-4 rounded-lg w-full">
      <img src={searchIcon} alt="search-icon" width={28} height={28} />
      {isProductsLoading ? (
        <input
          value={searchValue}
          type="text"
          disabled
          placeholder="Поиск..."
          className="pl-2 outline-none border-none text-black w-full block"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      ) : (
        <input
          value={searchValue}
          type="text"
          placeholder="Поиск..."
          className="pl-2 outline-none border-none text-black w-full block"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      )}
    </label>
  );
};

export default Search;
