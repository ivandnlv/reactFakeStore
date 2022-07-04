import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  setFirstNumber,
  setLastNumber,
  getProducts,
  filterProducts,
} from '../redux/slices/productsSlice';

export const productsToShow = 8;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const { allProductsCount, productsFiltred, loading } = useSelector((state) => state.products);

  const onPageClick = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      dispatch(setFirstNumber(productsToShow * (page - 1)));
      dispatch(setLastNumber(page * productsToShow));
      dispatch(getProducts());
    }
  };

  const numbers = [];

  if (productsFiltred.length === 0) {
    for (let i = 1; i <= Math.floor(allProductsCount / productsToShow); i++) {
      numbers.push(i);
    }
  } else {
    for (let i = 1; i <= Math.floor(filterProducts.length / productsToShow); i++) {
      numbers.push(i);
    }
  }

  return (
    <div className="flex">
      {numbers.length > 1 &&
        numbers.map((number) =>
          number === currentPage ? (
            <button
              className="mr-2 bg-sky-600  p-2 pr-4 pl-4 rounded-md cursor-pointer font-bold"
              key={number}>
              {number}
            </button>
          ) : (
            !loading && (
              <button
                key={number}
                onClick={(e) => onPageClick(+e.target.textContent)}
                className="mr-2 bg-slate-400 hover:bg-slate-300 active:bg-slate-500 p-2 pr-4 pl-4 rounded-md cursor-pointer font-bold transition-colors">
                {number}
              </button>
            )
          ),
        )}
    </div>
  );
};

export default Pagination;
