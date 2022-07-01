import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  setFirstNumber,
  setLastNumber,
  getAllProductsCount,
  getProducts,
} from '../features/productsSlice';

const Pagination = () => {
  const productsToShow = 8;

  const [currentPage, setCurrentPage] = useState(1);
  const [firstNumberLocal, setFirstNumberLocal] = useState(0);
  const [lastNumberLocal, setLastNumberLocal] = useState(currentPage * productsToShow);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsCount());
  }, []);

  const { allProductsCount } = useSelector((state) => state.products);

  const onPageClick = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      dispatch(setFirstNumber(productsToShow * (page - 1)));
      dispatch(setLastNumber(page * productsToShow));
      dispatch(getProducts());
    }
  };

  const numbers = [];

  for (let i = 1; i <= Math.floor(allProductsCount / productsToShow); i++) {
    numbers.push(i);
  }

  return (
    <div className="flex">
      {numbers.map((number) =>
        number === currentPage ? (
          <button
            className="mr-2 bg-sky-600  p-2 pr-4 pl-4 rounded-md cursor-pointer font-bold"
            key={number}>
            {number}
          </button>
        ) : (
          <button
            key={number}
            onClick={(e) => onPageClick(+e.target.textContent)}
            className="mr-2 bg-slate-400 hover:bg-slate-300 active:bg-slate-500 p-2 pr-4 pl-4 rounded-md cursor-pointer font-bold transition-colors">
            {number}
          </button>
        ),
      )}
    </div>
  );
};

export default Pagination;
