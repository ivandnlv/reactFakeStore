import ProductsSkeleton from '../UI/ProductsSkeleton';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../features/productsSlice';
import ProductsItem from './ProductsItem';

const ProductsList = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.searchValue);
  const { products, loading, error, productsFiltred } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="grid mt-5 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 w-3/4 flex-auto">
      {loading
        ? [...Array(6)].map((item, index) => <ProductsSkeleton key={index} />)
        : error
        ? alert('Произошла ошибка')
        : productsFiltred.length !== 0
        ? productsFiltred
            .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item) => <ProductsItem {...item} key={item.id} loading={loading} />)
        : products
            ?.filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item) => <ProductsItem {...item} key={item.id} loading={loading} />)}
    </div>
  );
};

export default ProductsList;
