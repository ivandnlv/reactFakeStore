import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../features/categoriesSlice';
import { useDispatch } from 'react-redux';
import CategoriesSkeleton from '../UI/CategoriesSkeleton';
import { filterProducts, getProductsByFilter, setCategory } from '../features/productsSlice';

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const onCategoryClick = (category) => {
    dispatch(setCategory(category));
    dispatch(getProductsByFilter());
    dispatch(filterProducts());
  };

  const { categories, loading, error } = useSelector((state) => state.categories);
  const { productsFiltred } = useSelector((state) => state.products);

  return (
    <div className="flex mt-5 w-full justify-between">
      {loading ? (
        [...Array(3)].map((item, index) => <CategoriesSkeleton key={index} />)
      ) : error ? (
        <p>"Не удалось загрузить список категорий, попробуйте обновить страницу"</p>
      ) : (
        categories.map((item) => (
          <p
            onClick={() => onCategoryClick(item)}
            key={item}
            className="bg-slate-200 hover:bg-slate-100 active:bg-slate-300 transition-colors rounded-full p-2 text-slate-800 font-bold mb-3 text-center cursor-pointer show">
            {item}
          </p>
        ))
      )}
      {productsFiltred.length !== 0 && (
        <p
          onClick={() => onCategoryClick('')}
          className="bg-slate-200 hover:bg-slate-100 active:bg-slate-300 transition-colors rounded-full p-2 text-slate-800 font-bold mb-3 text-center cursor-pointer show">
          Отменить
        </p>
      )}
    </div>
  );
};

export default Categories;
