import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { CategoriesContext, SearchContext } from '../App';
import ProductsItem from './ProductsItem';

const ProductsList = () => {
  const { searchValue } = useContext(SearchContext);
  const { setCategories } = useContext(CategoriesContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      const products = await axios
        .get('https://fakestoreapi.com/products?limit=8')
        .then((res) => {
          res.data.forEach((item) => {
            setCategories((prev) =>
              !prev.includes(item.category) ? [...prev, item.category] : [...prev],
            );
          });
          setProducts(res.data);
        })
        .catch(() => alert('Произошла ошибка'))
        .finally(() => setLoading(false));
    };
    getProducts();
  }, []);

  return (
    <div className="grid mt-5 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-3/4 flex-auto">
      {loading
        ? [...Array(6)].map((item) => <ProductsItem loading={loading} />)
        : products
            .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item) => <ProductsItem {...item} key={item.id} loading={loading} />)}
    </div>
  );
};

export default ProductsList;
