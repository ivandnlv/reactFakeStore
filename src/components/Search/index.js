import React, { useContext } from 'react';
import { SearchContext } from '../../App';
import searchIcon from './search.svg';

const Search = ({ onChange }) => {
  const { searchValue } = useContext(SearchContext);

  return (
    <label className="flex bg-white p-2 pl-3 pr-4 rounded-lg w-1/5">
      <img src={searchIcon} alt="search-icon" width={28} height={28} />
      <input
        value={searchValue}
        type="text"
        placeholder="Поиск..."
        className="pl-2 outline-none border-none text-black w-full block"
        onChange={(e) => onChange(e)}
      />
    </label>
  );
};

export default Search;
