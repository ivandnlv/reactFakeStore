import ProductsSkeleton from '../../UI/ProductsSkeleton';
import { useSelector } from 'react-redux';
import ProductsItem from '../ProductsItem';
import { productsToShow } from '../Pagination';

import styles from './ProductsList.module.scss';

const ProductsList = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const { products, loading, error, productsFiltred } = useSelector((state) => state.products);

  return (
    <div className={styles.productsList + ' mt-5 lg:gap-8 md:gap-5 sm: w-full flex-auto'}>
      {loading
        ? [...Array(productsToShow)].map((item, index) => <ProductsSkeleton key={index} />)
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
