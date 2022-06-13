import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../App';
import ProductsItem from './ProductsItem';

const ProductsList = () => {
  const { searchValue } = useContext(SearchContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      const products = await axios
        .get('https://fakestoreapi.com/products?limit=12')
        .then((res) => setProducts(res.data))
        .catch(() => alert('Произошла ошибка'))
        .finally(() => setLoading(false));
    };
    getProducts();
  }, []);

  return (
    <div className="grid mt-5 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {loading
        ? [...Array(6)].map((item, index) => <ProductsItem loading={loading} />)
        : products
            .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item) => <ProductsItem {...item} key={item.id} loading={loading} />)}
    </div>
  );
};

export default ProductsList;
